import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { getRequestEvent } from '$app/server';
import { building } from '$app/environment';

/**
 * Lazy database instance.
 * Local dev: caches a single client for the process lifetime.
 * Workers: creates a fresh client per request (Hyperdrive connection strings
 * are per-invocation, but postgres-js is lightweight to instantiate).
 */
let _localDb: ReturnType<typeof drizzle> | null = null;

export function getDb(): ReturnType<typeof drizzle> {
	// Check if Hyperdrive is available (Workers environment)
	let hyperdriveUrl: string | undefined;
	try {
		const event = getRequestEvent();
		const hyperdrive = (event?.platform?.env as unknown as Record<string, unknown>)?.HYPERDRIVE as
			| { connectionString?: string }
			| undefined;
		hyperdriveUrl = hyperdrive?.connectionString;
	} catch {
		// Not in request context
	}

	if (hyperdriveUrl) {
		// Workers: fresh client per request using Hyperdrive
		const client = postgres(hyperdriveUrl, { prepare: false });
		return drizzle(client, { schema });
	}

	// Local dev: reuse cached client
	if (!_localDb) {
		if (!env.DATABASE_URL) {
			throw new Error('DATABASE_URL environment variable is not set');
		}
		const client = postgres(env.DATABASE_URL, { prepare: false });
		_localDb = drizzle(client, { schema });
	}
	return _localDb;
}

// Proxy export for backwards compatibility — all property accesses
// are forwarded to the lazily-resolved db instance
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
	get(_target, prop) {
		return (getDb() as unknown as Record<string | symbol, unknown>)[prop];
	}
});

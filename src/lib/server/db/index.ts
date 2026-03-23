import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { getRequestEvent } from '$app/server';

type DrizzleInstance = ReturnType<typeof drizzle<typeof schema>>;

/**
 * Cache for database instances to enable connection pooling.
 * Caching by connection string handles both local dev and Hyperdrive
 * (which may provide different strings across invocations).
 */
const dbCache = new Map<string, DrizzleInstance>();

export function getDb(): DrizzleInstance {
	let connectionString = env.DATABASE_URL || '';

	// Check if Hyperdrive is available (Workers environment)
	try {
		const event = getRequestEvent();
		const hyperdrive = (event?.platform?.env as unknown as Record<string, unknown>)?.HYPERDRIVE as
			| { connectionString?: string }
			| undefined;

		if (hyperdrive?.connectionString) {
			connectionString = hyperdrive.connectionString;
		}
	} catch {
		// Not in request context, fallback to env.DATABASE_URL
	}

	let cached = dbCache.get(connectionString);
	if (!cached) {
		// Initialize fresh client and Drizzle instance
		const client = postgres(connectionString, { prepare: false });
		cached = drizzle(client, { schema });
		dbCache.set(connectionString, cached);
	}

	return cached;
}

/**
 * Proxy export for lazy database resolution.
 * All property accesses are forwarded to the cached db instance.
 * Using a cache ensures we reuse the same postgres-js client for
 * connection pooling, even on Cloudflare Workers.
 */
export const db = new Proxy({} as DrizzleInstance, {
	get(_target, prop) {
		const targetDb = getDb();
		return targetDb[prop as keyof DrizzleInstance];
	}
});

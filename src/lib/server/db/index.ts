import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { getRequestEvent } from '$app/server';

/**
 * Get the database instance.
 * Workers: creates a fresh client per request.
 */
export function getDb(): ReturnType<typeof drizzle> {
	// Check if Hyperdrive or a direct connection string is available
	let databaseUrl: string | undefined;

	try {
		const event = getRequestEvent();
		// In Workers environment, we check platform.env
		const platformEnv = event?.platform?.env as unknown as Record<string, unknown>;
		const hyperdrive = platformEnv?.HYPERDRIVE as { connectionString?: string } | undefined;
		databaseUrl = hyperdrive?.connectionString || (platformEnv?.DATABASE_URL as string);
	} catch {
		// Not in request context
	}

	// Fallback to environment variable (local dev or build time)
	if (!databaseUrl) {
		databaseUrl = env.DATABASE_URL;
	}

	if (!databaseUrl) {
		throw new Error('DATABASE_URL environment variable is not set');
	}

	const client = neon(databaseUrl);
	return drizzle(client, { schema });
}

// Proxy export for backwards compatibility
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
	get(_target, prop) {
		return (getDb() as unknown as Record<string | symbol, unknown>)[prop];
	}
});

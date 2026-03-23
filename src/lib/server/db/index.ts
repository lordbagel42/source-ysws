import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import * as appEnv from '$app/environment';
import * as appServer from '$app/server';

/**
 * Lazy database instance.
 */
let _localDb: ReturnType<typeof drizzle> | null = null;

/**
 * Creates a recursive proxy that returns itself for any property access or function call.
 * This is used during build time to prevent crashes when DATABASE_URL is missing.
 */
const createSafeDummy = () => {
	const dummy: any = new Proxy(() => dummy, {
		get: (target, prop) => {
			if (prop === 'then') return undefined;
			if (prop === Symbol.iterator) return [][Symbol.iterator];
			if (prop === Symbol.asyncIterator) return (async function* () {})()[Symbol.asyncIterator];
			return dummy;
		},
		apply: () => dummy
	});
	return dummy;
};

export function getDb(): ReturnType<typeof drizzle> {
	const building = appEnv?.building;
	const getRequestEvent = appServer?.getRequestEvent;

	// Check if Hyperdrive is available (Workers environment)
	let hyperdriveUrl: string | undefined;
	let event: any = null;
	if (getRequestEvent) {
		try {
			event = getRequestEvent();
			const hyperdrive = (event?.platform?.env as unknown as Record<string, unknown>)?.HYPERDRIVE as
				| { connectionString?: string }
				| undefined;
			hyperdriveUrl = hyperdrive?.connectionString;
		} catch {
			// Not in request context
		}
	}

	if (hyperdriveUrl) {
		// Workers: fresh client per request using Hyperdrive
		const client = postgres(hyperdriveUrl, { prepare: false });
		return drizzle(client, { schema });
	}

	// Local dev / Build time / CLI: reuse cached client
	if (!_localDb) {
		const url = env.DATABASE_URL || (typeof process !== 'undefined' ? process.env.DATABASE_URL : undefined);
		if (!url) {
			if (building || !event || (typeof process !== 'undefined' && process.env.NODE_ENV === 'test')) {
				console.warn('DATABASE_URL is missing, providing safe dummy db');
				return createSafeDummy() as unknown as ReturnType<typeof drizzle>;
			}
			throw new Error('DATABASE_URL is not defined');
		}
		const client = postgres(url, { prepare: false });
		_localDb = drizzle(client, { schema });
	}
	return _localDb;
}

// Proxy export for backwards compatibility — all property accesses
// are forwarded to the lazily-resolved db instance
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
	get(_target, prop) {
		const resolvedDb = getDb();
		return (resolvedDb as unknown as Record<string | symbol, unknown>)[prop];
	}
});

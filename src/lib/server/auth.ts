import { betterAuth } from 'better-auth/minimal';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { genericOAuth } from 'better-auth/plugins';
import { env } from '$env/dynamic/private';
import { getRequestEvent } from '$app/server';
import { db } from '$lib/server/db';
import { building } from '$app/environment';

export const auth = betterAuth({
	baseURL: {
		allowedHosts: ['*.enderium42.workers.dev', '*raygen.dev', 'localhost:*'],
		fallback: env.ORIGIN || 'http://localhost:5173'
	},
	secret: env.BETTER_AUTH_SECRET || (building ? 'build-time-secret-only' : undefined),
	database: drizzleAdapter(db, { provider: 'pg' }),
	emailAndPassword: { enabled: true },
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: 'hackclub',
					discoveryUrl: 'https://auth.hackclub.com/.well-known/openid-configuration',
					clientId: env.HACKCLUB_CLIENT_ID!,
					clientSecret: env.HACKCLUB_CLIENT_SECRET!,
					scopes: ['openid', 'profile', 'email', 'verification_status']
				}
			]
		}),
		sveltekitCookies(getRequestEvent) // must be last
	]
});

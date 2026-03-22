import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { genericOAuth } from 'better-auth/plugins';
import { getRequestEvent } from '$app/server';
import { db } from '$lib/server/db';

const BETTER_AUTH_SECRET = process.env.BETTER_AUTH_SECRET || 'build-time-secret-only';
const HACKCLUB_CLIENT_ID = process.env.HACKCLUB_CLIENT_ID || '';
const HACKCLUB_CLIENT_SECRET = process.env.HACKCLUB_CLIENT_SECRET || '';

// better-auth reads BETTER_AUTH_URL automatically for baseURL.
// When unset, svelteKitHandler falls back to the request origin,
// which avoids port-mismatch 404s during local development.
export const auth = betterAuth({
	secret: BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, { provider: 'pg' }),
	emailAndPassword: { enabled: true },
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: 'hackclub',
					discoveryUrl: 'https://auth.hackclub.com/.well-known/openid-configuration',
					clientId: HACKCLUB_CLIENT_ID,
					clientSecret: HACKCLUB_CLIENT_SECRET,
					scopes: ['openid', 'profile', 'email', 'verification_status']
				}
			]
		}),
		sveltekitCookies(getRequestEvent) // must be last
	]
});

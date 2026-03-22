import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { genericOAuth } from 'better-auth/plugins';
import { dash } from '@better-auth/infra';
import { getRequestEvent } from '$app/server';
import { db } from '$lib/server/db';

const BETTER_AUTH_SECRET = process.env.BETTER_AUTH_SECRET || 'build-time-secret-only';
const HACKCLUB_CLIENT_ID = process.env.HACKCLUB_CLIENT_ID || '';
const HACKCLUB_CLIENT_SECRET = process.env.HACKCLUB_CLIENT_SECRET || '';
const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL || '';

export const auth = betterAuth({
	baseURL: BETTER_AUTH_URL || undefined,
	secret: BETTER_AUTH_SECRET,
	trustedOrigins: [BETTER_AUTH_URL, 'http://localhost:5173', 'http://localhost:4173'].filter(
		Boolean
	),
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
					scopes: ['openid', 'email', 'name', 'profile', 'verification_status', 'slack_id'],
					mapProfileToUser: (profile) => ({
						name: profile.name || profile.nickname || 'Hack Clubber',
						email: profile.email,
						image: profile.picture || undefined
					})
				}
			]
		}),
		dash(),
		sveltekitCookies(getRequestEvent) // must be last
	]
});

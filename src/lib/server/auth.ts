import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { genericOAuth } from 'better-auth/plugins';
import { env } from '$env/dynamic/private';
import { db } from '$lib/server/db';
import { building } from '$app/environment';

export const auth = betterAuth({
	baseURL: env.BETTER_AUTH_URL || 'http://localhost:5173',
	secret: env.BETTER_AUTH_SECRET || (building ? 'build-time-secret-only' : undefined),
	database: drizzleAdapter(db, {
		provider: 'pg',
		useRuntimeFilters: true
	}),
	emailAndPassword: { enabled: true },
	socialProviders: {
		github: {
			clientId: env.GITHUB_CLIENT_ID || 'dummy',
			clientSecret: env.GITHUB_CLIENT_SECRET || 'dummy'
		}
	},
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: 'hackclub',
					clientId: env.HACKCLUB_CLIENT_ID || '',
					clientSecret: env.HACKCLUB_CLIENT_SECRET || '',
					authorizationUrl: 'https://auth.hackclub.com/oauth/authorize',
					tokenUrl: 'https://auth.hackclub.com/oauth/token',
					userInfoUrl: 'https://auth.hackclub.com/api/v1/me',
					scopes: ['openid', 'profile', 'email'],
					mapProfileToUser: async (profile: any) => {
						return {
							name: profile.nickname || profile.name,
							email: profile.email,
							image: profile.avatar
						};
					}
				}
			]
		}),
		sveltekitCookies() // make sure this is the last plugin in the array
	]
});

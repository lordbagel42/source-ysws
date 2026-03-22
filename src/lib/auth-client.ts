import { createAuthClient } from 'better-auth/svelte';
import { emailOTPClient, genericOAuthClient } from 'better-auth/client/plugins';
import { dashClient } from '@better-auth/infra/client';

export const authClient = createAuthClient({
	baseURL: typeof window !== 'undefined' ? window.location.origin : undefined,
	plugins: [genericOAuthClient(), dashClient(), emailOTPClient()]
});

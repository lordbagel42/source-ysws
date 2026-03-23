import { createAuthClient } from 'better-auth/svelte';
import { adminClient, genericOAuthClient } from 'better-auth/client/plugins';
import { dashClient } from '@better-auth/infra/client';

export const authClient = createAuthClient({
	plugins: [genericOAuthClient(), adminClient(), dashClient()]
});

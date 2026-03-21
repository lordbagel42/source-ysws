import { createAuthClient } from 'better-auth/svelte';
import { genericOAuthClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
	baseURL: 'http://localhost:5173', // This should be updated for prod
	plugins: [genericOAuthClient()]
});

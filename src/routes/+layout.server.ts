import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	return {
		user: event.locals.user ?? null,
		commitSha: env.CF_PAGES_COMMIT_SHA ?? env.COMMIT_SHA ?? 'dev'
	};
};

import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/auth';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) {
		return redirect(302, '/demo/better-auth');
	}
	return {};
};

export const actions: Actions = {
	signInOAuth: async (event) => {
		const formData = await event.request.formData();
		const providerId = formData.get('providerId')?.toString() ?? 'hackclub';
		const callbackURL = formData.get('callbackURL')?.toString() ?? '/demo/better-auth';

		const result = await auth.api.signInWithOAuth2({
			body: {
				providerId,
				callbackURL
			}
		});

		if (result.url) {
			return redirect(302, result.url);
		}
		return fail(400, { message: 'OAuth sign-in failed' });
	}
};

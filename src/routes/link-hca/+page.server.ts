import { redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { account } from '$lib/server/db/schema';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		throw redirect(302, '/login');
	}

	const hcaAccounts = await db
		.select({ id: account.id })
		.from(account)
		.where(and(eq(account.userId, event.locals.user.id), eq(account.providerId, 'hackclub')))
		.limit(1);

	if (hcaAccounts.length > 0) {
		throw redirect(302, '/');
	}

	return { user: event.locals.user };
};

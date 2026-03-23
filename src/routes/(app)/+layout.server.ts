import { error, redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';
import type { LayoutServerLoad } from './$types';
import { db } from '$lib/server/db';
import { account } from '$lib/server/db/schema';

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user) {
		throw redirect(302, '/login');
	}

	let hcaLinked = false;
	try {
		const hcaAccounts = await db
			.select({ id: account.id })
			.from(account)
			.where(and(eq(account.userId, event.locals.user.id), eq(account.providerId, 'hackclub')))
			.limit(1);
		hcaLinked = hcaAccounts.length > 0;
	} catch (err) {
		console.error('Failed to check HCA link status:', err);
		throw error(500, 'Unable to verify account status. Please try again later.');
	}

	if (!hcaLinked) {
		throw redirect(302, '/link-hca');
	}

	return { user: event.locals.user };
};

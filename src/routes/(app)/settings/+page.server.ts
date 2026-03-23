import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { account, passkey } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async (event) => {
	const userId = event.locals.user!.id;

	const [accounts, passkeys] = await Promise.all([
		db
			.select({ providerId: account.providerId, createdAt: account.createdAt })
			.from(account)
			.where(eq(account.userId, userId)),
		db
			.select({ id: passkey.id, name: passkey.name, createdAt: passkey.createdAt })
			.from(passkey)
			.where(eq(passkey.userId, userId))
	]);

	return { accounts, passkeys };
};

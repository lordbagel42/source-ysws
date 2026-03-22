import { db } from '$lib/server/db';
import { hardwareRequests, activityLogs, streaks } from '$lib/server/db/schema';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user;
	if (!user) throw redirect(302, '/login');

	const requests = await db.query.hardwareRequests.findMany({
		where: (hr, { eq }) => eq(hr.userId, user.id),
		orderBy: (hr, { desc }) => [desc(hr.createdAt)]
	});

	return {
		requests: requests.map((r) => ({
			...r,
			unitPrice: Number(r.unitPrice)
		}))
	};
};

export const actions: Actions = {
	requestPart: async ({ request, locals }) => {
		const user = locals.user;
		if (!user) throw redirect(302, '/login');

		const formData = await request.formData();
		const vendor = formData.get('vendor')?.toString();
		const componentUrl = formData.get('componentUrl')?.toString();
		const unitPriceStr = formData.get('unitPrice')?.toString();
		const quantityStr = formData.get('quantity')?.toString();

		if (!vendor || !componentUrl || !unitPriceStr || !quantityStr) {
			return fail(400, { message: 'Missing required fields' });
		}

		const unitPrice = parseFloat(unitPriceStr);
		const quantity = parseInt(quantityStr);

		if (isNaN(unitPrice) || isNaN(quantity)) {
			return fail(400, { message: 'Invalid numeric values' });
		}

		// Budget validation (simple for now)
		const currentRequests = await db.query.hardwareRequests.findMany({
			where: (hr, { eq }) => eq(hr.userId, user.id)
		});
		const totalSpent = currentRequests.reduce(
			(acc, r) => acc + Number(r.unitPrice) * r.quantity,
			0
		);
		if (totalSpent + unitPrice * quantity > 275) {
			return fail(400, { message: 'Budget limit exceeded ($275.00 MAX)' });
		}

		try {
			await db.transaction(async (tx) => {
				await tx.insert(hardwareRequests).values({
					userId: user.id,
					vendor,
					componentUrl,
					unitPrice: unitPrice.toString(),
					quantity,
					status: 'PENDING'
				});

				await tx.insert(activityLogs).values({
					userId: user.id,
					activityType: 'HARDWARE_REQUEST',
					description: `Requested ${quantity}x part from ${vendor}`
				});

				// Update streak on activity
				await updateStreak(user.id, tx);
			});

			return { success: true };
		} catch (error) {
			console.error('Failed to submit hardware request:', error);
			return fail(500, { message: 'Failed to submit request' });
		}
	}
};

async function updateStreak(userId: string, tx: any) {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const userStreak = await tx.query.streaks.findFirst({
		where: (s: any, { eq }: any) => eq(s.userId, userId)
	});

	if (!userStreak) {
		await tx.insert(streaks).values({
			userId,
			currentStreak: 1,
			maxStreak: 1,
			lastActivityDate: new Date()
		});
	} else {
		const lastDate = userStreak.lastActivityDate ? new Date(userStreak.lastActivityDate) : null;
		if (lastDate) {
			lastDate.setHours(0, 0, 0, 0);
			const diff = today.getTime() - lastDate.getTime();
			const oneDay = 24 * 60 * 60 * 1000;

			if (diff === oneDay) {
				const newStreak = userStreak.currentStreak + 1;
				await tx
					.update(streaks)
					.set({
						currentStreak: newStreak,
						maxStreak: Math.max(userStreak.maxStreak, newStreak),
						lastActivityDate: new Date()
					})
					.where(eq(streaks.userId, userId));
			} else if (diff > oneDay) {
				await tx
					.update(streaks)
					.set({
						currentStreak: 1,
						lastActivityDate: new Date()
					})
					.where(eq(streaks.userId, userId));
			}
		} else {
			await tx
				.update(streaks)
				.set({
					currentStreak: 1,
					maxStreak: Math.max(userStreak.maxStreak, 1),
					lastActivityDate: new Date()
				})
				.where(eq(streaks.userId, userId));
		}
	}
}

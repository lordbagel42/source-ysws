import { db } from '$lib/server/db';
import { shipments } from '$lib/server/db/schema';
import type { PageServerLoad, Actions } from './$types';
import { eq, desc, sql } from 'drizzle-orm';
import { fail, redirect } from '@sveltejs/kit';
import { activityLogs, streaks } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ locals }) => {
	const recentShipments = await db.query.shipments.findMany({
		where: (s, { eq }) => eq(s.isPublic, true),
		limit: 6,
		orderBy: (s, { desc }) => [desc(s.createdAt)]
	});

	// Get total shipment count for proof of work
	const result = await db.select({
		count: sql<number>`count(*)`
	}).from(shipments).where(eq(shipments.isPublic, true));

	const count = Number(result[0]?.count ?? 0);

	return {
		recentShipments,
		totalValidated: count,
		user: locals.user // Pass user to determine whether to show LandingPage or Dashboard
	};
};

export const actions: Actions = {
	initializeBuild: async ({ locals }) => {
		const user = locals.user;
		if (!user) throw redirect(302, '/login');

		try {
			await db.transaction(async (tx) => {
				const [newShipment] = await tx.insert(shipments).values({
					userId: user.id,
					title: 'NEW_OPERATOR_PROJECT_' + Math.floor(Math.random() * 1000),
					description: 'Initialized from SOURCE terminal.',
					isPublic: true
				}).returning();

				await tx.insert(activityLogs).values({
					userId: user.id,
					activityType: 'INITIALIZE_BUILD',
					description: `Started project ${newShipment.title}`
				});

				await updateStreakInternal(user.id, tx);
			});

			return { success: true };
		} catch (error) {
			console.error('Failed to initialize build:', error);
			return fail(500, { message: 'Failed to initialize build sequence.' });
		}
	}
};

async function updateStreakInternal(userId: string, tx: any) {
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
				await tx.update(streaks).set({
					currentStreak: newStreak,
					maxStreak: Math.max(userStreak.maxStreak, newStreak),
					lastActivityDate: new Date()
				}).where(eq(streaks.userId, userId));
			} else if (diff > oneDay) {
				await tx.update(streaks).set({
					currentStreak: 1,
					lastActivityDate: new Date()
				}).where(eq(streaks.userId, userId));
			}
		} else {
			await tx.update(streaks).set({
				currentStreak: 1,
				maxStreak: Math.max(userStreak.maxStreak, 1),
				lastActivityDate: new Date()
			}).where(eq(streaks.userId, userId));
		}
	}
}

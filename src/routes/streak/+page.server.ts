import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { activityLogs } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';
import { eq, sql } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user;
	if (!user) throw redirect(302, '/login');

	const [userStreak, logs] = await Promise.all([
		db.query.streaks.findFirst({
			where: (s, { eq }) => eq(s.userId, user.id)
		}),
		db.query.activityLogs.findMany({
			where: (al, { eq }) => eq(al.userId, user.id),
			orderBy: (al, { desc }) => [desc(al.timestamp)],
			limit: 10
		})
	]);

	// Fetch activity counts for heatmap (simplified for now)
	const heatmapRaw = await db
		.select({
			date: sql<string>`DATE(${activityLogs.timestamp})`,
			count: sql<number>`count(*)`
		})
		.from(activityLogs)
		.where(eq(activityLogs.userId, user.id))
		.groupBy(sql`DATE(${activityLogs.timestamp})`);

	return {
		streak: userStreak || { currentStreak: 0, maxStreak: 0 },
		logs,
		heatmap: heatmapRaw
	};
};

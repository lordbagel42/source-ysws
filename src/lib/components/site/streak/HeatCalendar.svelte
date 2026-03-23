<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';
	// 30-day heat calendar with intensity levels
	const today = new SvelteDate();
	const currentStreakStart = 7; // streak started 7 days ago

	// Generate 30 days of fake activity data (0-4 intensity)
	const days: { date: Date; intensity: number; inStreak: boolean }[] = Array.from(
		{ length: 30 },
		(_, i) => {
			const date = new SvelteDate(today);
			date.setDate(date.getDate() - (29 - i));
			const daysAgo = 29 - i;
			const inStreak = daysAgo < currentStreakStart;
			// Fake pattern: higher intensity for recent days, some gaps
			const patterns = [
				0, 2, 0, 1, 3, 0, 0, 2, 4, 1, 0, 3, 2, 0, 1, 4, 3, 2, 0, 0, 1, 2, 3, 3, 4, 2, 3, 4, 3, 4
			];
			return { date, intensity: patterns[i], inStreak };
		}
	);

	const intensityColors = [
		'var(--surface-container)', // 0: no activity
		'rgba(240, 255, 0, 0.4)', // 1: low — yellow
		'rgba(255, 140, 0, 0.5)', // 2: medium — orange
		'rgba(0, 255, 65, 0.5)', // 3: high — green
		'rgba(0, 255, 65, 0.8)' // 4: max — bright green
	];

	const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

	function formatTitle(day: { date: Date; intensity: number }): string {
		const dateStr = day.date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric'
		});
		const level = ['No activity', 'Low', 'Medium', 'High', 'Maximum'][day.intensity];
		return `${dateStr}: ${level} activity`;
	}
</script>

<section
	aria-label="30-day activity heat map"
	class="hard-shadow border-2 border-[var(--border)] bg-[var(--surface-container-low)] p-6"
>
	<h3
		class="mb-4 font-headline text-lg font-bold tracking-wider text-[var(--foreground)] uppercase"
	>
		> HEAT_MAP <span class="text-[var(--on-surface-variant)]">// 30 DAYS</span>
	</h3>

	<!-- Weekday headers -->
	<div class="mb-2 grid grid-cols-7 gap-1" aria-hidden="true">
		{#each weekdays as day, i (i)}
			<div class="text-center font-mono text-xs text-[var(--on-surface-variant)]">{day}</div>
		{/each}
	</div>

	<!-- Calendar grid -->
	<div class="grid grid-cols-7 gap-1" role="grid" aria-label="Activity calendar">
		<!-- Offset for first day alignment -->
		{#each Array.from({ length: days[0].date.getDay() }, (__, idx) => idx) as i (i)}
			<div aria-hidden="true"></div>
		{/each}

		{#each days as day, i (i)}
			<div
				class="aspect-square border-2 transition-colors"
				style="background: {intensityColors[day.intensity]}; border-color: {day.inStreak &&
				day.intensity > 0
					? 'var(--primary)'
					: 'var(--border)'}; {day.inStreak && day.intensity > 0
					? 'box-shadow: 0 0 6px rgba(0, 255, 65, 0.3);'
					: ''}"
				role="gridcell"
				aria-label={formatTitle(day)}
				title={formatTitle(day)}
			></div>
		{/each}
	</div>

	<!-- Legend -->
	<div class="mt-4 flex items-center justify-between">
		<span class="font-mono text-xs text-[var(--on-surface-variant)]">LESS</span>
		<div class="flex gap-1" aria-label="Activity intensity legend">
			{#each intensityColors as color, i (i)}
				<div
					class="h-3 w-3 border border-[var(--border)]"
					style="background: {color};"
					aria-label={['None', 'Low', 'Medium', 'High', 'Maximum'][i]}
				></div>
			{/each}
		</div>
		<span class="font-mono text-xs text-[var(--on-surface-variant)]">MORE</span>
	</div>
</section>

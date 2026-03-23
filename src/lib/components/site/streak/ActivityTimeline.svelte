<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';
	import { Badge } from '$lib/components/ui/badge';
	import { Clock, Cpu, Wrench, Zap, Wifi, Box, Paintbrush } from 'lucide-svelte';

	const today = new SvelteDate();
	const icons = [Cpu, Wrench, Zap, Wifi, Box, Paintbrush, Cpu];

	const activities = [
		{ day: 0, task: 'Soldered PCB headers for main board', hours: 3.5, commits: 4 },
		{ day: 1, task: 'Tested WiFi module signal range', hours: 2.0, commits: 2 },
		{ day: 2, task: 'Designed enclosure CAD model v2', hours: 4.0, commits: 6 },
		{ day: 3, task: 'Debugged I2C sensor readings', hours: 1.5, commits: 3 },
		{ day: 4, task: 'Flashed firmware to ESP32 dev board', hours: 3.0, commits: 5 },
		{ day: 5, task: 'Assembled prototype power supply', hours: 2.5, commits: 2 },
		{ day: 6, task: 'Wrote serial comm protocol handler', hours: 4.5, commits: 8 }
	];

	function formatDate(daysAgo: number): string {
		const d = new SvelteDate(today);
		d.setDate(d.getDate() - daysAgo);
		return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
	}
</script>

<section
	aria-label="Activity timeline for the last 7 days"
	class="hard-shadow border-2 border-[var(--border)] bg-[var(--surface-container-low)] p-6"
>
	<h3
		class="mb-6 font-headline text-lg font-bold tracking-wider text-[var(--foreground)] uppercase"
	>
		> ACTIVITY_LOG <span class="text-[var(--on-surface-variant)]">// LAST 7 DAYS</span>
	</h3>

	<ol class="relative space-y-0" aria-label="Daily activity entries">
		{#each activities as activity, i (activity.day)}
			{@const isToday = activity.day === 0}
			{@const Icon = icons[i]}
			<li class="relative flex gap-4 pb-6 last:pb-0">
				<!-- Timeline line -->
				{#if i < activities.length - 1}
					<div
						class="absolute top-8 left-[15px] h-[calc(100%-16px)] w-[2px]"
						style="background: {isToday ? 'var(--primary)' : 'var(--border)'};"
						aria-hidden="true"
					></div>
				{/if}

				<!-- Timeline dot -->
				<div
					class="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border-2"
					class:border-[var(--primary)]={isToday}
					class:bg-[rgba(0,255,65,0.1)]={isToday}
					class:border-[var(--border)]={!isToday}
					class:bg-[var(--surface-container)]={!isToday}
					aria-hidden="true"
				>
					{#if isToday}
						<div
							class="absolute inset-0 border-2 border-[var(--primary)] opacity-50"
							style="animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"
						></div>
					{/if}
					<Icon
						class="h-4 w-4 {isToday ? 'text-[var(--primary)]' : 'text-[var(--on-surface-variant)]'}"
					/>
				</div>

				<!-- Content -->
				<div class="flex-1 space-y-1">
					<div class="flex flex-wrap items-center gap-2">
						<span
							class="font-mono text-xs {isToday
								? 'text-[var(--primary)]'
								: 'text-[var(--on-surface-variant)]'}"
						>
							{isToday ? 'TODAY' : formatDate(activity.day)}
						</span>
						{#if isToday}
							<Badge
								class="border border-[var(--primary)] bg-[rgba(0,255,65,0.1)] font-mono text-xs text-[var(--primary)]"
							>
								ACTIVE
							</Badge>
						{/if}
					</div>
					<p class="font-body text-sm text-[var(--foreground)]">{activity.task}</p>
					<div class="flex gap-3 font-mono text-xs text-[var(--on-surface-variant)]">
						<span class="flex items-center gap-1">
							<Clock class="h-3 w-3" />
							{activity.hours}h logged
						</span>
						<span>{activity.commits} commits</span>
					</div>
				</div>
			</li>
		{/each}
	</ol>
</section>

<style>
	@keyframes ping {
		75%,
		100% {
			transform: scale(1.5);
			opacity: 0;
		}
	}
</style>

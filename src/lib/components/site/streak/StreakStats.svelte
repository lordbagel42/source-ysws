<script lang="ts">
	import { Flame, Trophy, Clock, Zap } from 'lucide-svelte';

	const stats = [
		{
			label: 'CURRENT_STREAK',
			value: '7',
			unit: 'days',
			icon: Flame,
			color: 'var(--primary)',
			glow: 'rgba(0, 255, 65, 0.3)'
		},
		{
			label: 'LONGEST_STREAK',
			value: '14',
			unit: 'days',
			icon: Trophy,
			color: 'var(--secondary)',
			glow: 'rgba(0, 227, 253, 0.3)'
		},
		{
			label: 'TOTAL_BUILD_HOURS',
			value: '142',
			unit: 'h',
			icon: Clock,
			color: '#f0ff00',
			glow: 'rgba(240, 255, 0, 0.3)'
		},
		{
			label: 'HEAT_MULTIPLIER',
			value: '2.5',
			unit: 'x',
			icon: Zap,
			color: 'var(--primary)',
			glow: 'rgba(0, 255, 65, 0.3)'
		}
	];
</script>

<section aria-label="Streak statistics">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat (stat.label)}
			{@const Icon = stat.icon}
			<div
				class="hard-shadow border-2 border-[var(--border)] bg-[var(--surface-container-low)] p-4"
				role="group"
				aria-label="{stat.label}: {stat.value}{stat.unit}"
			>
				<div class="mb-3 flex items-center gap-2">
					<div
						class="flex h-8 w-8 items-center justify-center border-2"
						style="border-color: {stat.color}; background: {stat.glow};"
					>
						<Icon class="h-4 w-4" style="color: {stat.color};" />
					</div>
					<span class="font-mono text-xs text-[var(--on-surface-variant)]">{stat.label}</span>
				</div>
				<div class="flex items-baseline gap-1">
					<span
						class="font-headline text-3xl font-bold"
						style="color: {stat.color}; text-shadow: 0 0 10px {stat.glow};"
					>
						{stat.value}
					</span>
					<span class="font-mono text-sm text-[var(--on-surface-variant)]">{stat.unit}</span>
				</div>
			</div>
		{/each}
	</div>
</section>

<script lang="ts">
	// Generate deterministic heatmap data (154 cells = 22 weeks × 7 days)
	const heatLevels = [
		'bg-surface-container-high',
		'bg-surface-container-high',
		'bg-[#00530e]',
		'bg-[#007117]',
		'bg-primary',
		'bg-secondary'
	];

	function seededRandom(seed: number): number {
		const x = Math.sin(seed) * 10000;
		return x - Math.floor(x);
	}

	const activityLabels = ['No activity', 'No activity', 'Low', 'Moderate', 'High', 'Critical'];

	const cells = Array.from({ length: 154 }, (_, i) => {
		const r = seededRandom(i * 47 + 13);
		const level = Math.floor(r * heatLevels.length);
		return { color: heatLevels[level], label: activityLabels[level] };
	});
</script>

<section
	aria-label="Build activity"
	class="scanline border-b-2 border-surface-container-high bg-surface-container-low px-6 py-10 md:px-8 md:py-12"
>
	<div class="mx-auto max-w-7xl">
		<!-- Header -->
		<div class="mb-8 flex items-end justify-between">
			<div>
				<span class="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant uppercase"
					>SENSOR_READOUT</span
				>
				<h2 class="font-headline text-3xl font-black tracking-tight text-foreground uppercase">
					PROTOCOL_CONTRIBUTIONS
				</h2>
			</div>
			<div class="flex items-center gap-2 font-mono text-[10px] text-on-surface-variant">
				<span>LOW_ACTIVITY</span>
				<div class="flex gap-1">
					{#each heatLevels.slice(1) as color, i (i)}
						<div class="h-3 w-3 {color}"></div>
					{/each}
				</div>
				<span>CRITICAL_MASS</span>
			</div>
		</div>

		<!-- Heatmap grid -->
		<p id="heatmap-desc" class="sr-only">
			Heatmap showing daily build activity over the past 22 weeks
		</p>
		<div
			aria-describedby="heatmap-desc"
			class="grid grid-cols-7 gap-1 sm:grid-cols-14 md:grid-cols-21 lg:grid-cols-28"
		>
			{#each cells as cell, i (i)}
				<div
					class="aspect-square cursor-crosshair opacity-80 transition-opacity hover:opacity-100 {cell.color}"
					title="Day {i + 1}: {cell.label} activity"
				></div>
			{/each}
		</div>
	</div>
</section>

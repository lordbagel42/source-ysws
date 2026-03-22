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

	const cells = Array.from({ length: 154 }, (_, i) => {
		const r = seededRandom(i * 47 + 13);
		const level = Math.floor(r * heatLevels.length);
		return heatLevels[level];
	});
</script>

<section
	class="scanline border-b-2 border-surface-container-high bg-surface-container-low px-6 py-12"
>
	<div class="mx-auto max-w-7xl">
		<!-- Header -->
		<div class="mb-8 flex items-end justify-between">
			<div>
				<span class="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant uppercase"
					>SENSOR_READOUT</span
				>
				<h2 class="font-headline text-3xl font-black tracking-tight text-foreground uppercase">
					STREAK_THERMAL_STATUS
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
		<div class="grid grid-cols-7 gap-1 sm:grid-cols-14 md:grid-cols-21 lg:grid-cols-28">
			{#each cells as color, i (i)}
				<div
					class="aspect-square cursor-crosshair opacity-80 transition-opacity hover:opacity-100 {color}"
					title="DATA_POINT_{i}"
				></div>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Flame, AlertTriangle } from 'lucide-svelte';

	let currentStreak = $state(7);
	let hoursRemaining = $state(4);
	let minutesRemaining = $state(23);

	let heatLevel = $derived(
		currentStreak >= 7
			? 'CRITICAL'
			: currentStreak >= 4
				? 'HOT'
				: currentStreak >= 2
					? 'WARM'
					: 'COLD'
	);

	let heatPercent = $derived(Math.min((currentStreak / 10) * 100, 100));

	let pulseScale = $state(1);
	let glowIntensity = $state(0.6);

	$effect(() => {
		const interval = setInterval(() => {
			pulseScale = 1 + Math.sin(Date.now() / 400) * 0.05;
			glowIntensity = 0.4 + Math.sin(Date.now() / 600) * 0.3;
		}, 50);
		return () => clearInterval(interval);
	});
</script>

<section
	aria-label="Core heat status"
	class="hard-shadow scanline border-2 border-[var(--border)] bg-[var(--surface-container-low)] p-6"
>
	<div class="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-10">
		<!-- Reactor Core Visualization -->
		<div class="relative flex shrink-0 items-center justify-center" aria-hidden="true">
			<!-- Outer ring -->
			<div
				class="flex h-48 w-48 items-center justify-center border-2 border-[var(--primary)]"
				style="transform: scale({pulseScale}); box-shadow: 0 0 {20 +
					glowIntensity * 30}px rgba(0, 255, 65, {glowIntensity}), inset 0 0 {10 +
					glowIntensity * 20}px rgba(0, 255, 65, {glowIntensity * 0.3});"
			>
				<!-- Inner ring -->
				<div
					class="flex h-32 w-32 items-center justify-center border-2 border-[var(--secondary)]"
					style="box-shadow: 0 0 {10 + glowIntensity * 15}px rgba(0, 227, 253, {glowIntensity *
						0.5});"
				>
					<!-- Core number -->
					<span
						class="font-headline text-6xl font-bold text-[var(--primary)]"
						style="text-shadow: 0 0 20px rgba(0, 255, 65, {glowIntensity});"
					>
						{currentStreak}
					</span>
				</div>
			</div>
			<!-- Corner accents -->
			<div
				class="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--primary)]"
			></div>
			<div
				class="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[var(--primary)]"
			></div>
			<div
				class="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[var(--primary)]"
			></div>
			<div
				class="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-[var(--primary)]"
			></div>
		</div>

		<!-- Status Info -->
		<div class="flex flex-1 flex-col gap-4">
			<div class="flex flex-wrap items-center gap-3">
				<h2 class="font-headline text-2xl font-bold tracking-wider text-[var(--primary)] uppercase">
					CORE_HEAT: {heatLevel}
				</h2>
				<Badge
					class="border-2 border-[var(--primary)] bg-transparent font-mono text-[var(--primary)]"
				>
					<Flame class="mr-1 h-3 w-3" />
					{currentStreak} DAY STREAK
				</Badge>
			</div>

			<p class="font-mono text-sm text-[var(--on-surface-variant)]">
				// {currentStreak} consecutive days of reactor output logged
			</p>

			<!-- Temperature Bar -->
			<div class="space-y-2" aria-label="Heat level: {heatLevel}, {heatPercent}% capacity">
				<div class="flex justify-between font-mono text-xs text-[var(--on-surface-variant)]">
					<span>COLD</span>
					<span>WARM</span>
					<span>HOT</span>
					<span class="text-[var(--primary)]">CRITICAL</span>
				</div>
				<div class="h-4 w-full border-2 border-[var(--border)] bg-[var(--surface-container)]">
					<div
						class="h-full transition-all duration-1000 ease-out"
						style="width: {heatPercent}%; background: linear-gradient(90deg, #f0ff00 0%, #ff8c00 40%, #ff3e00 70%, #00ff41 100%);"
					></div>
				</div>
			</div>

			<!-- Cooldown Warning -->
			<div
				class="flex items-center gap-2 border-2 border-[#f0ff00] bg-[rgba(240,255,0,0.05)] px-4 py-2"
				role="alert"
			>
				<AlertTriangle class="h-4 w-4 shrink-0 text-[#f0ff00]" />
				<span class="font-mono text-sm text-[#f0ff00]">
					⚠ {hoursRemaining}H {minutesRemaining}M UNTIL CORE COOLDOWN
				</span>
			</div>
		</div>
	</div>
</section>

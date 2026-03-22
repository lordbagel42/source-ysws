<script lang="ts">
	import { Flame } from 'lucide-svelte';
</script>

<section
	class="relative overflow-hidden border-b-2 border-outline-variant bg-surface-dim px-8 py-24 md:px-16"
>
	<div class="scanline"></div>
	<div class="relative z-10 mx-auto max-w-6xl">
		<div class="flex flex-col items-center gap-12 lg:flex-row">
			<!-- Left column -->
			<div class="flex-1">
				<div class="mb-4 flex items-center gap-3">
					<Flame class="h-5 w-5 animate-pulse text-primary" />
					<span class="text-sm font-bold tracking-[0.3em] text-primary uppercase"
						>Thermal Overload Protocol</span
					>
				</div>

				<h2
					class="mb-6 font-headline text-5xl leading-none font-black tracking-tighter text-primary uppercase md:text-7xl"
				>
					STREAK_HEAT
				</h2>

				<p class="mb-8 border-l-4 border-primary pl-6 text-xl text-on-surface-variant uppercase">
					MORE CONSECUTIVE BUILD DAYS = HIGHER 'HEAT' LEVEL. DON'T LET THE CORE COOL DOWN.
				</p>

				<!-- Stat cards -->
				<div class="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div
						class="border-2 border-outline-variant bg-surface-container-low p-6 transition-colors hover:border-[#ff3e00]"
					>
						<div class="mb-2 font-headline text-2xl font-black text-primary">
							ALGORITHM_PRIORITY
						</div>
						<p class="text-[10px] tracking-widest text-on-surface-variant uppercase">
							BOOST_FACTOR: +240% // POSITION: TOP_ROW
						</p>
					</div>
					<div
						class="border-2 border-outline-variant bg-surface-container-low p-6 transition-colors hover:border-[#ff3e00]"
					>
						<div class="mb-2 font-headline text-2xl font-black text-primary">REWARD_MULTIPLIER</div>
						<p class="text-[10px] tracking-widest text-on-surface-variant uppercase">
							CURRENT_BUDGET: $275 x 2.4 = $660 MAX_POTENTIAL
						</p>
					</div>
				</div>
			</div>

			<!-- Right column: System Status -->
			<div
				class="hard-shadow relative flex w-full flex-col items-center justify-center border-4 border-primary bg-surface-container-lowest p-8 lg:w-96"
			>
				<div
					class="absolute -top-4 -left-4 bg-primary px-4 py-1 text-xs font-black text-primary-foreground uppercase"
				>
					System Status
				</div>
				<div class="mb-8 self-start text-[10px] tracking-widest text-on-surface-variant uppercase">
					Core_Temperature_Monitoring
				</div>

				<!-- Bar chart -->
				<div
					class="relative mb-8 flex h-64 w-full items-end gap-2 overflow-hidden border-2 border-outline-variant bg-surface-container-high p-4"
				>
					<div
						class="pointer-events-none absolute inset-0 flex flex-col justify-between p-2 opacity-10"
					>
						<div class="w-full border-b border-outline"></div>
						<div class="w-full border-b border-outline"></div>
						<div class="w-full border-b border-outline"></div>
						<div class="w-full border-b border-outline"></div>
						<div class="w-full border-b border-outline"></div>
					</div>
					<div class="h-1/4 flex-1 bg-[#ff3e00]"></div>
					<div class="h-2/4 flex-1 bg-[#ff3e00]"></div>
					<div class="h-3/4 flex-1 bg-[#f0ff00]"></div>
					<div class="h-full flex-1 animate-pulse bg-[#00FF41]"></div>
					<div class="h-full flex-1 bg-[#00FF41] opacity-30"></div>
					<div class="h-full flex-1 bg-[#00FF41] opacity-10"></div>
				</div>

				<!-- Heat readout -->
				<div class="w-full space-y-4">
					<div class="flex items-end justify-between">
						<span class="text-[10px] tracking-widest text-on-surface-variant uppercase"
							>Current_Thermal_Boost</span
						>
						<span class="font-headline text-4xl font-black text-primary">x2.4</span>
					</div>
					<div class="relative h-4 w-full border border-outline-variant bg-surface-container-high">
						<div class="heat-gradient h-full w-3/4"></div>
					</div>
					<div class="animate-pulse text-center text-[10px] text-primary uppercase">
						Optimal state: Maximum efficiency reached
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import CircularGauge from './CircularGauge.svelte';
</script>

<section class="grid grid-cols-1 gap-6 md:grid-cols-3">
	<!-- Card 1: CORE_STREAK_HEAT -->
	<div class="border-2 border-outline-variant bg-surface-container-low p-6">
		<span class="mb-4 block font-headline text-[10px] tracking-widest text-outline uppercase">
			CORE_STREAK_HEAT
		</span>
		<div class="flex items-center justify-between">
			<div>
				<p class="font-headline text-4xl font-black text-foreground">42.8°C</p>
				<p class="font-headline text-[10px] tracking-widest text-primary uppercase">
					THERMAL_STABLE
				</p>
			</div>
			<CircularGauge value={42.8} max={100} />
		</div>
	</div>

	<!-- Card 2: BUILDS_THIS_CYCLE -->
	<div class="border-2 border-outline-variant bg-surface-container-low p-6">
		<span class="mb-4 block font-headline text-[10px] tracking-widest text-outline uppercase">
			BUILDS_THIS_CYCLE
		</span>
		<div class="mb-2 flex h-12 items-end gap-1">
			<div class="h-[20%] w-full bg-[#00530e]"></div>
			<div class="h-[40%] w-full bg-[#007117]"></div>
			<div class="h-[90%] w-full bg-primary"></div>
			<div class="h-[30%] w-full bg-[#00530e]"></div>
			<div class="h-[60%] w-full bg-[#007117]"></div>
			<div class="h-[100%] w-full bg-[#72ff70] shadow-[0_0_10px_rgba(0,255,65,0.4)]"></div>
			<div class="h-[10%] w-full bg-surface-container-highest"></div>
		</div>
		<p class="font-headline text-xs font-bold text-foreground uppercase">
			8_BUILDS_COMPLETED_TODAY
		</p>
	</div>

	<!-- Card 3: OPERATOR_LOAD -->
	<div
		class="flex flex-col justify-between border-2 border-outline-variant bg-surface-container-low p-6"
	>
		<div>
			<span class="mb-2 block font-headline text-[10px] tracking-widest text-outline uppercase">
				OPERATOR_LOAD
			</span>
			<div class="flex items-center justify-between">
				<span class="font-headline text-2xl font-black text-foreground">CRITICAL</span>
				<div class="flex gap-1">
					<div class="h-4 w-2 bg-primary"></div>
					<div class="h-4 w-2 bg-primary"></div>
					<div class="h-4 w-2 bg-primary"></div>
					<div class="h-4 w-2 animate-pulse bg-error"></div>
				</div>
			</div>
		</div>
		<p class="mt-2 font-body text-[9px] text-outline italic">
			// ADVICE: SYSTEM_REQUIRES_REBOOT_AND_COFFEE
		</p>
	</div>
</section>

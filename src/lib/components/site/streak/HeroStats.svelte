<script lang="ts">
	import { AlertTriangle, TrendingUp } from 'lucide-svelte';
</script>

<section class="grid grid-cols-1 gap-8 lg:grid-cols-12">
	<!-- Left: Main streak display -->
	<div
		class="relative overflow-hidden border-2 border-outline-variant bg-surface-container-low p-8 lg:col-span-8"
	>
		<!-- Decorative hex code -->
		<span
			class="pointer-events-none absolute top-0 right-0 p-4 font-headline text-[120px] leading-none font-black opacity-10"
			>0X14</span
		>

		<!-- Header -->
		<div class="mb-8 border-b-2 border-surface-container-high pb-4">
			<span class="mb-2 block font-headline text-[10px] tracking-[0.2em] text-outline uppercase"
				>SYSTEM_METRIC // TEMPORAL_STREAK</span
			>
			<h1 class="crt-glow font-headline text-6xl leading-none font-black text-primary md:text-8xl">
				COMBUSTION_STREAK
			</h1>
		</div>

		<!-- Stats row -->
		<div class="flex flex-col items-end gap-12 md:flex-row">
			<!-- Big number -->
			<div>
				<span
					class="block font-headline text-[64px] leading-none font-black text-primary md:text-[120px]"
					>14</span
				>
				<span class="font-headline text-xl font-bold tracking-widest text-primary">DAYS_ACTIVE</span
				>
			</div>

			<!-- Velocity bar -->
			<div class="w-full flex-1">
				<div class="mb-2 flex items-center justify-between">
					<span class="font-headline text-[10px] tracking-widest text-outline uppercase"
						>CURRENT_VELOCITY</span
					>
					<span class="font-mono text-sm font-bold text-primary">88%_EFFICIENCY</span>
				</div>
				<div class="h-8 border-2 border-outline-variant bg-surface-dim p-1">
					<div
						class="h-full bg-primary"
						style="width: 88%; box-shadow: 0 0 15px rgba(0,255,65,0.4);"
					></div>
				</div>
				<div class="mt-1 flex justify-between">
					<span class="font-headline text-[8px] text-on-surface-variant">IDLE</span>
					<span class="font-headline text-[8px] text-on-surface-variant">OVERLOAD</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Right: Warning + Milestone -->
	<div class="flex flex-col gap-8 lg:col-span-4">
		<!-- Warning card -->
		<div
			class="flex flex-1 flex-col justify-center border-2 border-dashed border-error bg-surface-container-low p-6"
		>
			<div class="mb-4 flex items-center gap-3">
				<AlertTriangle class="size-9 text-error" />
				<h2 class="font-headline text-xl font-black tracking-tight text-error">CRITICAL_WARNING</h2>
			</div>
			<p class="mb-4 font-headline text-2xl leading-tight font-bold text-foreground uppercase">
				DON'T_BREAK_THE_CHAIN
			</p>
			<p class="font-body text-xs leading-relaxed text-outline">
				System integrity depends on continuous integration. 10 hours remaining to maintain current
				streak sequence.
			</p>
		</div>

		<!-- Milestone card -->
		<div class="border-2 border-[#72ff70] bg-primary p-6 text-primary-foreground">
			<div class="mb-6 flex items-start justify-between">
				<span class="font-headline text-[10px] font-bold tracking-widest uppercase"
					>NEXT_MILESTONE</span
				>
				<TrendingUp class="size-5" />
			</div>
			<p class="mb-2 font-headline text-3xl leading-none font-black">21_DAYS</p>
			<p class="font-headline text-xs font-bold tracking-widest">"THE_HABIT_STABILIZER"</p>
		</div>
	</div>
</section>

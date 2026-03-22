<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Radar } from 'lucide-svelte';
</script>

<section
	class="relative flex min-h-[85vh] flex-col justify-center overflow-hidden border-b-2 border-outline-variant px-8 md:px-16"
>
	<!-- Background watermark -->
	<div
		class="pointer-events-none absolute top-10 right-10 font-headline text-[120px] leading-none font-black text-surface-container-high opacity-20 select-none"
		aria-hidden="true"
	>
		0xSOURCE
	</div>

	<div class="z-10 max-w-4xl">
		<!-- System badge -->
		<div
			class="mb-4 inline-block border-2 border-outline-variant bg-surface-container-high px-3 py-1"
		>
			<span class="text-xs font-bold tracking-widest text-primary uppercase"
				>Your dashboard</span
			>
		</div>

		<!-- Main headline -->
		<h1
			class="mb-8 font-headline text-6xl leading-[0.85] font-black tracking-tighter text-foreground md:text-9xl"
		>
			Welcome <span class="text-primary">back</span>
		</h1>

		<!-- Subtitle -->
		<p
			class="mb-12 max-w-2xl border-l-4 border-primary pl-6 text-xl text-on-surface-variant uppercase md:text-2xl"
		>
			Build something open-source.<br />We'll get you the hardware.
		</p>

		<!-- CTAs -->
		<div class="flex flex-col gap-6 sm:flex-row">
			<Button
				class="hard-shadow border-2 border-primary bg-primary px-8 py-5 font-headline text-xl font-black tracking-tighter text-primary-foreground uppercase hover:-translate-x-1 hover:-translate-y-1"
			>
				Start a new project
			</Button>

			<div
				class="flex items-center gap-4 border-2 border-outline-variant bg-surface-container-lowest px-6 py-4"
			>
				<Radar class="h-5 w-5 animate-pulse text-secondary" />
				<span class="blinking-cursor text-xs text-on-surface-variant uppercase"
					>What will you build?</span
				>
			</div>
		</div>
	</div>
</section>

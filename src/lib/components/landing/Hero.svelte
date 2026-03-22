<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section
	class="relative flex min-h-[85vh] flex-col justify-center overflow-hidden border-b-2 border-outline-variant px-8 md:px-16"
>
	<span
		aria-hidden="true"
		class="pointer-events-none absolute top-10 right-10 font-headline text-[120px] leading-none font-black text-surface-container-high opacity-20 select-none"
	>
		0xSOURCE
	</span>
	<div class="z-10 max-w-4xl">
		<h1 class="font-headline text-6xl font-black tracking-tighter text-foreground md:text-8xl">
			Build something<br /><span class="text-primary">open source.</span>
		</h1>
		<p class="mt-6 max-w-2xl text-xl text-on-surface-variant">
			Ship an open-source project. Get a LilyGo T-Deck + $275 in parts — free.
		</p>
		<Button
			href="/login"
			class="hard-shadow mt-10 border-2 border-primary bg-primary px-8 py-5 font-headline text-xl font-black tracking-tighter text-primary-foreground uppercase hover:-translate-x-1 hover:-translate-y-1"
		>
			Start your project
		</Button>
		<div
			class="mt-12 max-w-lg border-2 border-outline-variant bg-surface-container-low p-4 font-mono text-sm"
		>
			<p class="text-on-surface-variant">$ git clone your-oss-project</p>
			<p class="text-on-surface-variant">$ source ship --hardware t-deck</p>
			<p class="text-primary">✓ T-Deck + $275 in parts → shipping to you</p>
		</div>
	</div>
</section>

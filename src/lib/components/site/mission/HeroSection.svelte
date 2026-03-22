<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowRight } from 'lucide-svelte';

	const terminalLines = [
		{ prefix: '$', text: 'source init --project-alpha', color: 'text-primary' },
		{ prefix: '>', text: 'forking protocol...', color: 'text-on-surface-variant' },
		{ prefix: '>', text: 'analytical_modules: LOADED', color: 'text-on-surface-variant' },
		{ prefix: '>', text: 'security_layers: BYPASSED', color: 'text-on-surface-variant' },
		{ prefix: '>', text: 'hardware_link:', color: 'text-primary' }
	];

	let visibleLines = $state(0);

	$effect(() => {
		let count = 0;
		const interval = setInterval(() => {
			count++;
			visibleLines = count;
			if (count >= terminalLines.length) clearInterval(interval);
		}, 600);
		return () => clearInterval(interval);
	});
</script>

<section
	aria-labelledby="hero-heading"
	class="relative overflow-hidden border-b-2 border-surface-container-high bg-background px-6 py-16 md:px-8 md:py-24"
>
	<div
		class="pointer-events-none absolute inset-0 opacity-10"
		style="background-image: radial-gradient(circle, #00ff41 1px, transparent 1px); background-size: 24px 24px;"
	></div>
	<div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12">
		<!-- Left column -->
		<div class="space-y-8 md:col-span-7">
			<!-- System badge -->
			<div class="inline-block border border-outline-variant bg-surface-container-high px-3 py-1">
				<span class="font-mono text-xs tracking-widest text-primary uppercase"
					>> WELCOME // SESSION_INITIALIZED</span
				>
			</div>

			<!-- Main headline with CRT glow -->
			<h1
				id="hero-heading"
				class="crt-glow font-headline text-5xl leading-none font-black tracking-tighter uppercase md:text-8xl"
			>
				REBUILD THE<br />PROTOCOL
			</h1>

			<!-- Subtitle -->
			<p class="max-w-xl text-xl font-medium text-on-surface-variant md:text-2xl">
				Ship real open-source hardware. Earn a LilyGO T-Deck +
				<span class="text-primary">$275 budget</span>.
			</p>

			<!-- CTAs -->
			<div class="flex flex-wrap gap-4 pt-4">
				<Button
					href="/login"
					class="hard-shadow min-h-[44px] border-2 border-primary bg-primary px-8 py-4 font-mono text-lg font-black text-primary-foreground uppercase transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#00FF41]"
				>
					[INITIALIZE BUILD]
				</Button>

				<Button
					href="/docs"
					variant="outline"
					class="min-h-[44px] border-2 border-primary bg-transparent px-8 py-4 font-mono text-lg font-bold text-primary uppercase transition-all hover:bg-surface-container-low"
				>
					VIEW_DOCS <ArrowRight class="ml-1 inline h-4 w-4" />
				</Button>
			</div>
		</div>

		<!-- Right column: terminal mockup -->
		<div class="relative md:col-span-5">
			<div
				class="scanline relative overflow-hidden border-2 border-outline bg-surface-container-lowest p-6 font-mono text-sm"
			>
				<!-- Terminal title bar -->
				<div class="mb-4 flex items-center gap-2 border-b border-outline-variant pb-3">
					<div class="h-2.5 w-2.5 bg-error"></div>
					<div class="h-2.5 w-2.5 bg-secondary"></div>
					<div class="h-2.5 w-2.5 bg-primary"></div>
					<span class="ml-auto text-[10px] text-on-surface-variant">TERMINAL_STABLE_v4.2</span>
				</div>

				<!-- Animated terminal lines -->
				<div class="space-y-2">
					{#each terminalLines as line, i (line.text)}
						{#if i < visibleLines}
							<p class={line.color}>
								<span class="text-on-surface-variant">{line.prefix}</span>
								{line.text}
								{#if line.text === 'hardware_link:'}
									<span class="bg-primary px-1 text-primary-foreground">STABLE</span>
								{/if}
							</p>
						{/if}
					{/each}
					{#if visibleLines >= terminalLines.length}
						<p class="blinking-cursor text-secondary">READY_FOR_DEPLOYMENT</p>
					{/if}
				</div>
			</div>
			<!-- Corner accent -->
			<div
				class="pointer-events-none absolute -right-4 -bottom-4 h-24 w-24 border-r-2 border-b-2 border-primary"
			></div>
		</div>
	</div>
</section>

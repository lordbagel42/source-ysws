<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ChevronDown } from 'lucide-svelte';

	const faqs = [
		{
			q: 'What is Source?',
			a: 'Source is a Hack Club YSWS (You Ship, We Ship) where you build open-source hardware projects meant to replace closed-source consumer tech. Think DIY alternatives to Ring doorbells, Google Homes, and more — stuff you actually own and control.'
		},
		{
			q: 'How does it work?',
			a: 'Pick a hardware project, design and build it from scratch, and track your progress on this platform. Document your build journey, share updates, and ship a working prototype.'
		},
		{
			q: 'What do I get?',
			a: 'Every builder who ships gets a $275 hardware budget and a LilyGO T-Deck. Your Core Heat multiplier and peer voting score influence a bonus lootbox of tech goodies, custom-picked based on what your project is.'
		},
		{
			q: "What's Core Heat?",
			a: "Core Heat tracks your build streak — how consistently you're working on your project. Work on it every day and your heat multiplier goes up, unlocking better rewards. Miss days and it cools down."
		},
		{
			q: "What's peer voting?",
			a: "Builders vote on each other's projects. It's not just about finishing — it's about building something genuinely useful and well-crafted. Higher votes = better lootbox picks."
		},
		{
			q: 'Who can participate?',
			a: 'Any Hack Club member. Sign in with your Hack Club account to get started.'
		},
		{
			q: 'What projects count?',
			a: "Any hardware project that's an open-source alternative to something closed-source. Video doorbells, smart speakers, filament dryers, mesh routers, air quality monitors — if it replaces something proprietary, it counts."
		}
	];

	let openIndex = $state<number | null>(null);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<section aria-label="Frequently asked questions" class="bg-background px-6 py-12 md:px-8 md:py-16">
	<div class="mx-auto max-w-4xl">
		<!-- Header -->
		<div class="mb-10 border-l-4 border-primary pl-6">
			<h2
				class="flex items-center gap-3 font-headline text-3xl font-black tracking-tight text-foreground uppercase md:text-4xl"
			>
				FAQ
			</h2>
		</div>

		<!-- Accordion -->
		<div class="space-y-2">
			{#each faqs as faq, i (faq.q)}
				<div class="border-2 border-outline-variant bg-surface-container-low">
					<button
						onclick={() => toggle(i)}
						class="flex min-h-[44px] w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-surface-container"
						aria-expanded={openIndex === i}
					>
						<span class="font-mono text-sm font-bold text-foreground">
							{faq.q}
						</span>
						<ChevronDown
							class="h-5 w-5 shrink-0 text-on-surface-variant transition-transform {openIndex === i
								? 'rotate-180 text-primary'
								: ''}"
						/>
					</button>
					{#if openIndex === i}
						<div
							transition:slide={{ duration: 150 }}
							class="border-t border-outline-variant bg-surface-container-lowest px-6 py-5"
						>
							<p class="text-sm leading-relaxed text-on-surface-variant">
								{faq.a}
							</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { Wrench, GitBranch, Package } from 'lucide-svelte';

	const steps = [
		{
			number: '01',
			title: 'Pick a project',
			description:
				'Choose a closed-source product to replace — a smart speaker, a doorbell camera, whatever. Design your open-source alternative.',
			icon: Wrench
		},
		{
			number: '02',
			title: 'Build in the open',
			description:
				'Document your progress, push code, share updates. Your build streak (Core Heat) tracks consistency and unlocks better rewards.',
			icon: GitBranch
		},
		{
			number: '03',
			title: 'Ship and get paid',
			description:
				'Finish your prototype, get peer-reviewed by other builders, and earn your LilyGO T-Deck + $275 hardware budget.',
			icon: Package
		}
	];
</script>

<section
	aria-label="How it works"
	class="border-b-2 border-outline-variant bg-surface-container-low px-6 py-12 md:px-8 md:py-16"
>
	<div class="mx-auto max-w-7xl">
		<div class="mb-10 border-l-4 border-primary pl-6">
			<h2
				class="font-headline text-3xl font-black tracking-tight text-foreground uppercase md:text-4xl"
			>
				How it works
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each steps as step (step.number)}
				<div class="border-2 border-outline-variant bg-surface-container-lowest p-6">
					<div class="mb-4 flex items-center gap-3">
						<span class="font-mono text-2xl font-black text-primary">{step.number}</span>
						<step.icon size={20} class="text-on-surface-variant" />
					</div>
					<h3 class="mb-2 font-headline text-lg font-bold text-foreground">{step.title}</h3>
					<p class="text-sm leading-relaxed text-on-surface-variant">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

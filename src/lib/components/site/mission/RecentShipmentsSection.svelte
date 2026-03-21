<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { ExternalLink } from 'lucide-svelte';

	const shipments = [
		{
			name: 'ONYX_DECK',
			description: 'Custom 40% mechanical keyboard with integrated LoRa mesh terminal.',
			tags: ['LORA', 'PCB_DESIGN'],
			hoverColor: 'hover:border-primary',
			placeholderColor: 'bg-[#1a2e1a]'
		},
		{
			name: 'AXIS_06',
			description: '6-axis robotic arm with sub-millimeter precision for SMD assembly.',
			tags: ['ROBOTICS', 'STM32'],
			hoverColor: 'hover:border-secondary',
			placeholderColor: 'bg-[#1a2a2e]'
		},
		{
			name: 'VOID_SPLIT',
			description: 'Wireless split ergonomic keyboard with customized ZMK firmware.',
			tags: ['BLE', 'QMK/ZMK'],
			hoverColor: 'hover:border-destructive',
			placeholderColor: 'bg-[#2e1a1a]'
		}
	];
</script>

<section class="px-8 py-24 md:px-16">
	<!-- Header -->
	<div class="mb-12 flex items-end justify-between">
		<div>
			<span class="mb-2 block text-[10px] tracking-widest text-on-surface-variant uppercase"
				>Proof of Work</span
			>
			<h2 class="font-headline text-4xl font-black tracking-tighter uppercase md:text-6xl">
				RECENT_SHIPMENTS
			</h2>
		</div>
		<div class="hidden text-right md:block">
			<div class="font-headline text-2xl font-bold text-primary">4,291</div>
			<div class="text-[10px] tracking-widest text-on-surface-variant uppercase">
				Validated Shipments
			</div>
		</div>
	</div>

	<!-- Cards grid -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each shipments as shipment (shipment.name)}
			<div
				class="group border-2 border-outline-variant bg-surface-container-low p-6 transition-colors {shipment.hoverColor}"
			>
				<!-- Image placeholder -->
				<div
					class="relative mb-6 aspect-video overflow-hidden border-2 border-outline-variant {shipment.placeholderColor}"
				>
					<div
						class="flex h-full w-full items-center justify-center grayscale transition-all duration-500 group-hover:grayscale-0"
					>
						<span class="font-headline text-2xl font-black uppercase opacity-30"
							>{shipment.name}</span
						>
					</div>
				</div>
				<!-- Title + link icon -->
				<div class="mb-4 flex items-start justify-between">
					<h3 class="font-headline text-xl font-bold uppercase">{shipment.name}</h3>
					<ExternalLink class="h-4 w-4 text-on-surface-variant" />
				</div>
				<!-- Description -->
				<p class="mb-6 text-sm text-on-surface-variant">{shipment.description}</p>
				<!-- Tags -->
				<div class="flex gap-2">
					{#each shipment.tags as tag (tag)}
						<Badge
							variant="outline"
							class="border-outline-variant bg-surface-container-high text-[10px] tracking-widest text-on-surface-variant uppercase"
							>{tag}</Badge
						>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

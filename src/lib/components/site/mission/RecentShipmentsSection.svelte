<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';

	const shipments = [
		{
			name: 'OpenBell',
			description:
				'Open-source alternative to Ring Doorbell — local AI processing, night vision, and encrypted storage. No cloud subscriptions needed, you own your data.',
			tags: ['ESP32-CAM', 'PIR', 'ONVIF'],
			status: 'Shipped',
			statusClass: 'bg-primary text-primary-foreground',
			reward: '$275 earned',
			image:
				'https://images.unsplash.com/photo-1641853256879-bd786e77d852?auto=format&fit=crop&q=80&w=600'
		},
		{
			name: 'LibreVox',
			description:
				'Open-source alternative to Amazon Echo / Google Home — wake-word detection, local LLM processing, and modular audio. Your smart speaker, your rules.',
			tags: ['RPi Zero 2W', 'I2S Amp', 'Wake word'],
			status: 'Building',
			statusClass: 'bg-secondary text-secondary-foreground',
			reward: '$210 / $275 spent',
			image:
				'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&q=80&w=600'
		},
		{
			name: 'OpenDeck',
			description:
				'Open-source alternative to Elgato Stream Deck — programmable macro pad with OLED keys, built on a Raspberry Pi Pico. Fully customizable, no proprietary software.',
			tags: ['RPi Pico', 'OLED keys', 'USB HID'],
			status: 'Planned',
			statusClass: 'border border-outline bg-surface-container-highest text-foreground',
			reward: 'Not started',
			image:
				'https://images.unsplash.com/photo-1649899913123-90bb33c8a66a?auto=format&fit=crop&q=80&w=600'
		}
	];
</script>

<section aria-label="Recent hardware shipments" class="bg-background px-6 py-12 md:px-8 md:py-16">
	<div class="mx-auto max-w-7xl">
		<!-- Header -->
		<div class="mb-8 border-l-4 border-primary pl-6">
			<h2
				class="font-headline text-3xl font-black tracking-tight text-foreground uppercase md:text-4xl"
			>
				Community builds
			</h2>
		</div>

		<!-- Cards grid -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each shipments as ship (ship.name)}
				<article
					class="group border-2 border-outline-variant bg-surface-container-low transition-colors hover:border-primary"
				>
					<!-- Image -->
					<div class="relative h-32 overflow-hidden sm:h-48">
						<img
							class="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
							src={ship.image}
							alt={ship.name}
							loading="lazy"
							decoding="async"
						/>
						<div class="absolute top-0 right-0 p-4">
							<Badge class="font-mono text-[10px] font-bold {ship.statusClass}">
								{ship.status}
							</Badge>
						</div>
					</div>

					<!-- Content -->
					<div class="p-4 md:p-6">
						<h3 class="mb-4 font-headline text-xl font-bold tracking-tight text-foreground">
							{ship.name}
						</h3>

						<div class="space-y-4">
							<!-- Tags -->
							<div class="flex flex-wrap gap-2">
								{#each ship.tags as tag (tag)}
									<span
										class="border border-outline-variant px-2 py-0.5 font-mono text-[10px] text-on-surface-variant"
										>{tag}</span
									>
								{/each}
							</div>

							<p class="text-sm text-on-surface-variant">
								{ship.description}
							</p>

							<!-- Footer -->
							<div class="flex items-center justify-between border-t border-outline-variant pt-4">
								<span class="font-mono text-xs text-primary">{ship.reward}</span>
								<span class="text-on-surface-variant transition-colors group-hover:text-primary"
									>→</span
								>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

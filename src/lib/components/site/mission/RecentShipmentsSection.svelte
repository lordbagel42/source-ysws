<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';

	const shipments = [
		{
			name: 'OpenBell',
			description:
				'Open-source alternative to Ring Doorbell — local AI processing, night vision, and encrypted storage. No cloud subscriptions needed, you own your data.',
			tags: ['ESP32-CAM', 'PIR_SENSOR', 'ONVIF'],
			status: 'DEPLOYED',
			statusClass: 'bg-primary text-primary-foreground',
			timestamp: '08:42:11',
			reward: 'REWARD: $275',
			image:
				'https://images.unsplash.com/photo-1641853256879-bd786e77d852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
		},
		{
			name: 'LibreVox',
			description:
				'Open-source alternative to Amazon Echo / Google Home — wake-word detection, local LLM processing, and modular audio. Your smart speaker, your rules.',
			tags: ['RPI_ZERO_2W', 'I2S_AMP', 'WAKE_WORD'],
			status: 'IN_PROGRESS',
			statusClass: 'bg-secondary text-secondary-foreground',
			timestamp: '12:15:00',
			reward: 'BUDGET: $210/275',
			image:
				'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
		},
		{
			name: 'OpenDeck',
			description:
				'Open-source alternative to Elgato Stream Deck — programmable macro pad with OLED keys, built on a Raspberry Pi Pico. Fully customizable, no proprietary software.',
			tags: ['RPI_PICO', 'OLED_KEYS', 'USB_HID'],
			status: 'QUEUED',
			statusClass: 'border border-outline bg-surface-container-highest text-foreground',
			timestamp: '--:--:--',
			reward: 'ALLOCATION_PENDING',
			image:
				'https://images.unsplash.com/photo-1649899913123-90bb33c8a66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
		}
	];
</script>

<section aria-label="Recent hardware shipments" class="bg-background px-6 py-12 md:px-8 md:py-16">
	<div class="mx-auto max-w-7xl">
		<!-- Header -->
		<div class="mb-8 border-l-4 border-primary pl-6">
			<span class="font-mono text-xs tracking-[0.2em] text-on-surface-variant uppercase"
				>TRANSMISSION_FEED</span
			>
			<h2 class="font-headline text-4xl font-black tracking-tight text-foreground uppercase">
				RECENT_SHIPMENTS
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
						/>
						<div class="absolute top-0 right-0 p-4">
							<Badge class="font-mono text-[10px] font-bold {ship.statusClass}">
								[{ship.status}]
							</Badge>
						</div>
					</div>

					<!-- Content -->
					<div class="p-4 md:p-6">
						<div class="mb-4 flex items-start justify-between">
							<h3 class="font-headline text-xl font-bold tracking-tight text-foreground uppercase">
								{ship.name}
							</h3>
							<span class="font-mono text-[10px] text-on-surface-variant">TS: {ship.timestamp}</span
							>
						</div>

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

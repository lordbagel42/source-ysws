<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';

	const shipments = [
		{
			name: 'DIY Ring Doorbell',
			description:
				'A DIY video doorbell with local AI processing, night vision, and encrypted local storage. No cloud subscriptions needed — you own your data.',
			tags: ['ESP32-CAM', 'PIR_SENSOR', 'ONVIF'],
			status: 'DEPLOYED',
			statusClass: 'bg-primary text-primary-foreground',
			timestamp: '08:42:11',
			reward: 'REWARD: $275',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuDMcRN_9dq2GzHoPysCYD9If6D2dBRng2R0pWqMqpIwiRklnR7YdXWBKXx-uVkNYcRt7vE2M4pUauuv6kBlun7kYhHOpu64LHV2mSKkPZGExidqMdmMLHMiqae9NTiXzLKTzv6rS10S7DOZxhlWqlOwLeFTg96GycpbstWJr3lu8k6KCc2jfTbnzaiVYHwnwb4sgTgm3_UifN46yotZvkc5vpiOcRUvBxdWkpqOwVKr_ZWT_fUV1KB5-qgoJ2JUqf1-nNDMWfLYZiVW'
		},
		{
			name: 'Open Source Google Home',
			description:
				'An open-source smart speaker with wake-word detection, local LLM processing, and modular audio. Like Google Home, but you control everything.',
			tags: ['RPI_ZERO_2W', 'I2S_AMP', 'WAKE_WORD'],
			status: 'IN_PROGRESS',
			statusClass: 'bg-secondary text-secondary-foreground',
			timestamp: '12:15:00',
			reward: 'BUDGET: $210/275',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuDSmp7-_3Mrd_p6KTCvulGh_pV4go9g2fRnriOjeKtgRnkSOESCoeuBNWIjWTdZHhsf09zEem_HQ97OJQxPg6g43THoCHhDpLLkDuf4v6OzEK1AXvqX0gJypGbY8aHy66UG0UDFgSNRhPAnzcTiT88ncWupebaSyu7XPgryqVYcSfSLhV6EtKClY4LD-T9QmKQ0ZH4kxqzEOp36Br87_cHV95h8h6MgNeXeL5VXFOItvR_cCDlUUrldC7RQNtOiBuMkeb7tmNFsAlJr'
		},
		{
			name: '3D Printer Filament Dryer',
			description:
				'A filament dryer for your 3D printer with PID-controlled heating, humidity monitoring, and multi-spool capacity. Keep your prints crispy.',
			tags: ['PTC_HEATER', 'BME280', 'OLED_UI'],
			status: 'QUEUED',
			statusClass: 'border border-outline bg-surface-container-highest text-foreground',
			timestamp: '--:--:--',
			reward: 'ALLOCATION_PENDING',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuCUpYdzyaCQCNjQTG-FvR_xDFGKHg3b2rM29OPJNcSTnG89gcfCIiYyrOk834D73j45ULTURwXSqNgYe-lOdL0JZNaj-PzlU3i6v9Itgw03m7D99Urb3UqQHTNDab_fRh0T6VHww5HrZDijJl7As1ay7eMtaorScihmMW1fpVF1mcexGZGYSltO5ZPesnGJJYPCrW4kzDNEYCZf4DepmdOIiAgga2gzl3FzghmUcsvkYi97MG-V90dpngZ696VZJYOI2FzTNMVvc0FB'
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

<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { ThumbsUp, Clock } from 'lucide-svelte';

	type Project = {
		name: string;
		builder: string;
		description: string;
		votes: number;
		status: 'OPEN FOR REVIEW' | 'APPROVED' | 'NEEDS REVISION';
		category: string;
		timeAgo: string;
	};

	const projects: Project[] = [
		{
			name: 'SOLAR_TRACKER_V3',
			builder: '@circuit_sage',
			description:
				'Dual-axis solar panel tracker with LDR array, stepper motors, and ESP32 controller. Achieves 35% efficiency gain over fixed mounts.',
			votes: 42,
			status: 'OPEN FOR REVIEW',
			category: 'IoT',
			timeAgo: '2h ago'
		},
		{
			name: 'MESH_NODE_ALPHA',
			builder: '@byte_forge',
			description:
				'Long-range LoRa mesh networking node. Custom antenna design with 3D-printed weatherproof enclosure. 5km tested range.',
			votes: 38,
			status: 'APPROVED',
			category: 'NETWORK',
			timeAgo: '5h ago'
		},
		{
			name: 'LED_MATRIX_CUBE',
			builder: '@nano_drift',
			description:
				'8x8x8 RGB LED cube with hand-soldered connections and custom PCB driver boards. Runs procedural animations via WASM runtime.',
			votes: 71,
			status: 'APPROVED',
			category: 'DISPLAY',
			timeAgo: '1d ago'
		},
		{
			name: 'SENSOR_HUB_LITE',
			builder: '@pixel_smith',
			description:
				'Compact multi-sensor breakout board for air quality, temperature, humidity, and barometric pressure. I2C daisy-chain support.',
			votes: 24,
			status: 'OPEN FOR REVIEW',
			category: 'SENSOR',
			timeAgo: '3d ago'
		},
		{
			name: 'EINK_BADGE_PRO',
			builder: '@volt_runner',
			description:
				'Wearable e-ink badge with NFC tap-to-share. Runs on CR2032 for 6 months. Custom firmware with OTA updates via BLE.',
			votes: 56,
			status: 'APPROVED',
			category: 'WEARABLE',
			timeAgo: '4h ago'
		},
		{
			name: 'THERMAL_CAM_DIY',
			builder: '@flux_welder',
			description:
				'Low-cost thermal imaging camera using MLX90640 sensor and Pi Zero. 3D-printed housing with 2.8" TFT display.',
			votes: 18,
			status: 'NEEDS REVISION',
			category: 'SENSOR',
			timeAgo: '6h ago'
		},
		{
			name: 'MECH_MACRO_PAD',
			builder: '@key_phantom',
			description:
				'9-key mechanical macro pad with rotary encoder. Hot-swap sockets, per-key RGB, QMK firmware. CNC aluminum case.',
			votes: 63,
			status: 'OPEN FOR REVIEW',
			category: 'INPUT',
			timeAgo: '12h ago'
		},
		{
			name: 'RF_SNIFFER_KIT',
			builder: '@signal_ghost',
			description:
				'Sub-GHz RF analysis tool for 315/433/868/915 MHz bands. CC1101-based with OLED display and frequency hopping detection.',
			votes: 31,
			status: 'NEEDS REVISION',
			category: 'NETWORK',
			timeAgo: '2d ago'
		}
	];

	function statusColor(status: Project['status']): string {
		switch (status) {
			case 'APPROVED':
				return 'text-primary';
			case 'NEEDS REVISION':
				return 'text-[#F0FF00]';
			default:
				return 'text-secondary';
		}
	}
</script>

<section aria-labelledby="submissions-title">
	<span class="mb-3 block font-headline text-[10px] tracking-[0.2em] text-outline uppercase">
		SUBMISSIONS // ACTIVE_QUEUE
	</span>
	<h2
		id="submissions-title"
		class="mb-6 font-headline text-2xl font-black tracking-wider text-foreground"
	>
		PROJECT_SUBMISSIONS
	</h2>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each projects as project (project.name)}
			<article
				class="group border-2 border-outline-variant bg-surface-container-low p-5 transition-colors hover:border-primary"
			>
				<!-- Header row -->
				<div class="mb-3 flex items-start justify-between gap-2">
					<div>
						<h3 class="font-headline text-base font-bold tracking-wider text-foreground">
							{project.name}
						</h3>
						<span class="font-mono text-xs text-secondary">{project.builder}</span>
					</div>
					<Badge variant="outline" class="shrink-0 font-mono text-[10px]">
						{project.category}
					</Badge>
				</div>

				<!-- Description -->
				<p class="mb-4 line-clamp-2 text-sm leading-relaxed text-on-surface-variant">
					{project.description}
				</p>

				<!-- Footer -->
				<div class="flex items-center justify-between border-t-2 border-outline-variant pt-3">
					<div class="flex items-center gap-4">
						<span class="flex items-center gap-1.5 font-mono text-sm font-bold text-primary">
							<ThumbsUp class="h-3.5 w-3.5" />
							▲ {project.votes}
						</span>
						<span
							class={`font-mono text-[10px] font-bold tracking-wider ${statusColor(project.status)}`}
						>
							{project.status}
						</span>
					</div>
					<span class="flex items-center gap-1.5 font-mono text-[10px] text-on-surface-variant">
						<Clock class="h-3 w-3" />
						{project.timeAgo}
					</span>
				</div>
			</article>
		{/each}
	</div>
</section>

<script lang="ts">
	import PageHeader from '$lib/components/site/hardware/PageHeader.svelte';
	import ProjectCard from '$lib/components/site/hardware/ProjectCard.svelte';
	import ComponentInventory from '$lib/components/site/hardware/ComponentInventory.svelte';
	import RequestPartForm from '$lib/components/site/hardware/RequestPartForm.svelte';

	const projects = [
		{
			codename: 'SENTINEL_CAM_V2',
			title: 'Custom Video Doorbell',
			status: 'VERIFIED' as const,
			difficulty: 'INTERMEDIATE' as const,
			description:
				'Custom video doorbell with local AI processing, night vision IR LEDs, PIR motion detection, and encrypted local storage. Zero cloud dependency.',
			bom: [
				{ name: 'ESP32-CAM', cost: 8 },
				{ name: 'PIR Sensor', cost: 2 },
				{ name: 'IR LEDs', cost: 3 },
				{ name: 'PCB', cost: 5 },
				{ name: 'Enclosure', cost: 12 },
				{ name: 'Power Supply', cost: 8 }
			],
			progress: 100,
			timeEstimate: 12
		},
		{
			codename: 'ECHO_CORE_V1',
			title: 'Smart Speaker',
			status: 'IN_PROGRESS' as const,
			difficulty: 'ADVANCED' as const,
			description:
				'Open-source smart speaker with local wake-word detection, on-device LLM, modular I2S audio drivers, custom 3D-printed enclosure. Privacy-first, no cloud.',
			bom: [
				{ name: 'RPi Zero 2W', cost: 15 },
				{ name: 'I2S Amplifier', cost: 6 },
				{ name: 'Speaker Driver', cost: 8 },
				{ name: 'Microphone Array', cost: 12 },
				{ name: '3D-Printed Shell', cost: 5 },
				{ name: 'Misc', cost: 4 }
			],
			progress: 65,
			timeEstimate: 20
		},
		{
			codename: 'ARID_DRY_X1',
			title: '3D Printer Filament Dryer',
			status: 'QUEUED' as const,
			difficulty: 'BEGINNER' as const,
			description:
				'3D printer filament dryer with PID-controlled PTC heating, BME280 humidity/temp monitoring, OLED status display, multi-spool capacity.',
			bom: [
				{ name: 'PTC Heater', cost: 6 },
				{ name: 'BME280', cost: 3 },
				{ name: 'OLED 0.96"', cost: 4 },
				{ name: 'Arduino Nano', cost: 5 },
				{ name: 'Enclosure', cost: 8 },
				{ name: 'Misc', cost: 3 }
			],
			progress: 0,
			timeEstimate: 8
		}
	];
</script>

<!-- PageHeader (title + budget) -->
<PageHeader />

<!-- 12-col grid layout: 8 left + 4 right -->
<div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
	<!-- Left Column: Project Cards -->
	<div class="space-y-8 lg:col-span-8">
		{#each projects as project (project.codename)}
			<ProjectCard {...project} />
		{/each}
	</div>

	<!-- Right Column: Inventory + Request Form -->
	<div class="lg:col-span-4">
		<div class="sticky top-8 space-y-6">
			<ComponentInventory />
			<RequestPartForm />
		</div>
	</div>
</div>

<!-- System Logs Footer -->
<div class="mt-20 border-t-2 border-outline-variant pt-12">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
		<div class="md:col-span-1">
			<h4 class="mb-4 font-headline text-xs font-bold tracking-[0.3em] text-primary uppercase">
				System_Logs
			</h4>
			<div class="space-y-2 font-mono text-[9px] text-on-surface-variant">
				<div class="flex justify-between">
					<span>BOOT_HARDWARE_CHECK</span><span class="text-primary">PASS</span>
				</div>
				<div class="flex justify-between">
					<span>MEM_ALLOCATION</span><span class="text-primary">STABLE</span>
				</div>
				<div class="flex justify-between">
					<span>UPLINK_STATUS</span><span class="text-primary">ENCRYPTED</span>
				</div>
			</div>
		</div>
		<div class="md:col-span-3">
			<div class="flex h-full flex-col justify-end border-l border-outline-variant pl-8">
				<p
					class="font-headline text-3xl leading-none font-black tracking-tighter text-surface-container-highest uppercase opacity-50"
				>
					Sovereign_Hardware_Supply_Chain_v2024
				</p>
			</div>
		</div>
	</div>
</div>

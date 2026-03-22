<script lang="ts">
	let { title = 'SYSTEM_RUNTIME_LOG' }: { title?: string } = $props();

	const logEntries = [
		{ time: '08:42:11', text: 'INITIALIZING HARDWARE PROTOCOLS...', color: 'text-primary' },
		{ time: '08:42:15', text: 'SUCCESS: NODE_01 SYNCED', color: 'text-secondary' },
		{
			time: '08:42:18',
			text: 'UPLOADING ENCRYPTED TELEMETRY TO ARCHIVE...',
			color: 'text-foreground'
		},
		{ time: '08:42:22', text: 'WAITING FOR COMMAND', color: 'text-primary' }
	];
</script>

<section
	aria-label="Terminal display"
	class="relative overflow-hidden border-t-4 border-primary bg-surface-container-lowest px-6 py-6 font-mono text-xs md:px-8 md:py-8"
>
	<!-- Scanline overlay -->
	<div class="scanline pointer-events-none absolute inset-0 opacity-10"></div>

	<div class="mx-auto max-w-7xl">
		<!-- Title bar -->
		<div class="mb-3 flex items-center gap-2 text-[10px] text-on-surface-variant">
			<span class="text-primary">▸</span>
			<span class="tracking-widest uppercase">{title}</span>
		</div>

		<!-- Log entries -->
		<div role="log" aria-live="polite" class="flex flex-col gap-1">
			{#each logEntries as entry, i (entry.time)}
				<div class="flex gap-4">
					<span class="text-on-surface-variant">[{entry.time}]</span>
					<span class="{entry.color} uppercase">
						{entry.text}
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>

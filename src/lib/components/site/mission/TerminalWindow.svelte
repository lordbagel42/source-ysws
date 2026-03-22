<script lang="ts">
	let { title = 'SOURCE_OS // HARDWARE_TERMINAL' }: { title?: string } = $props();
</script>

<section class="overflow-hidden px-8 py-24 md:px-16">
	<div
		class="mx-auto max-w-5xl border-2 border-outline-variant bg-surface-container-lowest p-2 md:p-4"
	>
		<!-- Title bar with traffic lights -->
		<div
			class="flex items-center gap-4 border-b-2 border-outline-variant bg-surface-container-high px-4 py-2"
		>
			<div class="flex gap-2">
				<div class="h-2 w-2 rounded-full bg-error"></div>
				<div class="h-2 w-2 rounded-full bg-secondary"></div>
				<div class="h-2 w-2 rounded-full bg-primary"></div>
			</div>
			<span class="text-[10px] tracking-widest text-on-surface-variant uppercase">{title}</span>
		</div>
		<!-- Terminal body -->
		<div class="space-y-2 p-6 font-headline text-sm md:text-base">
			<p class="text-primary">
				<span class="text-on-surface-variant">guest@source:~$</span> ./verify_hardware_only.sh
			</p>
			<p class="text-foreground">Scanning submission type...</p>
			<p class="text-foreground">Checking bill of materials...</p>
			<p class="text-secondary">[OK] Hardware project detected.</p>
			<p class="text-secondary">[OK] Open-source schematics found.</p>
			<p class="text-foreground">Ready to allocate LilyGO T-Deck and budget.</p>
			<div class="flex items-center gap-2 pt-4">
				<span class="text-on-surface-variant">guest@source:~$</span>
				<span class="blinking-cursor font-bold text-primary">ship --hardware --open-source</span>
			</div>
		</div>
	</div>
</section>

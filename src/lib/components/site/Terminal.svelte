<section class="py-24 px-8 md:px-16 overflow-hidden">
	<div class="bg-surface-container-lowest border-2 border-outline-variant p-2 md:p-4 max-w-5xl mx-auto">
		<div class="bg-surface-container-high px-4 py-2 border-b-2 border-outline-variant flex items-center gap-4">
			<div class="flex gap-2">
				<div class="w-2 h-2 rounded-full bg-error"></div>
				<div class="w-2 h-2 rounded-full bg-secondary"></div>
				<div class="w-2 h-2 rounded-full bg-primary-container"></div>
			</div>
			<span class="text-[10px] font-label text-outline uppercase tracking-widest">SOURCE_OS // HARDWARE_TERMINAL</span>
		</div>
		<div class="p-6 font-headline text-sm md:text-base space-y-2">
			<p class="text-primary-container"><span class="text-outline">guest@source:~$</span> ./verify_hardware_only.sh</p>
			<p class="text-on-surface">Scanning submission type...</p>
			<p class="text-on-surface">Checking bill of materials...</p>
			<p class="text-secondary">[OK] Hardware project detected.</p>
			<p class="text-secondary">[OK] Open-source schematics found.</p>
			<p class="text-on-surface">Ready to allocate LilyGO T-Deck and budget.</p>
			<div class="flex items-center gap-2 pt-4">
				<span class="text-outline">guest@source:~$</span>
				<span class="text-primary-container blinking-cursor font-bold">ship --hardware --open-source</span>
			</div>
		</div>
	</div>
</section>

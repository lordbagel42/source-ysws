<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<section class="min-h-[819px] flex flex-col justify-center px-8 md:px-16 border-b-2 border-outline-variant relative overflow-hidden">
	<div class="absolute top-10 right-10 text-[120px] font-black text-surface-container-high opacity-20 pointer-events-none select-none font-headline leading-none">
		0xSOURCE
	</div>
	<div class="max-w-4xl z-10">
		<div class="mb-4 inline-block bg-surface-container-high px-3 py-1 border-2 border-outline-variant">
			<span class="text-primary font-label text-xs tracking-widest uppercase">SYSTM_INITIALIZED //</span>
		</div>
		<h1 class="text-6xl md:text-9xl font-headline font-black text-on-surface leading-[0.85] tracking-tighter mb-8">
			BUILD <span class="text-primary-container">X</span><br/>
			GET <span class="text-secondary">T-DECK + $275</span>
		</h1>
		<p class="text-xl md:text-2xl font-body text-on-surface-variant max-w-2xl mb-12 border-l-4 border-primary pl-6 uppercase">
			BUILD AN OPEN-SOURCE ALTERNATIVE. SHIP IT. GET THE HARDWARE.
		</p>
		<div class="flex flex-col sm:flex-row gap-6">
			<Button variant="source-hero">
				INITIALIZE_HARDWARE_BUILD
			</Button>
			<div class="flex items-center gap-4 px-6 py-4 bg-surface-container-lowest border-2 border-outline-variant">
				<span class="material-symbols-outlined text-secondary animate-pulse">sensors</span>
				<span class="text-outline font-label text-xs uppercase blinking-cursor">Awaiting hardware schematic</span>
			</div>
		</div>
	</div>
	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
		<div class="flex flex-col items-center gap-2">
			<span class="text-[10px] text-outline font-label uppercase tracking-widest">Verify constraints</span>
			<div class="w-0.5 h-12 bg-outline-variant"></div>
		</div>
	</div>
</section>

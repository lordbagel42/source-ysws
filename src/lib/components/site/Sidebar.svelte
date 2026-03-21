<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<aside class="hidden md:flex fixed left-0 top-0 h-full z-40 flex-col bg-surface-container-low text-primary-container font-headline text-xs font-bold uppercase tracking-tighter w-64 border-r-2 border-surface-container-highest pt-24">
	<div class="px-6 mb-8">
		<div class="flex items-center gap-3 mb-2">
			<div class="w-8 h-8 bg-surface-container-high border-2 border-outline-variant flex items-center justify-center">
				<span class="material-symbols-outlined text-sm">person</span>
			</div>
			<div>
				<div class="text-primary-container">OPERATOR_01</div>
				<div class="text-[8px] text-outline">STATUS: ACTIVE</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col flex-grow">
		<a class="bg-surface-container-high text-primary-container border-l-4 border-primary-container pl-3 py-4 flex items-center gap-3" href="#">
			<span class="material-symbols-outlined">target</span> MISSION
		</a>
		<a class="text-outline hover:bg-surface-container-high hover:text-primary-container pl-4 py-4 flex items-center gap-3 transition-all duration-150" href="#">
			<span class="material-symbols-outlined">bolt</span> STREAK
		</a>
		<a class="text-outline hover:bg-surface-container-high hover:text-primary-container pl-4 py-4 flex items-center gap-3 transition-all duration-150" href="#">
			<span class="material-symbols-outlined">memory</span> HARDWARE
		</a>
		<a class="text-outline hover:bg-surface-container-high hover:text-primary-container pl-4 py-4 flex items-center gap-3 transition-all duration-150" href="#">
			<span class="material-symbols-outlined">inventory_2</span> VAULT
		</a>
	</div>
	<div class="p-6">
		<Button variant="source" class="w-full py-3">
			UPLOAD_SHIPMENT
		</Button>
	</div>
</aside>

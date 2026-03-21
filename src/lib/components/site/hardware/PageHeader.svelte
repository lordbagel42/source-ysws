<script lang="ts">
	import BudgetTracker from './BudgetTracker.svelte';
</script>

<div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
	<div>
		<span
			class="mb-2 block font-headline text-xs tracking-[0.2em] text-muted-foreground underline decoration-primary/30"
		>
			MANIFEST_ID: 0x2A7F_HARDWARE
		</span>
		<h1
			class="crt-glow font-headline text-5xl font-black uppercase leading-none tracking-tighter text-primary md:text-6xl"
		>
			Hardware Catalog
		</h1>
	</div>
	<BudgetTracker />
</div>

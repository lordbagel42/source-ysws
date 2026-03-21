<script lang="ts">
	let { value, max }: { value: number; max: number } = $props();
</script>

<div class="relative size-16">
	<div class="absolute inset-0 rounded-full border-2 border-outline-variant"></div>
	<div class="absolute inset-1 animate-pulse rounded-full border border-primary"></div>
</div>

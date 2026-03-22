<script lang="ts">
	import { type HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	let {
		class: className,
		value = 0,
		max = 100,
		...rest
	}: HTMLAttributes<HTMLDivElement> & { value?: number; max?: number } = $props();
</script>

<div class={cn('relative h-2 w-full overflow-hidden bg-primary/20', className)} {...rest}>
	<div
		class="h-full w-full flex-1 bg-primary transition-all"
		style={`transform: translateX(-${100 - (value / max) * 100}%)`}
	></div>
</div>

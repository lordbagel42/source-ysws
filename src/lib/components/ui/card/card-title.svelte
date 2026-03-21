<script lang="ts">
	import { type HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h3 class={cn('leading-none font-semibold tracking-tight', className)} {...rest}>
	{@render children?.()}
</h3>

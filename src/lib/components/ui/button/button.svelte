<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { buttonVariants, type Props } from "./index.js";
	import { cn } from "$lib/utils.js";

	let {
		class: className,
		variant = "default",
		size = "default",
		children,
		ref = $bindable(null),
		...rest
	}: Props = $props();
</script>

<button
	bind:this={ref}
	class={cn(buttonVariants({ variant, size }), className)}
	{...rest}
>
	{@render children?.()}
</button>

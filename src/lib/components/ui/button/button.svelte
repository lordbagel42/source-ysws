<script lang="ts">
	import { type HTMLButtonAttributes, type HTMLAnchorAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '$lib/utils.js';

	const buttonVariants = tv({
		base: 'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
				destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				outline:
					'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 px-3 text-xs',
				lg: 'h-10 px-8',
				icon: 'h-9 w-9'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	type Props = (HTMLButtonAttributes | HTMLAnchorAttributes) &
		VariantProps<typeof buttonVariants> & {
			href?: string;
		};

	let { class: className, variant, size, children, href, ...rest }: Props = $props();
</script>

{#if href}
	<a
		{href}
		class={cn(buttonVariants({ variant, size, className }))}
		{...rest as HTMLAnchorAttributes}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		class={cn(buttonVariants({ variant, size, className }))}
		{...rest as HTMLButtonAttributes}
	>
		{@render children?.()}
	</button>
{/if}

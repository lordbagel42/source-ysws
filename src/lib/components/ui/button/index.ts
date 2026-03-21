import { type VariantProps, tv } from "tailwind-variants";
import type { HTMLButtonAttributes } from "svelte/elements";
import Root from "./button.svelte";

const buttonVariants = tv({
	base: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline:
				"border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			source: "bg-primary-container text-on-primary font-black border-2 border-primary-fixed hover:bg-primary-fixed-dim active:translate-y-0.5 transition-all",
			"source-hero": "px-8 py-5 text-on-primary font-headline font-black text-xl hard-shadow hover:-translate-x-1 hover:-translate-y-1 transition-transform border-2 border-primary-fixed uppercase tracking-tighter bg-primary-container",
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "size-9",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = HTMLButtonAttributes & {
	variant?: Variant;
	size?: Size;
};

export {
	Root,
	type Props,
	//
	Root as Button,
	type Props as ButtonProps,
	buttonVariants,
};

<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<a
	href="#main-content"
	class="fixed top-0 left-0 z-[9999] -translate-y-full bg-primary px-6 py-3 font-headline font-bold text-primary-foreground transition-transform focus:translate-y-0"
>
	Skip to content
</a>
<div id="main-content" class="min-h-screen bg-background text-foreground">
	{@render children()}
</div>

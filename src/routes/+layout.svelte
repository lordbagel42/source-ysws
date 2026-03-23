<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SkipToContent from '$lib/components/site/SkipToContent.svelte';
	import Sidebar from '$lib/components/site/Sidebar.svelte';
	import MobileNav from '$lib/components/site/MobileNav.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import { toast } from 'svelte-sonner';
	import { page } from '$app/stores';

	let { data, children } = $props();

	let welcomed = false;
	$effect(() => {
		if ($page.url.searchParams.has('welcome') && data.user && !welcomed) {
			welcomed = true;
			toast.success(`Welcome, ${data.user.name ?? 'builder'}`);
			// Clean the ?welcome param without a SvelteKit navigation
			history.replaceState(null, '', '/');
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<SkipToContent />
<div class="min-h-screen bg-background text-foreground">
	<Sidebar user={data.user} />
	<div class="min-h-screen pb-16 md:ml-64 md:pb-0">
		{@render children()}
	</div>
	<MobileNav />
</div>
<Toaster />

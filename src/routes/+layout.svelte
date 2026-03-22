<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SkipToContent from '$lib/components/site/SkipToContent.svelte';
	import Sidebar from '$lib/components/site/Sidebar.svelte';
	import MobileNav from '$lib/components/site/MobileNav.svelte';

	let { data, children } = $props();
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

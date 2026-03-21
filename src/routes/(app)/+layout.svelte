<script lang="ts">
	import Sidebar from '$lib/components/site/Sidebar.svelte';
	import Footer from '$lib/components/site/Footer.svelte';

	let { data, children } = $props();
</script>

<div class="flex min-h-screen">
	<Sidebar user={data.user} />
	<div class="ml-64 flex flex-1 flex-col">
		<main class="flex-1 p-6">
			{@render children()}
		</main>
		<Footer />
	</div>
</div>

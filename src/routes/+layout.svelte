<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	const isLoginPage = $derived(page.url.pathname === '/login');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>YSWS_CONSOLE_V1.0</title>
</svelte:head>

{#if !isLoginPage}
	<Navigation />
	<main class="min-h-screen px-6 pt-8 pb-12 md:ml-64 lg:pb-24">
		{@render children()}
	</main>
{:else}
	{@render children()}
{/if}

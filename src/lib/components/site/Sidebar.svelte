<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import { Monitor, Users, Database, Flame } from 'lucide-svelte';

	let { user }: { user?: { name?: string | null; image?: string | null } | null } = $props();

	const navItems = [
		{ label: 'DASHBOARD', path: '/', icon: Monitor },
		{ label: 'CORE HEAT', path: '/streak', icon: Flame },
		{ label: 'HARDWARE', path: '/hardware', icon: Database },
		{ label: 'COMMUNITY', path: '/network', icon: Users }
	];

	async function signOut() {
		await authClient.signOut();
		goto('/login');
	}
</script>

<aside
	class="fixed top-0 left-0 hidden h-screen w-64 flex-col border-r-2 border-outline-variant bg-surface-container-lowest md:flex"
>
	<div class="px-4 py-6">
		<span class="font-headline text-2xl font-black text-primary uppercase">SOURCE</span>
		<p class="font-mono text-[10px] tracking-widest text-on-surface-variant">REBUILD_PROTOCOL</p>
	</div>

	<nav class="flex flex-1 flex-col gap-1 px-2">
		{#each navItems as item}
			{@const active = $page.url.pathname === item.path}
			<a
				href={item.path}
				class="flex items-center gap-3 px-4 py-3 font-mono text-xs tracking-wider uppercase {active
					? 'border-l-4 border-primary bg-surface-container-high text-primary'
					: 'text-on-surface-variant hover:bg-surface-container hover:text-primary'}"
			>
				<item.icon size={18} />
				{item.label}
			</a>
		{/each}
	</nav>

	<div class="border-t-2 border-outline-variant p-4">
		{#if user}
			<div class="flex items-center gap-3">
				{#if user.image}
					<img src={user.image} alt={user.name ?? 'User'} class="h-8 w-8 rounded-full" />
				{:else}
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container font-mono text-xs text-primary"
					>
						{(user.name ?? '?').charAt(0).toUpperCase()}
					</div>
				{/if}
				<span class="flex-1 truncate font-mono text-xs text-on-surface-variant">
					{user.name ?? 'User'}
				</span>
				<button
					onclick={signOut}
					class="font-mono text-[10px] text-on-surface-variant uppercase hover:text-primary"
				>
					OUT
				</button>
			</div>
		{:else}
			<a
				href="/login"
				class="block w-full bg-primary py-3 text-center font-mono text-xs font-bold text-primary-foreground uppercase"
			>
				INIT_SEQUENCE
			</a>
		{/if}
	</div>
</aside>

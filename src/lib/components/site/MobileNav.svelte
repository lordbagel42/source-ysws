<script lang="ts">
	import { page } from '$app/stores';
	import { Monitor, Users, Database, Flame, Settings } from 'lucide-svelte';

	const navItems = [
		{ label: 'HOME', path: '/', icon: Monitor },
		{ label: 'HEAT', path: '/streak', icon: Flame },
		{ label: 'BUILD', path: '/hardware', icon: Database },
		{ label: 'VOTE', path: '/network', icon: Users },
		{ label: 'SETTINGS', path: '/settings', icon: Settings }
	];
</script>

<nav
	class="fixed right-0 bottom-0 left-0 z-40 flex items-center justify-around border-t-2 border-outline-variant bg-surface-container-lowest py-2 md:hidden"
>
	{#each navItems as item (item.path)}
		<a
			href={item.path}
			class="flex flex-col items-center gap-1 px-3 py-2 font-mono text-[10px] tracking-wider uppercase {$page
				.url.pathname === item.path
				? 'border-t-2 border-primary text-primary'
				: 'text-on-surface-variant'}"
		>
			<item.icon size={20} />
			{item.label}
		</a>
	{/each}
</nav>

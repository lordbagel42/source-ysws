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
	class="fixed right-0 bottom-0 left-0 z-40 flex items-center border-t-2 border-outline-variant bg-surface-container-lowest md:hidden"
>
	{#each navItems as item (item.path)}
		<a
			href={item.path}
			class="flex flex-1 flex-col items-center gap-1 border-t-2 px-1 pt-2 pb-3 font-mono text-[9px] tracking-wider uppercase transition-colors {$page
				.url.pathname === item.path
				? 'border-primary text-primary'
				: 'border-transparent text-on-surface-variant'}"
		>
			<item.icon size={18} />
			{item.label}
		</a>
	{/each}
</nav>

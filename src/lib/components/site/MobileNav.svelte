<script lang="ts">
	import { page } from '$app/stores';
	import { Monitor, Users, Database, Lock } from 'lucide-svelte';

	const navItems = [
		{ label: 'TERM', path: '/', icon: Monitor },
		{ label: 'NET', path: '/network', icon: Users },
		{ label: 'DATA', path: '/hardware', icon: Database },
		{ label: 'SEC', path: '/vault', icon: Lock }
	];
</script>

<nav
	class="fixed right-0 bottom-0 left-0 z-40 flex items-center justify-around border-t-2 border-outline-variant bg-surface-container-lowest py-2 md:hidden"
>
	{#each navItems as item}
		<a
			href={item.path}
			class="flex flex-col items-center gap-1 px-3 py-1 font-mono text-[10px] tracking-wider uppercase {$page
				.url.pathname === item.path
				? 'text-primary'
				: 'text-on-surface-variant'}"
		>
			<item.icon size={20} />
			{item.label}
		</a>
	{/each}
</nav>

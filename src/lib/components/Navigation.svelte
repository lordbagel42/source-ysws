<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils';

	const navItems = [
		{ name: 'MISSION', href: '/', icon: 'assignment' },
		{ name: 'STREAK', href: '/streak', icon: 'bolt' },
		{ name: 'HARDWARE', href: '/hardware', icon: 'memory' },
		{ name: 'VAULT', href: '#', icon: 'lock_open' }
	];

	function isActive(href: string) {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<!-- Desktop Sidebar -->
<aside
	class="fixed top-0 left-0 z-40 hidden h-full w-64 flex-col border-r-2 border-surface-container-high bg-surface-container-low font-label text-xs font-bold tracking-widest uppercase md:flex"
>
	<div class="border-b border-surface-container-high p-6">
		<div class="mb-4 text-xl font-bold tracking-tighter text-primary-container">YSWS_CONSOLE</div>
		<div class="flex items-center gap-3">
			<div
				class="flex h-8 w-8 items-center justify-center border border-outline-variant bg-surface-container-highest"
			>
				<span class="material-symbols-outlined text-xl text-primary-container">account_circle</span>
			</div>
			<div>
				<div class="font-black text-primary-container">OPERATOR_01</div>
				<div class="text-[10px] text-outline">STATUS: ACTIVE</div>
			</div>
		</div>
	</div>

	<nav class="flex-1 py-4">
		{#each navItems as item (item.name)}
			<a
				href={item.href}
				class={cn(
					'flex items-center gap-3 px-6 py-4 transition-all duration-75 hover:bg-surface-container-high/50 hover:text-primary',
					isActive(item.href)
						? 'border-l-4 border-primary-container bg-surface-container-high text-primary-container'
						: 'text-outline'
				)}
			>
				<span class="material-symbols-outlined text-lg">{item.icon}</span>
				<span>{item.name}</span>
			</a>
		{/each}
	</nav>

	<div class="mt-auto p-6">
		<button
			class="w-full bg-primary-container px-4 py-3 font-bold tracking-tighter text-on-primary transition-colors hover:bg-primary-fixed-dim active:scale-[0.99]"
		>
			INITIALIZE_BUILD
		</button>
		<div class="mt-4 border-t border-surface-container-high pt-4">
			<a
				href="/"
				class="flex items-center gap-3 px-2 py-2 text-outline transition-all duration-75 hover:bg-surface-container-high hover:text-primary"
			>
				<span class="material-symbols-outlined text-lg">settings</span>
				<span>SETTINGS</span>
			</a>
			<a
				href="/"
				class="flex items-center gap-3 px-2 py-2 text-outline transition-all duration-75 hover:bg-surface-container-high hover:text-primary"
			>
				<span class="material-symbols-outlined text-lg">logout</span>
				<span>LOGOUT</span>
			</a>
		</div>
	</div>
</aside>

<!-- Mobile Bottom Navigation -->
<nav
	class="fixed right-0 bottom-0 left-0 z-50 flex h-16 items-center justify-around border-t border-outline-variant bg-surface-container-low px-4 md:hidden"
>
	{#each navItems as item (item.name)}
		<a
			href={item.href}
			class={cn(
				'flex flex-col items-center transition-colors',
				isActive(item.href) ? 'text-primary-container' : 'text-outline'
			)}
		>
			<span
				class="material-symbols-outlined"
				style={isActive(item.href) ? "font-variation-settings: 'FILL' 1;" : ''}>{item.icon}</span
			>
			<span class="mt-1 font-label text-[8px]">{item.name}</span>
		</a>
	{/each}
</nav>

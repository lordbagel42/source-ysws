<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { authClient } from '$lib/auth-client';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { House, Zap, Cpu, Archive, Settings, LogOut } from 'lucide-svelte';
	import type { User } from 'better-auth/types';

	let { user }: { user: User } = $props();

	const navItems = [
		{ label: 'Mission', path: '/' as const, routeId: '/(app)' as const, icon: House },
		{ label: 'Streak', path: '/streak' as const, routeId: '/(app)/streak' as const, icon: Zap },
		{
			label: 'Hardware',
			path: '/hardware' as const,
			routeId: '/(app)/hardware' as const,
			icon: Cpu
		},
		{ label: 'Vault', path: '/vault' as const, routeId: '/(app)/vault' as const, icon: Archive }
	];

	let currentPath = $derived($page.url.pathname);

	function isActive(path: string): boolean {
		if (path === '/') return currentPath === '/';
		return currentPath.startsWith(path);
	}

	async function handleSignOut() {
		await authClient.signOut();
		goto(resolve('/login'));
	}
</script>

<aside
	class="fixed top-0 left-0 z-40 flex h-screen w-16 flex-col border-r-2 border-outline-variant bg-surface-container-low"
>
	<!-- Branding -->
	<div class="flex h-16 items-center justify-center">
		<span class="crt-glow font-headline text-2xl font-black">S</span>
	</div>

	<!-- Navigation -->
	<nav class="flex flex-1 flex-col items-center gap-1 py-2">
		{#each navItems as item (item.path)}
			<Tooltip.Root>
				<Tooltip.Trigger>
					<a
						href={resolve(item.routeId)}
						class="flex h-10 w-10 items-center justify-center transition-colors {isActive(item.path)
							? 'border-l-2 border-primary bg-surface-container-high text-primary'
							: 'border-l-2 border-transparent text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}"
					>
						<item.icon class="h-5 w-5" />
					</a>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content
						side="right"
						class="rounded-none border-outline-variant bg-surface-container-high font-mono text-xs text-on-surface"
					>
						{item.label}
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		{/each}
	</nav>

	<!-- Bottom actions -->
	<div class="flex flex-col items-center gap-2 pb-4">
		<Tooltip.Root>
			<Tooltip.Trigger>
				<a
					href={resolve('/settings')}
					class="flex h-10 w-10 items-center justify-center border-l-2 border-transparent text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
				>
					<Settings class="h-5 w-5" />
				</a>
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content
					side="right"
					class="rounded-none border-outline-variant bg-surface-container-high font-mono text-xs text-on-surface"
				>
					Settings
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>

		<Tooltip.Root>
			<Tooltip.Trigger>
				<a href={resolve('/settings')} class="flex items-center justify-center">
					<Avatar class="h-8 w-8 border border-outline-variant">
						<AvatarImage src={user.image ?? ''} alt={user.name} />
						<AvatarFallback
							class="bg-surface-container-high font-mono text-xs text-on-surface-variant"
						>
							{user.name?.charAt(0).toUpperCase() ?? '?'}
						</AvatarFallback>
					</Avatar>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content
					side="right"
					class="rounded-none border-outline-variant bg-surface-container-high font-mono text-xs text-on-surface"
				>
					{user.name ?? 'User'}
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>

		<Tooltip.Root>
			<Tooltip.Trigger>
				<button
					onclick={handleSignOut}
					class="flex h-10 w-10 items-center justify-center border-l-2 border-transparent text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
				>
					<LogOut class="h-5 w-5" />
				</button>
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content
					side="right"
					class="rounded-none border-outline-variant bg-surface-container-high font-mono text-xs text-on-surface"
				>
					Sign out
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	</div>
</aside>

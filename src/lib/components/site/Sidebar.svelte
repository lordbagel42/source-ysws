<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { authClient } from '$lib/auth-client';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { ClipboardList, Zap, Cpu, Archive, Rocket, Settings, LogOut } from 'lucide-svelte';
	import type { User } from 'better-auth/types';

	let { user }: { user: User } = $props();

	const navItems = [
		{
			label: 'Dashboard',
			path: '/dashboard',
			routeId: '/(app)/dashboard' as const,
			icon: ClipboardList
		},
		{ label: 'Streaks', path: '/streak', routeId: '/(app)/streak' as const, icon: Zap },
		{ label: 'Hardware', path: '/hardware', routeId: '/(app)/hardware' as const, icon: Cpu },
		{ label: 'Gallery', path: '/vault', routeId: '/(app)/vault' as const, icon: Archive }
	];

	let currentPath = $derived($page.url.pathname);

	function isActive(path: string): boolean {
		return currentPath.startsWith(path);
	}

	async function handleSignOut() {
		await authClient.signOut();
		goto(resolve('/login'));
	}
</script>

<aside
	class="fixed top-0 left-0 flex h-screen w-64 flex-col border-r-2 border-outline-variant bg-surface-container-low"
>
	<!-- Logo -->
	<div class="p-6">
		<h1 class="crt-glow font-headline text-2xl font-black tracking-widest">SOURCE</h1>
	</div>

	<Separator />

	<!-- User section -->
	<div class="flex items-center gap-3 p-4">
		<Avatar class="h-8 w-8 border border-outline-variant">
			<AvatarImage src={user.image ?? ''} alt={user.name} />
			<AvatarFallback class="bg-surface-container-high font-mono text-xs text-on-surface-variant">
				{user.name?.charAt(0).toUpperCase() ?? '?'}
			</AvatarFallback>
		</Avatar>
		<div class="min-w-0">
			<p class="truncate font-mono text-sm text-on-surface">{user.name ?? 'Unknown'}</p>
		</div>
	</div>

	<Separator />

	<!-- Navigation -->
	<nav class="flex-1 py-2">
		{#each navItems as item (item.path)}
			<a
				href={resolve(item.routeId)}
				class="flex items-center gap-3 px-4 py-3 font-mono text-sm transition-colors {isActive(
					item.path
				)
					? 'border-l-4 border-primary bg-surface-container-high text-primary'
					: 'border-l-4 border-transparent text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}"
			>
				<item.icon class="h-4 w-4" />
				{item.label}
			</a>
		{/each}
	</nav>

	<Separator />

	<!-- Bottom actions -->
	<div class="space-y-2 p-4">
		<Button
			class="w-full bg-primary font-mono text-xs font-bold tracking-wider text-primary-foreground hover:bg-primary/90"
		>
			<Rocket class="mr-2 h-3 w-3" />
			Start building
		</Button>
		<div class="flex gap-2">
			<Button
				variant="ghost"
				class="flex-1 font-mono text-xs text-on-surface-variant hover:text-on-surface"
			>
				<Settings class="mr-1 h-3 w-3" />
				Settings
			</Button>
			<Button
				variant="ghost"
				class="flex-1 font-mono text-xs text-on-surface-variant hover:text-on-surface"
				onclick={handleSignOut}
			>
				<LogOut class="mr-1 h-3 w-3" />
				Sign out
			</Button>
		</div>
	</div>
</aside>

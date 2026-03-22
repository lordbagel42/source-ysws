<script lang="ts">
	import { resolve } from '$app/paths';
	import type { User } from 'better-auth/types';
	import { Button } from '$lib/components/ui/button/index.js';

	let { user }: { user: User | null } = $props();
</script>

<header class="glass-hud sticky top-0 z-50 border-b-2 border-outline-variant">
	<nav class="flex items-center justify-between px-8 py-4 md:px-16">
		<a
			href={resolve('/')}
			class="crt-glow font-headline text-2xl font-black tracking-tighter text-primary"
		>
			SOURCE
		</a>
		{#if user}
			<Button href="/dashboard">Go to Dashboard</Button>
		{:else}
			<Button href="/login" variant="outline">Sign in with GitHub</Button>
		{/if}
	</nav>
</header>

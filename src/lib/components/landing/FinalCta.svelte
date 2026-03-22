<script lang="ts">
	import type { User } from 'better-auth/types';
	import { Button } from '$lib/components/ui/button/index.js';

	let { user }: { user: User | null } = $props();
</script>

<section class="border-t-2 border-outline-variant px-8 py-20 text-center md:px-16">
	<h2 class="mb-6 font-headline text-4xl font-black tracking-tighter text-foreground">
		Ready to start building?
	</h2>
	{#if user}
		<Button
			href="/dashboard"
			class="hard-shadow border-2 border-primary bg-primary px-8 py-5 font-headline text-xl font-black tracking-tighter text-primary-foreground uppercase hover:-translate-x-1 hover:-translate-y-1"
		>
			Go to Dashboard
		</Button>
	{:else}
		<Button
			href="/login"
			class="hard-shadow border-2 border-primary bg-primary px-8 py-5 font-headline text-xl font-black tracking-tighter text-primary-foreground uppercase hover:-translate-x-1 hover:-translate-y-1"
		>
			Sign in with GitHub
		</Button>
	{/if}
	<p class="mt-6 text-sm text-on-surface-variant">
		Source is a Hack Club YSWS — you ship code, we ship hardware.
	</p>
</section>

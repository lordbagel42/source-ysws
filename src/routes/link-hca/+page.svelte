<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import { Button } from '$lib/components/ui/button';
	import { Link, LogOut } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	let linking = $state(false);
	let signingOut = $state(false);
</script>

<div class="relative flex min-h-screen items-center justify-center px-4">
	<div
		class="pointer-events-none absolute inset-0 opacity-5"
		style="background-image: radial-gradient(circle, #00ff41 1px, transparent 1px); background-size: 24px 24px;"
	></div>
	<div
		class="scanline relative w-full max-w-md overflow-visible border-2 border-outline-variant bg-surface-container-low p-8"
	>
		<div
			class="pointer-events-none absolute -right-3 -bottom-3 h-16 w-16 border-r-2 border-b-2 border-primary"
		></div>
		<div class="mb-8 text-center">
			<h1 class="crt-glow font-headline text-4xl font-black tracking-widest">LINK ACCOUNT</h1>
			<p class="mt-2 font-mono text-sm text-on-surface-variant">SECURITY PROTOCOL // SOURCE YSWS</p>
		</div>

		<p class="mb-6 text-center font-mono text-sm text-on-surface-variant">
			Link your Hack Club account to continue using Source.
		</p>

		<div class="flex flex-col gap-4">
			<Button
				type="button"
				disabled={linking}
				onclick={async () => {
					linking = true;
					try {
						await authClient.oauth2.link({
							providerId: 'hackclub',
							callbackURL: '/'
						});
					} catch {
						toast.error('Linking failed', {
							description: 'Could not reach Hack Club. Try again.'
						});
						linking = false;
					}
				}}
				class="hard-shadow w-full bg-primary py-6 font-headline text-lg font-bold tracking-wider text-primary-foreground hover:bg-primary/90"
			>
				<Link class="mr-2 size-5" />
				{linking ? 'Redirecting...' : 'LINK HACK CLUB ACCOUNT'}
			</Button>

			<Button
				type="button"
				variant="outline"
				disabled={signingOut}
				onclick={async () => {
					signingOut = true;
					try {
						await authClient.signOut();
						await goto('/login');
					} catch {
						toast.error('Sign out failed');
						signingOut = false;
					}
				}}
				class="w-full font-mono text-sm"
			>
				<LogOut class="mr-2 size-4" />
				{signingOut ? 'Signing out...' : 'Sign out'}
			</Button>
		</div>

		<div class="mt-6 text-center">
			<p class="font-mono text-xs text-on-surface-variant">SECURE TERMINAL v1.0</p>
		</div>
	</div>
</div>

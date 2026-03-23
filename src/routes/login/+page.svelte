<script lang="ts">
	import { authClient } from '$lib/auth-client';
	import { Button } from '$lib/components/ui/button';
	import KeyRound from 'lucide-svelte/icons/key-round';
	import { toast } from 'svelte-sonner';

	let signingIn = $state(false);
	let signingInPasskey = $state(false);
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
			<h1 class="crt-glow font-headline text-4xl font-black tracking-widest">AUTHENTICATE</h1>
			<p class="mt-2 font-mono text-sm text-on-surface-variant">ACCESS PROTOCOL // SOURCE YSWS</p>
		</div>

		<div class="flex flex-col gap-4">
			<Button
				type="button"
				disabled={signingIn}
				onclick={async () => {
					signingIn = true;
					try {
						await authClient.signIn.social({
							provider: 'hackclub',
							callbackURL: '/?welcome=1'
						});
					} catch {
						toast.error('Sign in failed', {
							description: 'Could not reach Hack Club. Try again.'
						});
						signingIn = false;
					}
				}}
				class="hard-shadow w-full bg-primary py-6 font-headline text-lg font-bold tracking-wider text-primary-foreground hover:bg-primary/90"
			>
				{signingIn ? 'Redirecting...' : 'SIGN IN WITH HACK CLUB'}
			</Button>

			<div class="flex items-center gap-3 font-mono text-xs text-on-surface-variant">
				<span class="h-px flex-1 bg-outline-variant"></span>
				<span>— or —</span>
				<span class="h-px flex-1 bg-outline-variant"></span>
			</div>

			<Button
				type="button"
				disabled={signingInPasskey}
				onclick={async () => {
					signingInPasskey = true;
					await authClient.signIn.passkey({
						fetchOptions: {
							onSuccess: () => {
								window.location.href = '/?welcome=1';
							},
							onError: (ctx: { error: { message: string } }) => {
								toast.error(ctx.error.message);
								signingInPasskey = false;
							}
						}
					});
				}}
				class="hard-shadow w-full border-2 border-amber-400 bg-transparent py-6 font-headline text-lg font-bold tracking-wider text-amber-400 hover:bg-amber-400/10"
			>
				<KeyRound class="mr-2 size-5" />
				{signingInPasskey ? 'Authenticating...' : 'SIGN IN WITH PASSKEY'}
			</Button>
		</div>

		<div class="mt-6 text-center">
			<p class="font-mono text-xs text-on-surface-variant">SECURE TERMINAL v1.0</p>
		</div>
	</div>
</div>

<script lang="ts">
	import { authClient } from '$lib/auth-client';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="w-full max-w-md border-2 border-outline-variant bg-surface-container-low p-8">
		<div class="mb-8 text-center">
			<h1 class="crt-glow font-headline text-4xl font-black tracking-widest">AUTHENTICATE</h1>
			<p class="mt-2 font-mono text-sm text-on-surface-variant">ACCESS PROTOCOL // SOURCE YSWS</p>
		</div>

		<div class="flex flex-col gap-4">
			<Button
				type="button"
				onclick={async () => {
					await authClient.signIn.social({
						provider: 'hackclub',
						callbackURL: '/'
					});
				}}
				class="hard-shadow w-full bg-primary py-6 font-headline text-lg font-bold tracking-wider text-primary-foreground hover:bg-primary/90"
			>
				SIGN IN WITH HACK CLUB
			</Button>
		</div>

		<div class="mt-6 text-center">
			<p class="font-mono text-xs text-on-surface-variant">
				SECURE TERMINAL v1.0 <span class="blinking-cursor"></span>
			</p>
		</div>
	</div>
</div>

<style>
	:global(.crt-glow) {
		text-shadow: 0 0 10px rgba(var(--primary), 0.5);
	}
	:global(.hard-shadow) {
		box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.2);
	}
</style>

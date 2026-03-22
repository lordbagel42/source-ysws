<script lang="ts">
	import { authClient } from '$lib/auth-client';
	import { Button } from '$lib/components/ui/button';
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

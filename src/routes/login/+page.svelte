<script lang="ts">
	import { authClient } from '$lib/auth-client';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="w-full max-w-md border-2 border-outline-variant bg-surface-container-low p-8">
		<div class="mb-8 text-center">
			<h1 class="crt-glow font-headline text-4xl font-black tracking-widest">Sign in</h1>
			<p class="mt-2 font-mono text-sm text-on-surface-variant">Source — a Hack Club YSWS</p>
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
				Sign in with Hack Club
			</Button>
		</div>
	</div>
</div>

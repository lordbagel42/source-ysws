<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="w-full max-w-md border-2 border-outline-variant bg-surface-container-low p-8">
		<div class="mb-8 text-center">
			<h1 class="crt-glow font-headline text-4xl font-black tracking-widest">AUTHENTICATE</h1>
			<p class="mt-2 font-mono text-sm text-on-surface-variant">ACCESS PROTOCOL // SOURCE YSWS</p>
		</div>

		<form method="POST" action="?/signInOAuth" use:enhance>
			<input type="hidden" name="providerId" value="hackclub" />
			<input type="hidden" name="callbackURL" value="/" />
			<Button
				type="submit"
				class="hard-shadow w-full bg-primary py-6 font-headline text-lg font-bold tracking-wider text-primary-foreground hover:bg-primary/90"
			>
				SIGN IN WITH HACK CLUB
			</Button>
		</form>

		<div class="mt-6 text-center">
			<p class="font-mono text-xs text-on-surface-variant">
				SECURE TERMINAL v1.0 <span class="blinking-cursor"></span>
			</p>
		</div>
	</div>
</div>

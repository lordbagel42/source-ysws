<script lang="ts">
	import { authClient } from '$lib/auth-client';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	let email = $state('');
	let password = $state('');
	let name = $state('');
	let isSignUp = $state(false);
	let isLoading = $state(false);
	let errorMessage = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isLoading = true;
		errorMessage = '';

		try {
			if (isSignUp) {
				const { error } = await authClient.signUp.email({
					email,
					password,
					name,
					callbackURL: '/'
				});
				if (error) errorMessage = error.message || 'Registration failed';
			} else {
				const { error } = await authClient.signIn.email({
					email,
					password,
					callbackURL: '/'
				});
				if (error) errorMessage = error.message || 'Authentication failed';
			}
		} catch (e: unknown) {
			if (e instanceof Error) {
				errorMessage = e.message;
			} else {
				errorMessage = 'An unexpected error occurred';
			}
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="flex min-h-screen items-center justify-center p-4">
	<div class="w-full max-w-md border-2 border-outline-variant bg-surface-container-low p-8">
		<div class="mb-8 text-center">
			<h1 class="crt-glow font-headline text-4xl font-black tracking-widest">
				{isSignUp ? 'REGISTER' : 'AUTHENTICATE'}
			</h1>
			<p class="mt-2 font-mono text-sm text-on-surface-variant">
				ACCESS PROTOCOL // {isSignUp ? 'ENROLLMENT' : 'SOURCE YSWS'}
			</p>
		</div>

		<form onsubmit={handleSubmit} class="flex flex-col gap-6">
			{#if isSignUp}
				<div class="space-y-2">
					<Label for="name" class="font-headline text-xs tracking-tighter text-on-surface-variant">
						OPERATOR ID
					</Label>
					<Input
						id="name"
						type="text"
						placeholder="YOUR NAME"
						bind:value={name}
						required
						class="hard-shadow bg-surface rounded-none border-2 border-outline-variant px-4 py-6 font-mono focus-visible:ring-primary"
					/>
				</div>
			{/if}

			<div class="space-y-2">
				<Label for="email" class="font-headline text-xs tracking-tighter text-on-surface-variant">
					COMMS ADDRESS
				</Label>
				<Input
					id="email"
					type="email"
					placeholder="USER@DOMAIN.COM"
					bind:value={email}
					required
					class="hard-shadow bg-surface rounded-none border-2 border-outline-variant px-4 py-6 font-mono focus-visible:ring-primary"
				/>
			</div>

			<div class="space-y-2">
				<Label
					for="password"
					class="font-headline text-xs tracking-tighter text-on-surface-variant"
				>
					SECURITY KEY
				</Label>
				<Input
					id="password"
					type="password"
					placeholder="••••••••"
					bind:value={password}
					required
					class="hard-shadow bg-surface rounded-none border-2 border-outline-variant px-4 py-6 font-mono focus-visible:ring-primary"
				/>
			</div>

			{#if errorMessage}
				<p class="font-mono text-xs text-error">{errorMessage}</p>
			{/if}

			<Button
				type="submit"
				disabled={isLoading}
				class="hard-shadow mt-2 w-full bg-primary py-6 font-headline text-lg font-bold tracking-wider text-primary-foreground hover:bg-primary/90"
			>
				{isLoading ? 'PROCESSING...' : 'EXECUTE ACCESS'}
			</Button>
		</form>

		<div class="mt-4 flex flex-col gap-4">
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t border-outline-variant"></span>
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-surface-container-low px-2 font-mono text-on-surface-variant">OR</span>
				</div>
			</div>

			<Button
				type="button"
				onclick={async () => {
					await authClient.signIn.social({
						provider: 'hackclub',
						callbackURL: '/'
					});
				}}
				class="hard-shadow bg-surface w-full border-2 border-outline-variant py-6 font-headline text-sm font-bold tracking-wider text-on-surface hover:bg-surface-container"
			>
				SIGN IN WITH HACK CLUB
			</Button>

			<button
				type="button"
				onclick={() => {
					isSignUp = !isSignUp;
					errorMessage = '';
				}}
				class="font-mono text-xs text-on-surface-variant underline hover:text-primary"
			>
				{isSignUp ? 'ALREADY ENROLLED? SIGN IN' : 'NEW OPERATOR? REGISTER'}
			</button>
		</div>

		<div class="mt-8 text-center">
			<p class="font-mono text-xs text-on-surface-variant">
				SECURE TERMINAL v1.1 <span class="blinking-cursor"></span>
			</p>
		</div>
	</div>
</div>

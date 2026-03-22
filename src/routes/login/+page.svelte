<script lang="ts">
	import { authClient } from '$lib/auth-client';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils';

	let email = $state('');
	let password = $state('');
	let name = $state('');
	let isSignUp = $state(false);
	let loading = $state(false);
	let errorMessage = $state('');

	async function handleAuth() {
		loading = true;
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
				if (error) errorMessage = error.message || 'Sign in failed';
			}
		} catch (e: any) {
			errorMessage = e.message || 'An unexpected error occurred';
		} finally {
			loading = false;
		}
	}
</script>

<div class="flex min-h-screen items-center justify-center p-4">
	<div class="w-full max-w-md border-2 border-outline-variant bg-surface-container-low p-8 hard-shadow">
		<div class="mb-8 text-center">
			<h1 class="crt-glow font-headline text-4xl font-black tracking-widest uppercase">
				{isSignUp ? 'REGISTER' : 'AUTHENTICATE'}
			</h1>
			<p class="mt-2 font-mono text-sm text-on-surface-variant uppercase">
				ACCESS PROTOCOL // SOURCE YSWS
			</p>
		</div>

		<div class="flex flex-col gap-6">
			<form
				onsubmit={(e) => {
					e.preventDefault();
					handleAuth();
				}}
				class="flex flex-col gap-4"
			>
				{#if isSignUp}
					<div class="flex flex-col gap-1.5">
						<Label for="name" class="font-mono text-xs uppercase text-on-surface-variant">Identity Name</Label>
						<Input
							id="name"
							type="text"
							placeholder="JANE DOE"
							bind:value={name}
							required
							class="border-outline-variant bg-surface-container focus:ring-primary"
						/>
					</div>
				{/if}

				<div class="flex flex-col gap-1.5">
					<Label for="email" class="font-mono text-xs uppercase text-on-surface-variant">Comms Address (Email)</Label>
					<Input
						id="email"
						type="email"
						placeholder="OPERATOR@HACKCLUB.COM"
						bind:value={email}
						required
						class="border-outline-variant bg-surface-container focus:ring-primary"
					/>
				</div>

				<div class="flex flex-col gap-1.5">
					<Label for="password" class="font-mono text-xs uppercase text-on-surface-variant">Security Key (Password)</Label>
					<Input
						id="password"
						type="password"
						placeholder="••••••••"
						bind:value={password}
						required
						class="border-outline-variant bg-surface-container focus:ring-primary"
					/>
				</div>

				{#if errorMessage}
					<p class="font-mono text-xs text-destructive uppercase animate-pulse">
						ERROR: {errorMessage}
					</p>
				{/if}

				<Button
					type="submit"
					disabled={loading}
					class="hard-shadow mt-2 bg-primary py-6 font-headline text-lg font-bold tracking-wider text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
				>
					{loading ? 'PROCESSING...' : isSignUp ? 'INITIALIZE ACCOUNT' : 'EXECUTE SIGN IN'}
				</Button>
			</form>

			<div class="relative flex items-center py-2">
				<div class="flex-grow border-t border-outline-variant"></div>
				<span class="mx-4 flex-shrink font-mono text-[10px] text-on-surface-variant uppercase">OR USE EXTERNAL PROTOCOL</span>
				<div class="flex-grow border-t border-outline-variant"></div>
			</div>

			<Button
				type="button"
				variant="outline"
				onclick={async () => {
					await authClient.signIn.social({
						provider: 'hackclub',
						callbackURL: '/'
					});
				}}
				class="hard-shadow border-outline-variant py-6 font-headline text-lg font-bold tracking-wider hover:bg-surface-container-high"
			>
				SIGN IN WITH HACK CLUB
			</Button>

			<button
				type="button"
				onclick={() => {
					isSignUp = !isSignUp;
					errorMessage = '';
				}}
				class="font-mono text-xs text-on-surface-variant uppercase transition-colors hover:text-primary"
			>
				{isSignUp ? 'Already registered? Return to login' : 'New operator? Register account'}
			</button>
		</div>

		<div class="mt-8 text-center">
			<p class="font-mono text-[10px] text-on-surface-variant/60">
				SECURE TERMINAL v1.1 // NODE_STATUS: ONLINE <span class="blinking-cursor"></span>
			</p>
		</div>
	</div>
</div>

<style>
	.blinking-cursor {
		display: inline-block;
		width: 8px;
		height: 2px;
		background-color: currentColor;
		margin-left: 2px;
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		from, to { opacity: 1; }
		50% { opacity: 0; }
	}
</style>

<script lang="ts">
	import { authClient } from '$lib/auth-client';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	let email = $state('');
	let password = $state('');
	let isLoading = $state(false);
	let error = $state('');

	const handleEmailLogin = async (e: Event) => {
		e.preventDefault();
		isLoading = true;
		error = '';

		try {
			const { error: loginError } = await authClient.signIn.email({
				email,
				password,
				callbackURL: '/'
			});

			if (loginError) {
				error = loginError.message || 'Login failed';
			}
		} catch {
			error = 'An unexpected error occurred';
		} finally {
			isLoading = false;
		}
	};

	const handleHCA = async () => {
		isLoading = true;
		try {
			await authClient.signIn.oauth2({
				providerId: 'hackclub',
				callbackURL: '/'
			});
		} catch {
			error = 'Failed to redirect to Hack Club Auth';
			isLoading = false;
		}
	};
</script>

<div class="flex min-h-screen items-center justify-center bg-background px-6">
	<Card.Root class="w-full max-w-md border-2 border-outline-variant bg-surface-container-low shadow-none">
		<Card.Header class="border-b-2 border-outline-variant p-6">
			<Card.Title class="font-headline text-3xl font-black tracking-tighter text-primary-container">
				LOGIN_TO_SOURCE
			</Card.Title>
			<p class="font-label text-xs uppercase tracking-widest text-outline">
				AUTHENTICATION_REQUIRED // OPERATOR_CREDENTIALS
			</p>
		</Card.Header>
		<Card.Content class="p-8 space-y-8">
			<form onsubmit={handleEmailLogin} class="space-y-6">
				<div class="space-y-2">
					<Label for="email" class="font-label text-[10px] font-bold uppercase tracking-widest text-outline">
						EMAIL_ADDRESS
					</Label>
					<Input
						id="email"
						type="email"
						placeholder="OPERATOR@HACKCLUB.COM"
						bind:value={email}
						class="bg-surface-container-lowest border-2 border-outline-variant font-mono text-xs focus:border-primary-container"
						required
					/>
				</div>
				<div class="space-y-2">
					<Label for="password" class="font-label text-[10px] font-bold uppercase tracking-widest text-outline">
						ACCESS_KEY
					</Label>
					<Input
						id="password"
						type="password"
						placeholder="********"
						bind:value={password}
						class="bg-surface-container-lowest border-2 border-outline-variant font-mono text-xs focus:border-primary-container"
						required
					/>
				</div>

				{#if error}
					<p class="text-xs font-bold text-error uppercase tracking-widest">{error}</p>
				{/if}

				<Button
					type="submit"
					class="w-full bg-primary-container text-on-primary font-headline font-black uppercase tracking-widest hover:bg-primary-fixed-dim"
					disabled={isLoading}
				>
					{isLoading ? 'AUTHENTICATING...' : 'INITIALIZE_SESSION'}
				</Button>
			</form>

			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t-2 border-outline-variant"></span>
				</div>
				<div class="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.3em] text-outline">
					<span class="bg-surface-container-low px-4">OR_USE_SSO</span>
				</div>
			</div>

			<Button
				onclick={handleHCA}
				disabled={isLoading}
				variant="outline"
				class="w-full border-2 border-primary text-primary font-headline font-black uppercase tracking-widest hover:bg-primary-container hover:text-on-primary transition-all"
			>
				SIGN_IN_WITH_HACK_CLUB
			</Button>
		</Card.Content>
	</Card.Root>
</div>

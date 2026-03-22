<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import { Button } from '$lib/components/ui/button';

	let email = $state('');
	let otp = $state('');
	let step = $state<'email' | 'otp'>('email');
	let loading = $state(false);
	let error = $state('');
	let success = $state('');

	async function sendOtp() {
		error = '';
		success = '';
		loading = true;
		try {
			const res = await authClient.emailOtp.sendVerificationOtp({ email, type: 'sign-in' });
			if (res.error) {
				error = res.error.message ?? 'Failed to send OTP';
			} else {
				success = 'OTP SENT — CHECK YOUR INBOX';
				step = 'otp';
			}
		} catch (e) {
			error = 'NETWORK ERROR — TRY AGAIN';
		} finally {
			loading = false;
		}
	}

	async function verifyOtp() {
		error = '';
		success = '';
		loading = true;
		try {
			const res = await authClient.signIn.emailOtp({ email, otp });
			if (res.error) {
				error = res.error.message ?? 'Invalid OTP';
			} else {
				await goto('/');
			}
		} catch (e) {
			error = 'NETWORK ERROR — TRY AGAIN';
		} finally {
			loading = false;
		}
	}
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

			<div class="flex items-center gap-3">
				<div class="h-px flex-1 bg-outline-variant"></div>
				<span class="font-mono text-xs text-on-surface-variant">// OR //</span>
				<div class="h-px flex-1 bg-outline-variant"></div>
			</div>

			{#if step === 'email'}
				<form
					class="flex flex-col gap-3"
					onsubmit={(e) => {
						e.preventDefault();
						sendOtp();
					}}
				>
					<label class="flex flex-col gap-1">
						<span class="font-mono text-xs font-bold tracking-wider text-on-surface-variant">
							EMAIL ADDRESS
						</span>
						<input
							type="email"
							bind:value={email}
							required
							placeholder="agent@hackclub.com"
							class="border-2 border-outline-variant bg-surface-container-low px-4 py-3 font-mono text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none"
						/>
					</label>
					<Button
						type="submit"
						disabled={loading || !email}
						class="hard-shadow w-full bg-secondary py-5 font-headline text-base font-bold tracking-wider text-secondary-foreground hover:bg-secondary/90"
					>
						{loading ? 'TRANSMITTING...' : 'SEND OTP CODE'}
					</Button>
				</form>
			{:else}
				<form
					class="flex flex-col gap-3"
					onsubmit={(e) => {
						e.preventDefault();
						verifyOtp();
					}}
				>
					<label class="flex flex-col gap-1">
						<span class="font-mono text-xs font-bold tracking-wider text-on-surface-variant">
							ENTER OTP CODE
						</span>
						<p class="font-mono text-xs text-on-surface-variant">
							SENT TO {email}
						</p>
						<input
							type="text"
							bind:value={otp}
							required
							placeholder="000000"
							inputmode="numeric"
							autocomplete="one-time-code"
							class="border-2 border-outline-variant bg-surface-container-low px-4 py-3 text-center font-mono text-lg tracking-[0.5em] text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none"
						/>
					</label>
					<Button
						type="submit"
						disabled={loading || !otp}
						class="hard-shadow w-full bg-secondary py-5 font-headline text-base font-bold tracking-wider text-secondary-foreground hover:bg-secondary/90"
					>
						{loading ? 'VERIFYING...' : 'VERIFY & LOGIN'}
					</Button>
					<button
						type="button"
						onclick={() => {
							step = 'email';
							otp = '';
							error = '';
							success = '';
						}}
						class="font-mono text-xs text-on-surface-variant underline hover:text-on-surface"
					>
						← BACK TO EMAIL
					</button>
				</form>
			{/if}

			{#if error}
				<p class="font-mono text-xs font-bold text-error">{error}</p>
			{/if}
			{#if success}
				<p class="font-mono text-xs font-bold text-primary">{success}</p>
			{/if}
		</div>

		<div class="mt-6 text-center">
			<p class="font-mono text-xs text-on-surface-variant">
				SECURE TERMINAL v1.0 <span class="blinking-cursor"></span>
			</p>
		</div>
	</div>
</div>

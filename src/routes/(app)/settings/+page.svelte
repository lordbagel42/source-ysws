<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import { toast } from 'svelte-sonner';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { KeyRound, Plus, Trash2, Github, Link } from 'lucide-svelte';

	let { data } = $props();

	let newName = $state(data.user.name ?? '');
	let savingProfile = $state(false);
	let addingPasskey = $state(false);
	let passkeyName = $state('');
	let showPasskeyInput = $state(false);
	let deletingId = $state<string | null>(null);

	async function saveProfile() {
		if (!newName.trim()) {
			toast.error('Name cannot be empty');
			return;
		}
		savingProfile = true;
		try {
			await authClient.updateUser({ name: newName.trim() });
			toast.success('Profile updated');
			await invalidateAll();
		} catch {
			toast.error('Failed to update profile');
		} finally {
			savingProfile = false;
		}
	}

	async function addPasskey() {
		if (!passkeyName.trim()) {
			toast.error('Please enter a name for the passkey');
			return;
		}
		addingPasskey = true;
		try {
			await authClient.passkey.addPasskey({ name: passkeyName.trim() });
			toast.success('Passkey registered');
			passkeyName = '';
			showPasskeyInput = false;
			await invalidateAll();
		} catch {
			toast.error('Failed to register passkey');
		} finally {
			addingPasskey = false;
		}
	}

	async function deletePasskey(id: string) {
		if (!confirm('Remove this passkey? You cannot undo this action.')) return;
		deletingId = id;
		try {
			await authClient.passkey.deletePasskey({ id });
			toast.success('Passkey removed');
			await invalidateAll();
		} catch {
			toast.error('Failed to remove passkey');
		} finally {
			deletingId = null;
		}
	}

	function formatDate(date: Date | string | null | undefined): string {
		if (!date) return '—';
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	function providerLabel(providerId: string): string {
		const labels: Record<string, string> = {
			github: 'GitHub',
			credential: 'Email / Password'
		};
		return labels[providerId] ?? providerId;
	}
</script>

<!-- Page Header -->
<div class="mb-8">
	<h1 class="font-headline text-2xl font-black tracking-tight text-on-surface uppercase">
		Settings
	</h1>
	<p class="mt-1 font-mono text-xs tracking-wider text-on-surface-variant uppercase">
		SYS_CONFIG / USER_PROFILE
	</p>
</div>

<div class="mx-auto max-w-2xl space-y-8">
	<!-- Profile Section -->
	<Card>
		<CardHeader>
			<CardTitle class="font-headline text-sm font-bold tracking-[0.2em] text-primary uppercase">
				Profile
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-6">
			<div class="flex items-center gap-4">
				{#if data.user.image}
					<img
						src={data.user.image}
						alt={data.user.name ?? 'User'}
						class="h-16 w-16 border-2 border-primary"
					/>
				{:else}
					<div
						class="flex h-16 w-16 items-center justify-center border-2 border-primary bg-surface-container font-mono text-xl text-primary"
					>
						{(data.user.name ?? '?').charAt(0).toUpperCase()}
					</div>
				{/if}
				<div>
					<p class="font-mono text-sm text-on-surface">{data.user.name ?? 'User'}</p>
					<p class="font-mono text-xs text-on-surface-variant">{data.user.email}</p>
				</div>
			</div>

			<Separator />

			<div class="space-y-3">
				<Label for="display-name" class="font-mono text-xs tracking-wider uppercase">
					Display Name
				</Label>
				<Input
					id="display-name"
					bind:value={newName}
					placeholder="Your display name"
					class="font-mono"
				/>
			</div>

			<Button onclick={saveProfile} disabled={savingProfile} class="font-mono text-xs uppercase">
				{savingProfile ? 'Saving...' : 'Save'}
			</Button>
		</CardContent>
	</Card>

	<!-- Passkeys Section -->
	<Card>
		<CardHeader>
			<CardTitle class="font-headline text-sm font-bold tracking-[0.2em] text-primary uppercase">
				<span class="flex items-center gap-2">
					<KeyRound size={16} />
					Passkeys
				</span>
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-4">
			{#if data.passkeys.length === 0}
				<p class="font-mono text-xs text-on-surface-variant">No passkeys registered yet.</p>
			{:else}
				<div class="space-y-3">
					{#each data.passkeys as pk (pk.id)}
						<div class="flex items-center justify-between border border-outline-variant px-4 py-3">
							<div>
								<p class="font-mono text-sm text-on-surface">{pk.name ?? 'Unnamed passkey'}</p>
								<p class="font-mono text-[10px] text-on-surface-variant">
									Added {formatDate(pk.createdAt)}
								</p>
							</div>
							<Button
								variant="ghost"
								size="icon"
								onclick={() => deletePasskey(pk.id)}
								disabled={deletingId === pk.id}
								class="text-on-surface-variant hover:text-destructive"
							>
								<Trash2 size={16} />
							</Button>
						</div>
					{/each}
				</div>
			{/if}

			<Separator />

			{#if showPasskeyInput}
				<div class="space-y-3">
					<Label for="passkey-name" class="font-mono text-xs tracking-wider uppercase">
						Passkey Name
					</Label>
					<Input
						id="passkey-name"
						bind:value={passkeyName}
						placeholder="e.g. MacBook Pro, YubiKey"
						class="font-mono"
					/>
					<div class="flex gap-2">
						<Button
							onclick={addPasskey}
							disabled={addingPasskey}
							class="font-mono text-xs uppercase"
						>
							{addingPasskey ? 'Registering...' : 'Register'}
						</Button>
						<Button
							variant="outline"
							onclick={() => {
								showPasskeyInput = false;
								passkeyName = '';
							}}
							class="font-mono text-xs uppercase"
						>
							Cancel
						</Button>
					</div>
				</div>
			{:else}
				<Button
					variant="outline"
					onclick={() => (showPasskeyInput = true)}
					class="font-mono text-xs uppercase"
				>
					<Plus size={14} class="mr-2" />
					Add Passkey
				</Button>
			{/if}
		</CardContent>
	</Card>

	<!-- Linked Accounts Section -->
	<Card>
		<CardHeader>
			<CardTitle class="font-headline text-sm font-bold tracking-[0.2em] text-primary uppercase">
				<span class="flex items-center gap-2">
					<Link size={16} />
					Linked Accounts
				</span>
			</CardTitle>
		</CardHeader>
		<CardContent>
			{#if data.accounts.length === 0}
				<p class="font-mono text-xs text-on-surface-variant">No linked accounts.</p>
			{:else}
				<div class="space-y-3">
					{#each data.accounts as acct (acct.providerId)}
						<div class="flex items-center justify-between border border-outline-variant px-4 py-3">
							<div class="flex items-center gap-3">
								{#if acct.providerId === 'github'}
									<Github size={18} class="text-on-surface-variant" />
								{:else}
									<Link size={18} class="text-on-surface-variant" />
								{/if}
								<div>
									<p class="font-mono text-sm text-on-surface">
										{providerLabel(acct.providerId)}
									</p>
									<p class="font-mono text-[10px] text-on-surface-variant">
										Linked {formatDate(acct.createdAt)}
									</p>
								</div>
							</div>
							<span class="font-mono text-[10px] tracking-wider text-primary uppercase">
								Connected
							</span>
						</div>
					{/each}
				</div>
			{/if}
		</CardContent>
	</Card>
</div>

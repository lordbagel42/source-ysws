<script lang="ts">
	const rewards = [
		{
			id: '#X992-01',
			name: 'LILYGO_T-DECK_RESYNC',
			status: 'COMPLETE',
			statusClass: 'bg-[#00530e] text-primary',
			progress: 100,
			value: '$275.00'
		},
		{
			id: '#X992-05',
			name: 'MESH_ROUTER_V3',
			status: 'VERIFYING',
			statusClass: 'bg-[#004f58] text-secondary',
			progress: 75,
			value: '$205.00'
		},
		{
			id: '#X993-12',
			name: 'CRYPTO_KEY_HARDWARE',
			status: 'PENDING',
			statusClass: 'bg-surface-container-highest text-foreground',
			progress: 15,
			value: '$45.00'
		}
	];
</script>

<section
	aria-label="Earned rewards"
	class="bg-surface-container-lowest px-4 py-10 md:px-6 md:py-12"
>
	<!-- Header -->
	<div class="mb-6">
		<span class="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant uppercase"
			>LEDGER_SYSTEM</span
		>
		<h2 class="font-headline text-2xl font-black tracking-tight text-foreground uppercase">
			TARGET_REWARDS
		</h2>
	</div>

	<!-- Stats -->
	<div class="mb-6 grid grid-cols-2 gap-3">
		<div class="border border-outline-variant bg-surface-container-low p-3">
			<span class="block font-mono text-[10px] text-on-surface-variant uppercase">CURRENT_RANK</span
			>
			<span class="font-mono text-sm font-bold text-primary">[ELITE_OP]</span>
		</div>
		<div class="border border-outline-variant bg-surface-container-low p-3">
			<span class="block font-mono text-[10px] text-on-surface-variant uppercase">TOTAL_BOUNTY</span
			>
			<span class="font-mono text-sm font-bold text-secondary">$1,245.00</span>
		</div>
	</div>

	<!-- Reward list (card-based instead of table for narrow column) -->
	<p class="sr-only">Reward log showing protocol completion and budget progress</p>
	<div class="space-y-3">
		{#each rewards as reward (reward.id)}
			<div
				class="border border-outline-variant bg-surface-container-low p-4 transition-colors hover:border-primary"
			>
				<div class="mb-2 flex items-center justify-between">
					<span class="font-mono text-[10px] text-primary">{reward.id}</span>
					<span class="px-2 py-0.5 text-[10px] {reward.statusClass}">{reward.status}</span>
				</div>
				<p class="mb-3 font-mono text-xs font-bold text-foreground">{reward.name}</p>
				<div class="mb-1 h-1.5 w-full bg-surface-container-high">
					<div class="h-full bg-primary" style="width: {reward.progress}%"></div>
				</div>
				<div class="flex items-center justify-between">
					<span class="font-mono text-[10px] text-on-surface-variant">{reward.progress}%</span>
					<span class="font-mono text-xs font-bold text-foreground">{reward.value}</span>
				</div>
			</div>
		{/each}
	</div>

	<button
		class="mt-4 w-full border-2 border-primary bg-primary py-2 font-mono text-xs font-bold text-primary-foreground uppercase hover:bg-primary/90"
		>CLAIM_ALL</button
	>
</section>

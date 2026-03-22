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
	class="border-t-2 border-surface-container-high bg-surface-container-lowest px-6 py-20"
>
	<div class="mx-auto max-w-7xl">
		<!-- Header row -->
		<div class="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
			<div>
				<span class="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant uppercase"
					>LEDGER_SYSTEM</span
				>
				<h2 class="font-headline text-4xl font-black tracking-tight text-foreground uppercase">
					REWARD_LOG_FILE
				</h2>
			</div>
			<div class="flex gap-8 border border-outline-variant bg-surface-container-low p-4">
				<div>
					<span class="block font-mono text-[10px] text-on-surface-variant uppercase"
						>CURRENT_RANK</span
					>
					<span class="font-mono font-bold text-primary">[ELITE_OP]</span>
				</div>
				<div>
					<span class="block font-mono text-[10px] text-on-surface-variant uppercase"
						>TOTAL_BOUNTY</span
					>
					<span class="font-mono font-bold text-secondary">$1,245.00</span>
				</div>
			</div>
		</div>

		<!-- Reward table -->
		<div class="overflow-x-auto">
			<table class="w-full border-collapse font-mono text-sm">
				<caption class="sr-only">Reward log showing protocol completion and budget progress</caption
				>
				<thead>
					<tr class="bg-surface-container-high text-left">
						<th
							scope="col"
							class="border border-outline-variant p-4 text-[10px] text-on-surface-variant uppercase"
							>ENTRY_ID</th
						>
						<th
							scope="col"
							class="border border-outline-variant p-4 text-[10px] text-on-surface-variant uppercase"
							>PROTOCOL_NAME</th
						>
						<th
							scope="col"
							class="border border-outline-variant p-4 text-[10px] text-on-surface-variant uppercase"
							>STATUS</th
						>
						<th
							scope="col"
							class="border border-outline-variant p-4 text-[10px] text-on-surface-variant uppercase"
							>BUDGET_PROGRESS</th
						>
						<th
							scope="col"
							class="border border-outline-variant p-4 text-[10px] text-on-surface-variant uppercase"
							>VALUATION</th
						>
					</tr>
				</thead>
				<tbody class="divide-y divide-outline-variant">
					{#each rewards as reward (reward.id)}
						<tr class="transition-colors hover:bg-surface-dim">
							<td class="border border-outline-variant p-4 text-primary">{reward.id}</td>
							<td class="border border-outline-variant p-4 font-bold">{reward.name}</td>
							<td class="border border-outline-variant p-4">
								<span class="px-2 py-0.5 text-[10px] {reward.statusClass}">{reward.status}</span>
							</td>
							<td class="w-1/4 border border-outline-variant p-4">
								<div class="h-2 w-full bg-surface-container-high">
									<div class="h-full bg-primary" style="width: {reward.progress}%"></div>
								</div>
							</td>
							<td class="border border-outline-variant p-4 text-right">{reward.value}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

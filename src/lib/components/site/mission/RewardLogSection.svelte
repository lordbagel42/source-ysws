<script lang="ts">
	const rewards = [
		{
			num: '01',
			name: 'LILYGO T-DECK',
			desc: 'OPEN-SOURCE HARDWARE TERMINAL',
			status: 'GUARANTEED',
			locked: false
		},
		{
			num: '02',
			name: '$275 HARDWARE BUDGET',
			desc: 'REIMBURSEMENT FOR PROJECT MATERIALS',
			status: 'AVAILABLE',
			locked: false
		},
		{
			num: '03',
			name: 'CUSTOM HARDWARE KIT',
			desc: 'REMAINING BUDGET ALLOCATION FOR TOOLS',
			status: 'AVAILABLE',
			locked: false
		},
		{
			num: '04',
			name: 'SYSTEM OVERRIDE',
			desc: 'VAL: ??? // STOCK: 00',
			status: 'LOCKED',
			locked: true
		}
	];
</script>

<section class="border-y-2 border-outline-variant bg-surface-container-lowest px-8 py-24 md:px-16">
	<div class="mx-auto max-w-6xl">
		<!-- Centered heading -->
		<div class="mb-16 text-center">
			<h2 class="mb-4 font-headline text-5xl font-black tracking-tighter uppercase md:text-7xl">
				REWARD_LOG
			</h2>
			<p class="text-[10px] tracking-widest text-on-surface-variant uppercase">
				Target mission rewards for hardware builders
			</p>
		</div>

		<!-- 2x2 grid with visible gap borders -->
		<div
			class="grid grid-cols-1 gap-px border-2 border-outline-variant bg-outline-variant md:grid-cols-2"
		>
			{#each rewards as reward (reward.num)}
				<div
					class="group flex items-center justify-between bg-background p-8 transition-colors hover:bg-surface-container-low"
					class:opacity-50={reward.locked}
				>
					<div class="flex items-center gap-6">
						<span class="font-headline text-4xl font-black text-primary group-hover:text-primary">
							{reward.num}
						</span>
						<div>
							<h3 class="font-headline text-xl font-bold uppercase">{reward.name}</h3>
							<p class="text-[10px] tracking-widest text-on-surface-variant uppercase">
								{reward.desc}
							</p>
						</div>
					</div>
					{#if reward.status === 'LOCKED'}
						<span
							class="border border-outline-variant bg-surface-container-high px-3 py-1 text-[10px] font-black text-on-surface-variant uppercase"
						>
							{reward.status}
						</span>
					{:else}
						<span
							class="bg-primary px-3 py-1 text-[10px] font-black text-primary-foreground uppercase"
						>
							{reward.status}
						</span>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

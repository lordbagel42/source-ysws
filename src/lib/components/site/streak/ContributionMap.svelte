<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	type HeatCell = { date: Date; count: number; level: 0 | 1 | 2 | 3 | 4 };

	function seededRandom(seed: number): number {
		let x = Math.sin(seed * 9301 + 49297) * 49297;
		x = Math.sin(x) * 43758.5453;
		return x - Math.floor(x);
	}

	function generateCells(): HeatCell[] {
		const cells: HeatCell[] = [];
		const today = new Date(2024, 9, 25); // 2024-10-25
		// eslint-disable-next-line svelte/prefer-svelte-reactivity -- static mock data, not reactive
		const startDate = new Date(today);
		startDate.setDate(startDate.getDate() - 363);

		for (let week = 0; week < 52; week++) {
			for (let day = 0; day < 7; day++) {
				const index = week * 7 + day;
				// eslint-disable-next-line svelte/prefer-svelte-reactivity -- static mock data
				const date = new Date(startDate);
				date.setDate(date.getDate() + index);

				const recencyBoost = week / 52;
				const rand = seededRandom(index + 42);
				const weighted = rand * (0.3 + recencyBoost * 0.7);

				let count: number;
				let level: 0 | 1 | 2 | 3 | 4;

				if (weighted < 0.25) {
					count = 0;
					level = 0;
				} else if (weighted < 0.45) {
					count = Math.floor(rand * 3) + 1;
					level = 1;
				} else if (weighted < 0.65) {
					count = Math.floor(rand * 5) + 3;
					level = 2;
				} else if (weighted < 0.85) {
					count = Math.floor(rand * 8) + 5;
					level = 3;
				} else {
					count = Math.floor(rand * 12) + 8;
					level = 4;
				}

				cells.push({ date, count, level });
			}
		}
		return cells;
	}

	const cells = generateCells();

	const months = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC'
	];

	const levelClasses: Record<number, string> = {
		0: 'bg-surface-container-highest',
		1: 'bg-[#00530e]',
		2: 'bg-[#007117]',
		3: 'bg-primary',
		4: 'bg-[#72ff70] shadow-[0_0_5px_rgba(0,255,65,0.3)]'
	};

	function formatDate(date: Date): string {
		const y = date.getFullYear();
		const m = String(date.getMonth() + 1).padStart(2, '0');
		const d = String(date.getDate()).padStart(2, '0');
		return `${y}-${m}-${d}`;
	}

	const logEntries = [
		{
			timestamp: '2024-10-24 14:32:01',
			label: 'PULL_REQUEST // PCB_V2.0_REFLOW'
		},
		{
			timestamp: '2024-10-24 11:15:44',
			label: 'GIT_COMMIT // FIX_PWM_DUTY_CYCLE'
		},
		{
			timestamp: '2024-10-23 23:59:12',
			label: 'STREAK_PRESERVED // LATE_NIGHT_SOLDER'
		}
	];
</script>

<section>
	<div class="border-2 border-outline-variant bg-surface-container-low p-8">
		<!-- Header -->
		<header
			class="mb-8 flex items-end justify-between border-b-2 border-surface-container-high pb-4"
		>
			<div>
				<span class="mb-2 block font-headline text-[10px] tracking-[0.2em] text-outline uppercase"
					>HARDWARE_&amp;_CODE_LOG // 2024_CYCLE</span
				>
				<h2 class="font-headline text-4xl font-bold tracking-tighter text-foreground uppercase">
					CONTRIBUTION_MAP
				</h2>
			</div>
			<div class="flex items-center gap-4 font-headline text-[10px] text-outline uppercase">
				<span>LESS</span>
				<div class="flex gap-1">
					<div class="h-3 w-3 bg-surface-container-highest"></div>
					<div class="h-3 w-3 bg-[#00530e]"></div>
					<div class="h-3 w-3 bg-[#007117]"></div>
					<div class="h-3 w-3 bg-primary"></div>
					<div class="h-3 w-3 bg-[#72ff70] shadow-[0_0_5px_rgba(0,255,65,0.4)]"></div>
				</div>
				<span>MORE</span>
			</div>
		</header>

		<!-- Heat Map Grid -->
		<div class="overflow-x-auto pb-4">
			<div class="min-w-[800px]">
				<!-- Month labels -->
				<div class="mb-2 ml-8 flex font-headline text-[8px] text-on-surface-variant uppercase">
					{#each months as month (month)}
						<div class="flex-1">{month}</div>
					{/each}
				</div>

				<!-- Grid area -->
				<div class="flex">
					<!-- Day labels -->
					<div
						class="mr-3 flex h-32 flex-col justify-between py-1 font-headline text-[8px] text-on-surface-variant uppercase"
					>
						<span>MON</span>
						<span>WED</span>
						<span>FRI</span>
					</div>

					<!-- Grid cells -->
					<Tooltip.Provider delayDuration={200}>
						<div
							class="h-32 flex-1"
							style="display: grid; grid-template-columns: repeat(52, 1fr); grid-template-rows: repeat(7, 1fr); grid-auto-flow: column; gap: 4px;"
						>
							{#each cells as cell, i (i)}
								<Tooltip.Root>
									<Tooltip.Trigger>
										<div
											class={levelClasses[cell.level]}
											style="aspect-ratio: 1/1; width: 100%;"
										></div>
									</Tooltip.Trigger>
									<Tooltip.Content
										class="border border-outline-variant bg-surface-container-high font-mono text-xs"
									>
										<p>{formatDate(cell.date)}: {cell.count} contributions</p>
									</Tooltip.Content>
								</Tooltip.Root>
							{/each}
						</div>
					</Tooltip.Provider>
				</div>
			</div>
		</div>

		<!-- Bottom section -->
		<div class="mt-8 flex flex-col gap-8 md:flex-row">
			<!-- Left: Latest Log Inputs -->
			<div class="flex flex-1 flex-col gap-2">
				<span class="font-headline text-[10px] tracking-widest text-outline uppercase"
					>LATEST_LOG_INPUTS</span
				>
				<div
					class="space-y-2 border border-outline-variant bg-surface-dim p-4 font-mono text-[10px]"
				>
					{#each logEntries as entry (entry.timestamp)}
						<div class="flex justify-between border-b border-outline-variant/20 pb-1">
							<span class="text-primary">{entry.timestamp}</span>
							<span class="text-on-surface">{entry.label}</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right: Stats Summary -->
			<div class="flex flex-col justify-between md:w-64">
				<div>
					<span class="mb-2 block font-headline text-[10px] tracking-widest text-outline uppercase"
						>STATS_SUMMARY</span
					>
					<div class="mb-1 flex justify-between">
						<span class="text-xs text-outline uppercase">TOTAL_COMMITS</span>
						<span class="text-xs font-bold text-foreground">1,204</span>
					</div>
					<div class="mb-1 flex justify-between">
						<span class="text-xs text-outline uppercase">MAX_STREAK</span>
						<span class="text-xs font-bold text-foreground">42_DAYS</span>
					</div>
					<div class="flex justify-between">
						<span class="text-xs text-outline uppercase">CONSISTENCY</span>
						<span class="text-xs font-bold text-primary">74.2%</span>
					</div>
				</div>
				<button
					class="mt-4 border-2 border-primary py-2 font-headline text-xs font-bold tracking-widest text-primary transition-all hover:bg-surface-container-low"
				>
					DOWNLOAD_LOGS.EXE
				</button>
			</div>
		</div>
	</div>
</section>

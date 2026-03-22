<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

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
	const days = ['MON', 'WED', 'FRI'];

	// Generate heatmap data from actual activity
	const getHeatMapColor = (count: number) => {
		if (count >= 5) return 'bg-primary-fixed shadow-[0_0_5px_rgba(0,255,65,0.4)]';
		if (count >= 3) return 'bg-primary-container';
		if (count >= 2) return 'bg-[#007117]';
		if (count >= 1) return 'bg-[#00530e]';
		return 'bg-surface-container-highest';
	};

	// Generate a grid for the last 52 weeks (364 days)
	const heatMapData = $derived.by(() => {
		const today = new Date();
		const startDate = new Date();
		startDate.setDate(today.getDate() - 363); // Start 52 weeks ago

		return Array.from({ length: 364 }, (_, i) => {
			const currentDate = new Date(startDate);
			currentDate.setDate(startDate.getDate() + i);
			const dateStr = currentDate.toISOString().split('T')[0];

			const entry = data.heatmap.find((h) => {
				const hDate = new Date(h.date).toISOString().split('T')[0];
				return hDate === dateStr;
			});
			const count = entry ? Number(entry.count) : 0;

			return getHeatMapColor(count);
		});
	});

	let efficiency = $derived(Math.min(100, (data.streak.currentStreak / 30) * 100));
</script>

<svelte:head>
	<title>YSWS_CONSOLE_V1.0 | COMBUSTION_STREAK</title>
</svelte:head>

<!-- Hero Streak Section -->
<section class="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
	<Card.Root
		class="relative overflow-hidden border-2 border-outline-variant bg-surface-container-low p-8 shadow-none lg:col-span-8"
	>
		<div class="pointer-events-none absolute top-0 right-0 p-4 opacity-10">
			<span class="font-headline text-[120px] leading-none font-black"
				>0X{data.streak.currentStreak.toString(16).toUpperCase().padStart(2, '0')}</span
			>
		</div>
		<header class="mb-8 border-b-2 border-surface-container-high pb-4">
			<span class="mb-2 block font-label text-[10px] tracking-[0.2em] text-outline uppercase"
				>SYSTEM_METRIC // TEMPORAL_STREAK</span
			>
			<h1
				class="crt-glow font-headline text-6xl leading-none font-black text-primary-container md:text-8xl"
			>
				COMBUSTION_STREAK
			</h1>
		</header>
		<div class="flex flex-col items-end gap-12 md:flex-row">
			<div class="flex flex-col">
				<span
					class="font-headline text-[64px] leading-none font-black text-primary-container md:text-[120px]"
					>{data.streak.currentStreak}</span
				>
				<span class="font-headline text-xl font-bold tracking-widest text-primary">DAYS_ACTIVE</span
				>
			</div>
			<div class="w-full flex-1">
				<div class="mb-4 flex items-center justify-between">
					<span class="font-label text-[10px] tracking-widest text-outline uppercase"
						>CURRENT_VELOCITY</span
					>
					<span class="font-headline text-sm font-bold text-primary-container"
						>{efficiency.toFixed(0)}%_EFFICIENCY</span
					>
				</div>
				<div class="h-8 border-2 border-outline-variant bg-surface-container-lowest p-1">
					<Progress
						value={efficiency}
						class="h-full bg-primary-container shadow-[0_0_15px_rgba(0,255,65,0.4)]"
					/>
				</div>
				<div class="mt-2 flex justify-between">
					<span class="font-label text-[8px] text-outline-variant">IDLE</span>
					<span class="font-label text-[8px] text-outline-variant">OVERLOAD</span>
				</div>
			</div>
		</div>
	</Card.Root>

	<div class="flex flex-col gap-8 lg:col-span-4">
		<Card.Root
			class="flex flex-1 flex-col justify-center border-2 border-dashed border-error bg-surface-container-low p-6 shadow-none"
		>
			<div class="mb-4 flex items-center gap-3">
				<span class="material-symbols-outlined text-4xl text-error">warning</span>
				<h2 class="font-headline text-xl font-black tracking-tight text-error">CRITICAL_WARNING</h2>
			</div>
			<p class="mb-4 font-headline text-2xl leading-tight font-bold text-on-background uppercase">
				DON'T_BREAK_THE_CHAIN
			</p>
			<p class="font-body text-xs leading-relaxed text-outline">
				System integrity depends on continuous integration. Maintain your streak sequence to
				stabilize the core.
			</p>
		</Card.Root>
		<Card.Root
			class="border-2 border-primary-fixed bg-primary-container p-6 text-on-primary shadow-none"
		>
			<div class="mb-6 flex items-start justify-between">
				<span class="font-label text-[10px] font-bold tracking-widest uppercase"
					>NEXT_MILESTONE</span
				>
				<span class="material-symbols-outlined">trending_up</span>
			</div>
			<p class="mb-2 font-headline text-3xl leading-none font-black">21_DAYS</p>
			<p class="font-headline text-xs font-bold tracking-widest">"THE_HABIT_STABILIZER"</p>
		</Card.Root>
	</div>
</section>

<!-- Heat Map Terminal Section -->
<section class="mb-12 border-2 border-outline-variant bg-surface-container-low p-8">
	<header class="mb-8 flex items-end justify-between border-b-2 border-surface-container-high pb-4">
		<div>
			<span class="mb-2 block font-label text-[10px] tracking-[0.2em] text-outline uppercase"
				>HARDWARE_&_CODE_LOG // 2024_CYCLE</span
			>
			<h2 class="font-headline text-4xl font-bold tracking-tighter text-on-background uppercase">
				CONTRIBUTION_MAP
			</h2>
		</div>
		<div class="flex items-center gap-4 font-label text-[10px] text-outline uppercase">
			<span>LESS</span>
			<div class="flex gap-1">
				<div class="h-3 w-3 bg-surface-container-highest"></div>
				<div class="h-3 w-3 bg-[#00530e]"></div>
				<div class="h-3 w-3 bg-[#007117]"></div>
				<div class="h-3 w-3 bg-primary-container"></div>
				<div class="h-3 w-3 bg-primary-fixed shadow-[0_0_5px_rgba(0,255,65,0.4)]"></div>
			</div>
			<span>MORE</span>
		</div>
	</header>

	<div class="overflow-x-auto pb-4">
		<div class="min-w-[800px]">
			<div class="mb-2 ml-8 flex font-label text-[8px] text-outline-variant uppercase">
				{#each months as month (month)}
					<div class="flex-1">{month}</div>
				{/each}
			</div>
			<div class="flex">
				<div
					class="mr-3 flex h-32 flex-col justify-between py-1 font-label text-[8px] text-outline-variant uppercase"
				>
					{#each days as day (day)}
						<span>{day}</span>
					{/each}
				</div>
				<div class="grid h-32 flex-1 grid-flow-col grid-rows-7 gap-1">
					{#each heatMapData as color, i (i)}
						<div class="aspect-square w-full {color}"></div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="mt-8 flex flex-col gap-8 md:flex-row">
		<div class="flex flex-1 flex-col gap-2">
			<span class="font-label text-[10px] tracking-widest text-outline uppercase"
				>LATEST_LOG_INPUTS</span
			>
			<Card.Root
				class="min-h-[150px] space-y-2 border border-outline-variant bg-surface-container-lowest p-4 font-mono text-[10px] shadow-none"
			>
				{#if data.logs.length === 0}
					<p class="text-outline uppercase">No activity logged yet.</p>
				{:else}
					{#each data.logs as log (log.id)}
						<div class="flex justify-between border-b border-outline-variant/20 pb-1">
							<span class="text-primary-container"
								>{new Date(log.timestamp).toISOString().replace('T', ' ').split('.')[0]}</span
							>
							<span class="text-on-surface">{log.activityType} // {log.description || 'N/A'}</span>
						</div>
					{/each}
				{/if}
			</Card.Root>
		</div>
		<div class="flex flex-col justify-between md:w-64">
			<div>
				<span class="mb-2 block font-label text-[10px] tracking-widest text-outline uppercase"
					>STATS_SUMMARY</span
				>
				<div class="mb-1 flex justify-between">
					<span class="text-xs text-outline uppercase">TOTAL_LOGS</span>
					<span class="text-xs font-bold text-on-background">{data.logs.length}</span>
				</div>
				<div class="mb-1 flex justify-between">
					<span class="text-xs text-outline uppercase">MAX_STREAK</span>
					<span class="text-xs font-bold text-on-background">{data.streak.maxStreak}_DAYS</span>
				</div>
				<div class="flex justify-between">
					<span class="text-xs text-outline uppercase">CONSISTENCY</span>
					<span class="text-xs font-bold text-primary-container"
						>{((data.heatmap.length / 30) * 100).toFixed(1)}%</span
					>
				</div>
			</div>
			<Button
				variant="outline"
				class="mt-4 border-2 border-primary bg-transparent py-2 font-label text-xs font-bold tracking-widest text-primary uppercase shadow-none transition-all hover:bg-surface-container-low"
			>
				DOWNLOAD_LOGS.EXE
			</Button>
		</div>
	</div>
</section>

<!-- Data Visualization Grid -->
<section class="grid grid-cols-1 gap-6 md:grid-cols-3">
	<!-- Hardware Temp -->
	<Card.Root class="border-2 border-outline-variant bg-surface-container-low p-6 shadow-none">
		<span class="mb-4 block font-label text-[10px] tracking-widest text-outline uppercase"
			>CORE_STREAK_HEAT</span
		>
		<div class="flex items-center justify-between">
			<div>
				<p class="font-headline text-4xl font-black text-on-background">
					{40 + (data.streak.currentStreak * 0.2).toFixed(1)}°C
				</p>
				<p class="font-label text-[10px] tracking-widest text-primary-container uppercase">
					THERMAL_STABLE
				</p>
			</div>
			<div class="relative h-16 w-16">
				<div class="absolute inset-0 rounded-full border-2 border-outline-variant"></div>
				<div
					class="absolute inset-1 animate-pulse rounded-full border border-primary-container"
				></div>
			</div>
		</div>
	</Card.Root>
	<!-- Build Count -->
	<Card.Root class="border-2 border-outline-variant bg-surface-container-low p-6 shadow-none">
		<span class="mb-4 block font-label text-[10px] tracking-widest text-outline uppercase"
			>BUILDS_THIS_CYCLE</span
		>
		<div class="mb-2 flex h-12 items-end gap-1">
			<div class="h-[20%] w-full bg-[#00530e]"></div>
			<div class="h-[40%] w-full bg-[#007117]"></div>
			<div class="h-[90%] w-full bg-primary-container"></div>
			<div class="h-[30%] w-full bg-[#00530e]"></div>
			<div class="h-[60%] w-full bg-[#007117]"></div>
			<div class="h-full w-full bg-primary-fixed shadow-[0_0_10px_rgba(0,255,65,0.4)]"></div>
			<div class="h-[10%] w-full bg-surface-container-highest"></div>
		</div>
		<p class="font-headline text-xs font-bold text-on-background uppercase">ACTIVITY_STABILIZED</p>
	</Card.Root>
	<!-- Operator Status -->
	<Card.Root
		class="flex flex-col justify-between border-2 border-outline-variant bg-surface-container-low p-6 shadow-none"
	>
		<div>
			<span class="mb-2 block font-label text-[10px] tracking-widest text-outline uppercase"
				>OPERATOR_LOAD</span
			>
			<div class="flex items-center justify-between">
				<span class="font-headline text-2xl font-black text-on-background">OPTIMAL</span>
				<div class="flex gap-1">
					<div class="h-4 w-2 bg-primary-container"></div>
					<div class="h-4 w-2 bg-primary-container"></div>
					<div class="h-4 w-2 bg-primary-container"></div>
					<div class="h-4 w-2 bg-primary-container"></div>
				</div>
			</div>
		</div>
		<p class="mt-2 text-right font-body text-[9px] text-outline italic">
			// ADVICE: SYSTEM_STATUS_STABLE
		</p>
	</Card.Root>
</section>

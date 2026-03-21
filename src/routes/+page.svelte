<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const rewards = [
		{
			id: '01',
			title: 'LILYGO T-DECK',
			desc: 'OPEN-SOURCE HARDWARE TERMINAL',
			status: 'GUARANTEED'
		},
		{
			id: '02',
			title: '$275 HARDWARE BUDGET',
			desc: 'REIMBURSEMENT FOR PROJECT MATERIALS',
			status: 'AVAILABLE'
		},
		{
			id: '03',
			title: 'CUSTOM HARDWARE KIT',
			desc: 'REMAINING BUDGET ALLOCATION FOR TOOLS',
			status: 'AVAILABLE'
		},
		{ id: '04', title: 'SYSTEM OVERRIDE', desc: 'VAL: ??? // STOCK: 00', status: 'LOCKED' }
	];

	let isInitializing = $state(false);
</script>

<section
	class="relative flex min-h-[85vh] flex-col justify-center overflow-hidden border-b-2 border-outline-variant px-2 md:px-10"
>
	<div
		class="pointer-events-none absolute top-10 right-10 font-headline text-[120px] leading-none font-black text-surface-container-high opacity-20 select-none"
	>
		0xSOURCE
	</div>
	<div class="z-10 max-w-4xl">
		<Card.Root
			class="mb-4 inline-block border-2 border-outline-variant bg-surface-container-high px-3 py-1 shadow-none"
		>
			<span class="font-label text-xs tracking-widest text-primary uppercase"
				>SYSTM_INITIALIZED //</span
			>
		</Card.Root>
		<h1
			class="mb-8 font-headline text-5xl leading-[0.85] font-black tracking-tighter text-on-surface md:text-9xl"
		>
			SOURCE<br class="hidden md:block" /> BUILD <span class="text-primary-container">X</span><br />
			GET <span class="text-secondary">T-DECK + $275</span>
		</h1>
		<p
			class="mb-12 max-w-2xl border-l-4 border-primary pl-6 font-body text-xl text-on-surface-variant uppercase md:text-2xl"
		>
			BUILD AN OPEN-SOURCE ALTERNATIVE<br />GET THE HARDWARE TO BUILD IT
		</p>
		<div class="flex flex-col gap-6 sm:flex-row">
			<form
				method="POST"
				action="?/initializeBuild"
				use:enhance={() => {
					isInitializing = true;
					return async ({ update }) => {
						await update();
						isInitializing = false;
					};
				}}
			>
				<Button
					type="submit"
					disabled={isInitializing}
					class="hard-shadow border-2 border-primary-fixed bg-primary-container px-8 py-8 font-headline text-xl font-black tracking-tighter text-on-primary uppercase transition-transform hover:-translate-x-1 hover:-translate-y-1"
				>
					{isInitializing ? 'INITIALIZING...' : 'INITIALIZE_HARDWARE_BUILD'}
				</Button>
			</form>
			<div
				class="flex items-center gap-4 border-2 border-outline-variant bg-surface-container-lowest px-6 py-4"
			>
				<span class="material-symbols-outlined animate-pulse text-secondary">sensors</span>
				<span class="blinking-cursor font-label text-xs text-outline uppercase"
					>Awaiting hardware schematic</span
				>
			</div>
		</div>
	</div>
</section>

<!-- STREAK_HEAT Section -->
<section
	class="relative overflow-hidden border-b-2 border-outline-variant bg-surface-container-lowest px-2 py-24 md:px-10"
>
	<div class="scanline"></div>
	<div class="relative z-10 mx-auto max-w-6xl">
		<div class="flex flex-col items-center gap-12 lg:flex-row">
			<div class="flex-1">
				<div class="mb-4 flex items-center gap-3">
					<span class="material-symbols-outlined animate-pulse text-primary-container"
						>local_fire_department</span
					>
					<span
						class="font-label text-sm font-bold tracking-[0.3em] text-primary-container uppercase"
						>Thermal Overload Protocol</span
					>
				</div>
				<h2
					class="mb-6 font-headline text-5xl leading-none font-black tracking-tighter text-primary-container uppercase md:text-7xl"
				>
					STREAK_HEAT
				</h2>
				<p
					class="mb-8 border-l-4 border-primary-container pl-6 font-body text-xl text-on-surface-variant uppercase"
				>
					MORE CONSECUTIVE BUILD DAYS = HIGHER 'HEAT' LEVEL. DON'T LET THE CORE COOL DOWN.
				</p>
				<div class="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
					<Card.Root
						class="border-2 border-outline-variant bg-surface-container-low p-6 shadow-none transition-colors hover:border-[#ff3e00]"
					>
						<div class="mb-2 font-headline text-2xl font-black text-primary-container">
							ALGORITHM_PRIORITY
						</div>
						<p class="font-label text-xs text-outline uppercase">
							BOOST_FACTOR: +240% // POSITION: TOP_ROW
						</p>
					</Card.Root>
					<Card.Root
						class="border-2 border-outline-variant bg-surface-container-low p-6 shadow-none transition-colors hover:border-[#ff3e00]"
					>
						<div class="mb-2 font-headline text-2xl font-black text-primary-container">
							REWARD_MULTIPLIER
						</div>
						<p class="font-label text-xs text-outline uppercase">
							CURRENT_BUDGET: $275 x 2.4 = $660 MAX_POTENTIAL
						</p>
					</Card.Root>
				</div>
			</div>

			<Card.Root
				class="hard-shadow relative flex w-full flex-col items-center justify-center border-4 border-primary-container bg-surface-container-lowest p-8 shadow-none lg:w-96"
			>
				<div
					class="absolute -top-4 -left-4 bg-primary-container px-4 py-1 text-xs font-black text-black uppercase"
				>
					System Status
				</div>
				<div class="mb-8 self-start font-label text-[10px] text-outline uppercase">
					Core_Temperature_Monitoring
				</div>
				<div
					class="relative mb-8 flex h-64 w-full items-end gap-2 overflow-hidden border-2 border-outline-variant bg-surface-container-high p-4"
				>
					<div
						class="pointer-events-none absolute inset-0 flex flex-col justify-between p-2 opacity-10"
					>
						{#each Array(5) as _, i (i)}
							<div class="w-full border-b border-outline"></div>
						{/each}
					</div>
					<div class="h-1/4 flex-1 bg-[#ff3e00]"></div>
					<div class="h-2/4 flex-1 bg-[#ff3e00]"></div>
					<div class="h-3/4 flex-1 bg-[#f0ff00]"></div>
					<div class="h-full flex-1 animate-pulse bg-[#00FF41]"></div>
					<div class="h-full flex-1 bg-[#00FF41] opacity-30"></div>
					<div class="h-full flex-1 bg-[#00FF41] opacity-10"></div>
				</div>
				<div class="w-full space-y-4">
					<div class="flex items-end justify-between">
						<span class="font-label text-[10px] text-outline uppercase">Current_Thermal_Boost</span>
						<span class="font-headline text-4xl font-black text-primary-container">x2.4</span>
					</div>
					<div class="relative h-4 w-full border border-outline-variant bg-surface-container-high">
						<div class="heat-gradient h-full w-3/4"></div>
					</div>
					<div
						class="animate-pulse text-center font-label text-[10px] text-primary-container uppercase"
					>
						Optimal state: Maximum efficiency reached
					</div>
				</div>
			</Card.Root>
		</div>
	</div>
</section>

<!-- RECENT_SHIPMENTS -->
<section class="px-2 py-24 md:px-10">
	<div class="mb-12 flex items-end justify-between">
		<div>
			<span class="mb-2 block font-label text-xs tracking-widest text-outline uppercase"
				>Proof of Work</span
			>
			<h2 class="font-headline text-4xl font-black tracking-tighter uppercase md:text-6xl">
				RECENT_SHIPMENTS
			</h2>
		</div>
		<div class="hidden text-right md:block">
			<div class="font-headline text-2xl font-bold text-primary-container">
				{data.totalValidated.toLocaleString()}
			</div>
			<div class="font-label text-[10px] text-outline uppercase">Validated Shipments</div>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#if data.recentShipments.length === 0}
			<div class="col-span-full border-2 border-dashed border-outline-variant py-20 text-center">
				<p class="font-label text-xs tracking-widest text-outline uppercase">
					No validated shipments found in cycle.
				</p>
			</div>
		{:else}
			{#each data.recentShipments as item (item.id)}
				<Card.Root
					class="group border-2 border-outline-variant bg-surface-container-low p-6 shadow-none transition-colors hover:border-primary"
				>
					<div
						class="relative mb-6 aspect-video overflow-hidden border-2 border-outline-variant bg-surface-container-lowest"
					>
						{#if item.imageUrl}
							<img
								src={item.imageUrl}
								alt={item.title}
								class="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
							/>
						{:else}
							<div class="flex h-full w-full items-center justify-center bg-surface-container-high">
								<span class="material-symbols-outlined text-4xl text-outline">image</span>
							</div>
						{/if}
					</div>
					<div class="mb-4 flex items-start justify-between">
						<h3 class="font-headline text-xl font-bold uppercase">{item.title}</h3>
						<span class="material-symbols-outlined text-outline">open_in_new</span>
					</div>
					<p class="mb-6 font-body text-sm text-on-surface-variant">
						{item.description || 'No description provided.'}
					</p>
				</Card.Root>
			{/each}
		{/if}
	</div>
</section>

<!-- REWARD_LOG -->
<section class="border-y-2 border-outline-variant bg-surface-container-lowest px-2 py-24 md:px-10">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 font-headline text-5xl font-black tracking-tighter uppercase md:text-7xl">
				REWARD_LOG
			</h2>
			<p class="font-label tracking-widest text-outline uppercase">
				Target mission rewards for hardware builders
			</p>
		</div>
		<div
			class="grid grid-cols-1 gap-px border-2 border-outline-variant bg-outline-variant md:grid-cols-2"
		>
			{#each rewards as reward (reward.id)}
				<div
					class="group flex items-center justify-between bg-background p-8 transition-colors hover:bg-surface-container-low {reward.status ===
					'LOCKED'
						? 'opacity-50'
						: ''}"
				>
					<div class="flex items-center gap-6">
						<span
							class="font-headline text-4xl font-black text-outline transition-colors group-hover:text-primary-container {reward.status !==
							'LOCKED'
								? 'text-primary-container'
								: ''}">{reward.id}</span
						>
						<div>
							<h4 class="font-headline text-xl font-bold uppercase">{reward.title}</h4>
							<p class="font-label text-xs text-outline uppercase">{reward.desc}</p>
						</div>
					</div>
					<Badge
						class="px-3 py-1 text-[10px] font-black uppercase {reward.status === 'LOCKED'
							? 'border border-outline-variant bg-surface-container-high text-outline shadow-none'
							: 'bg-primary-container text-on-primary shadow-none'}"
					>
						{reward.status}
					</Badge>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Terminal Interaction -->
<section class="px-2 py-24 md:px-10">
	<Card.Root
		class="mx-auto max-w-5xl border-2 border-outline-variant bg-surface-container-lowest p-2 shadow-none md:p-4"
	>
		<div
			class="mb-2 flex items-center gap-4 border-b-2 border-outline-variant bg-surface-container-high px-4 py-2"
		>
			<div class="flex gap-2">
				<div class="h-2 w-2 rounded-full bg-error"></div>
				<div class="h-2 w-2 rounded-full bg-secondary"></div>
				<div class="h-2 w-2 rounded-full bg-primary-container"></div>
			</div>
			<span class="font-label text-[10px] tracking-widest text-outline uppercase"
				>SOURCE_OS // HARDWARE_TERMINAL</span
			>
		</div>
		<div class="space-y-2 p-6 font-headline text-sm md:text-base">
			<p class="text-primary-container">
				<span class="text-outline">guest@source:~$</span> ./verify_hardware_only.sh
			</p>
			<p class="text-on-surface">Scanning submission type...</p>
			<p class="text-on-surface">Checking bill of materials...</p>
			<p class="text-secondary">[OK] Hardware project detected.</p>
			<p class="text-secondary">[OK] Open-source schematics found.</p>
			<p class="text-on-surface">Ready to allocate LilyGO T-Deck and budget.</p>
			<div class="flex items-center gap-2 pt-4">
				<span class="text-outline">guest@source:~$</span>
				<span class="blinking-cursor font-bold text-primary-container"
					>ship --hardware --open-source</span
				>
			</div>
		</div>
	</Card.Root>
</section>

<footer
	class="mt-12 flex flex-col items-center justify-between border-t-2 border-surface-container-high bg-surface-container-lowest px-10 py-8 font-label text-[10px] tracking-[0.2em] text-primary-container uppercase md:flex-row"
>
	<div class="mb-4 font-black md:mb-0">© 2024 SOURCE_REBUILD_PROTOCOL // HACK_CLUB_YSWS</div>
	<div class="flex gap-6">
		<a href="/" class="text-surface-variant transition-colors hover:text-primary-container"
			>GITHUB</a
		>
		<a href="/" class="text-surface-variant transition-colors hover:text-primary-container"
			>DISCORD</a
		>
		<a href="/" class="text-surface-variant transition-colors hover:text-primary-container"
			>HACK_CLUB</a
		>
		<a href="/" class="text-surface-variant transition-colors hover:text-primary-container"
			>MANIFESTO</a
		>
	</div>
</footer>

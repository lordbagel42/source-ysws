<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let { totalValidated = 0, recentShipments = [] } = $props();

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
</script>

<div class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary min-h-screen">
	<!-- Main Content Canvas -->
	<main class="flex-1 h-screen overflow-y-auto bg-background">
		<!-- Hero Section -->
		<section class="min-h-[85vh] flex flex-col justify-center px-8 md:px-16 border-b-2 border-outline-variant relative overflow-hidden">
			<div class="absolute top-10 right-10 text-[120px] font-black text-surface-container-high opacity-20 pointer-events-none select-none font-headline leading-none">
				0xSOURCE
			</div>
			<div class="max-w-4xl z-10">
				<div class="mb-4 inline-block bg-surface-container-high px-3 py-1 border-2 border-outline-variant">
					<span class="text-primary font-label text-xs tracking-widest uppercase">SYSTM_INITIALIZED //</span>
				</div>
				<h1 class="text-6xl md:text-9xl font-headline font-black text-on-surface leading-[0.85] tracking-tighter mb-8">
					SOURCE<br class="hidden md:block" /> BUILD <span class="text-primary-container">X</span><br />
					GET <span class="text-secondary">T-DECK + $275</span>
				</h1>
				<p class="text-xl md:text-2xl font-body text-on-surface-variant max-w-2xl mb-12 border-l-4 border-primary pl-6 uppercase">
					BUILD AN OPEN-SOURCE ALTERNATIVE<br />GET THE HARDWARE TO BUILD IT
				</p>
				<div class="flex flex-col sm:flex-row gap-6">
					<Button
						href="/login"
						class="px-8 py-8 text-on-primary font-headline font-black text-xl hard-shadow hover:-translate-x-1 hover:-translate-y-1 transition-transform border-2 border-primary-fixed uppercase tracking-tighter bg-primary-container h-auto"
					>
						INITIALIZE_HARDWARE_BUILD
					</Button>
					<div class="flex items-center gap-4 px-6 py-4 bg-surface-container-lowest border-2 border-outline-variant">
						<span class="material-symbols-outlined text-secondary animate-pulse">sensors</span>
						<span class="text-outline font-label text-xs uppercase blinking-cursor">Awaiting hardware schematic</span>
					</div>
				</div>
			</div>
		</section>

		<!-- STREAK_HEAT / THERMAL_BOOST Section -->
		<section class="py-24 px-8 md:px-16 border-b-2 border-outline-variant bg-[#0E0E0E] relative overflow-hidden">
			<div class="scanline"></div>
			<div class="max-w-6xl mx-auto relative z-10">
				<div class="flex flex-col lg:flex-row items-center gap-12">
					<div class="flex-1">
						<div class="flex items-center gap-3 mb-4">
							<span class="material-symbols-outlined animate-pulse text-primary-container">local_fire_department</span>
							<span class="font-label text-sm tracking-[0.3em] uppercase font-bold text-primary-container">Thermal Overload Protocol</span>
						</div>
						<h2 class="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter mb-6 leading-none text-primary-container">STREAK_HEAT</h2>
						<p class="text-xl text-on-surface-variant mb-8 font-body border-l-4 pl-6 uppercase border-primary-container">
							MORE CONSECUTIVE BUILD DAYS = HIGHER 'HEAT' LEVEL. DON'T LET THE CORE COOL DOWN.
						</p>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
							<div class="p-6 border-2 border-outline-variant bg-surface-container-low hover:border-[#ff3e00] transition-colors">
								<div class="text-primary-container font-headline font-black text-2xl mb-2">ALGORITHM_PRIORITY</div>
								<p class="text-xs text-outline font-label uppercase">BOOST_FACTOR: +240% // POSITION: TOP_ROW</p>
							</div>
							<div class="p-6 border-2 border-outline-variant bg-surface-container-low hover:border-[#ff3e00] transition-colors">
								<div class="text-primary-container font-headline font-black text-2xl mb-2">REWARD_MULTIPLIER</div>
								<p class="text-xs text-outline font-label uppercase">CURRENT_BUDGET: $275 x 2.4 = $660 MAX_POTENTIAL</p>
							</div>
						</div>
					</div>
					<div class="w-full lg:w-96 flex flex-col items-center justify-center p-8 border-4 bg-surface-container-lowest hard-shadow relative border-primary-container">
						<div class="absolute -top-4 -left-4 text-black font-black px-4 py-1 text-xs uppercase bg-primary-container">System Status</div>
						<div class="text-[10px] text-outline font-label uppercase mb-8 self-start">Core_Temperature_Monitoring</div>
						<div class="relative w-full h-64 flex items-end gap-2 mb-8 bg-surface-container-high p-4 border-2 border-outline-variant overflow-hidden">
							<div class="absolute inset-0 opacity-10 pointer-events-none flex flex-col justify-between p-2">
								<div class="border-b border-outline w-full"></div>
								<div class="border-b border-outline w-full"></div>
								<div class="border-b border-outline w-full"></div>
								<div class="border-b border-outline w-full"></div>
								<div class="border-b border-outline w-full"></div>
							</div>
							<div class="flex-1 bg-[#ff3e00] h-1/4"></div>
							<div class="flex-1 bg-[#ff3e00] h-2/4"></div>
							<div class="flex-1 bg-[#f0ff00] h-3/4"></div>
							<div class="flex-1 bg-[#00FF41] h-full animate-pulse"></div>
							<div class="flex-1 bg-[#00FF41] h-full opacity-30"></div>
							<div class="flex-1 bg-[#00FF41] h-full opacity-10"></div>
						</div>
						<div class="w-full space-y-4">
							<div class="flex justify-between items-end">
								<span class="text-[10px] font-label text-outline uppercase">Current_Thermal_Boost</span>
								<span class="text-4xl font-headline font-black text-primary-container">x2.4</span>
							</div>
							<div class="w-full h-4 bg-surface-container-high border border-outline-variant relative">
								<div class="h-full heat-gradient w-3/4"></div>
							</div>
							<div class="text-[10px] font-label uppercase text-center animate-pulse text-primary-container">Optimal state: Maximum efficiency reached</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- RECENT_SHIPMENTS -->
		<section class="py-24 px-8 md:px-16">
			<div class="flex items-end justify-between mb-12">
				<div>
					<span class="text-outline font-label text-xs tracking-widest uppercase mb-2 block">Proof of Work</span>
					<h2 class="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">RECENT_SHIPMENTS</h2>
				</div>
				<div class="text-right hidden md:block">
					<div class="text-primary-container font-headline font-bold text-2xl">{totalValidated.toLocaleString()}</div>
					<div class="text-outline font-label text-[10px] uppercase">Validated Shipments</div>
				</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each recentShipments as item (item.id)}
					<Card.Root class="bg-surface-container-low border-2 border-outline-variant p-6 hover:border-primary transition-colors group shadow-none">
						<div class="aspect-video mb-6 overflow-hidden bg-surface-container-lowest border-2 border-outline-variant relative">
							{#if item.imageUrl}
								<img src={item.imageUrl} alt={item.title} class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
							{:else}
								<div class="flex h-full w-full items-center justify-center bg-surface-container-high">
									<span class="material-symbols-outlined text-4xl text-outline">image</span>
								</div>
							{/if}
						</div>
						<div class="flex justify-between items-start mb-4">
							<h3 class="font-headline font-bold text-xl uppercase">{item.title}</h3>
							<span class="material-symbols-outlined text-outline">open_in_new</span>
						</div>
						<p class="text-sm text-on-surface-variant mb-6 font-body">{item.description || 'No description provided.'}</p>
					</Card.Root>
				{/each}
			</div>
		</section>

		<!-- REWARD_LOG -->
		<section class="py-24 px-8 md:px-16 bg-surface-container-lowest border-y-2 border-outline-variant">
			<div class="max-w-6xl mx-auto">
				<div class="text-center mb-16">
					<h2 class="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter mb-4">REWARD_LOG</h2>
					<p class="text-outline font-label tracking-widest uppercase">Target mission rewards for hardware builders</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant border-2 border-outline-variant">
					{#each rewards as reward (reward.id)}
						<div class="bg-background p-8 flex items-center justify-between group hover:bg-surface-container-low transition-colors {reward.status === 'LOCKED' ? 'opacity-50' : ''}">
							<div class="flex items-center gap-6">
								<span class="text-4xl font-headline font-black text-outline group-hover:text-primary-container {reward.status !== 'LOCKED' ? 'text-primary-container' : ''}">{reward.id}</span>
								<div>
									<h4 class="text-xl font-headline font-bold uppercase">{reward.title}</h4>
									<p class="text-xs text-outline font-label uppercase">{reward.desc}</p>
								</div>
							</div>
							<Badge class="px-3 py-1 font-black text-[10px] uppercase {reward.status === 'LOCKED' ? 'bg-surface-container-high text-outline border border-outline-variant' : 'bg-primary-container text-on-primary'} shadow-none">
								{reward.status}
							</Badge>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Terminal Interaction Simulation -->
		<section class="py-24 px-8 md:px-16 overflow-hidden">
			<div class="bg-surface-container-lowest border-2 border-outline-variant p-2 md:p-4 max-w-5xl mx-auto">
				<div class="bg-surface-container-high px-4 py-2 border-b-2 border-outline-variant flex items-center gap-4">
					<div class="flex gap-2">
						<div class="w-2 h-2 rounded-full bg-error"></div>
						<div class="w-2 h-2 rounded-full bg-secondary"></div>
						<div class="w-2 h-2 rounded-full bg-primary-container"></div>
					</div>
					<span class="text-[10px] font-label text-outline uppercase tracking-widest">SOURCE_OS // HARDWARE_TERMINAL</span>
				</div>
				<div class="p-6 font-headline text-sm md:text-base space-y-2">
					<p class="text-primary-container"><span class="text-outline">guest@source:~$</span> ./verify_hardware_only.sh</p>
					<p class="text-on-surface">Scanning submission type...</p>
					<p class="text-on-surface">Checking bill of materials...</p>
					<p class="text-secondary">[OK] Hardware project detected.</p>
					<p class="text-secondary">[OK] Open-source schematics found.</p>
					<p class="text-on-surface">Ready to allocate LilyGO T-Deck and budget.</p>
					<div class="flex items-center gap-2 pt-4">
						<span class="text-outline">guest@source:~$</span>
						<span class="text-primary-container blinking-cursor font-bold">ship --hardware --open-source</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer Shell -->
		<footer class="bg-[#0E0E0E] text-[#00FF41] font-mono text-[10px] uppercase tracking-[0.2em] border-t-2 border-[#2A2A2A] py-8 px-10 flex justify-between items-center">
			<div class="flex items-center gap-8">
				<span class="font-black">© 2024 SOURCE_REBUILD_PROTOCOL // HACK_CLUB_YSWS</span>
			</div>
			<div class="flex gap-6">
				<a class="text-[#353534] hover:text-[#00FF41] transition-colors" href="#">GITHUB</a>
				<a class="text-[#353534] hover:text-[#00FF41] transition-colors" href="#">DISCORD</a>
				<a class="text-[#353534] hover:text-[#00FF41] transition-colors" href="#">HACK_CLUB</a>
				<a class="text-[#353534] hover:text-[#00FF41] transition-colors" href="#">MANIFESTO</a>
			</div>
		</footer>
	</main>
</div>

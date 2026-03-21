<section class="py-24 px-8 md:px-16 border-b-2 border-outline-variant bg-surface-container-lowest relative overflow-hidden">
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
				<!-- Heat Gauge Visual -->
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
					<div class="flex-1 bg-primary-container h-full animate-pulse"></div>
					<div class="flex-1 bg-primary-container h-full opacity-30"></div>
					<div class="flex-1 bg-primary-container h-full opacity-10"></div>
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

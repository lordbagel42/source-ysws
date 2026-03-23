<script lang="ts">
	import CoreReactor from '$lib/components/site/streak/CoreReactor.svelte';
	import ActivityTimeline from '$lib/components/site/streak/ActivityTimeline.svelte';
	import HeatCalendar from '$lib/components/site/streak/HeatCalendar.svelte';
	import StreakStats from '$lib/components/site/streak/StreakStats.svelte';
	import DailyMission from '$lib/components/site/streak/DailyMission.svelte';
</script>

<div class="space-y-8">
	<!-- Core Heat Status Banner -->
	<div class="mb-8">
		<span class="font-mono text-xs tracking-[0.2em] text-on-surface-variant uppercase"
			>SYSTEM_MONITOR</span
		>
		<h1
			class="font-headline text-3xl font-black tracking-tight text-foreground uppercase md:text-4xl"
		>
			CORE_HEAT
		</h1>
	</div>

	<CoreReactor />

	<!-- Main Content: Timeline + Heat Map -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
		<div class="lg:col-span-8">
			<ActivityTimeline />
		</div>
		<div class="lg:col-span-4">
			<HeatCalendar />
		</div>
	</div>

	<!-- Stats Cards -->
	<StreakStats />

	<!-- Daily Mission -->
	<DailyMission />
</div>

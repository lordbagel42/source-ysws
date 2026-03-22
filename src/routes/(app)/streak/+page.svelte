<script lang="ts">
	import CoreReactor from '$lib/components/site/streak/CoreReactor.svelte';
	import ActivityTimeline from '$lib/components/site/streak/ActivityTimeline.svelte';
	import HeatCalendar from '$lib/components/site/streak/HeatCalendar.svelte';
	import StreakStats from '$lib/components/site/streak/StreakStats.svelte';
	import DailyMission from '$lib/components/site/streak/DailyMission.svelte';
</script>

<div class="space-y-8">
	<!-- Core Heat Status Banner -->
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

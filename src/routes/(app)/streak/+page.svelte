<script lang="ts">
	import HeroStats from '$lib/components/site/streak/HeroStats.svelte';
	import ContributionMap from '$lib/components/site/streak/ContributionMap.svelte';
	import CommitLog from '$lib/components/site/streak/CommitLog.svelte';
	import SystemMetrics from '$lib/components/site/streak/SystemMetrics.svelte';
</script>

<div class="space-y-12">
	<HeroStats />
	<ContributionMap />
	<CommitLog />
	<SystemMetrics />
</div>

<script lang="ts">
	import PageHeader from '$lib/components/site/network/PageHeader.svelte';
	import FeaturedSubmission from '$lib/components/site/network/FeaturedSubmission.svelte';
	import ProjectGrid from '$lib/components/site/network/ProjectGrid.svelte';
	import Leaderboard from '$lib/components/site/network/Leaderboard.svelte';
	import MySubmissions from '$lib/components/site/network/MySubmissions.svelte';
</script>

<div class="space-y-12">
	<PageHeader />

	<FeaturedSubmission />

	<!-- Main content: grid + leaderboard -->
	<div class="grid grid-cols-1 gap-8 xl:grid-cols-12">
		<div class="xl:col-span-8">
			<ProjectGrid />
		</div>
		<div class="xl:col-span-4">
			<Leaderboard />
		</div>
	</div>

	<MySubmissions />
</div>

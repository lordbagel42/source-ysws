<script lang="ts">
	import HeroSection from '$lib/components/site/mission/HeroSection.svelte';
	import StreakHeatSection from '$lib/components/site/mission/StreakHeatSection.svelte';
	import RecentShipmentsSection from '$lib/components/site/mission/RecentShipmentsSection.svelte';
	import RewardLogSection from '$lib/components/site/mission/RewardLogSection.svelte';
	import TerminalWindow from '$lib/components/site/mission/TerminalWindow.svelte';
	import Footer from '$lib/components/site/Footer.svelte';
</script>

<main id="main-content" class="space-y-0">
	<HeroSection />

	<!-- Two-column grid: left = streak + terminal, right = rewards -->
	<div class="grid grid-cols-1 gap-0 border-b-2 border-outline-variant md:grid-cols-12">
		<div class="space-y-0 md:col-span-8 md:border-r-2 md:border-outline-variant">
			<StreakHeatSection />
			<TerminalWindow />
		</div>
		<div class="md:col-span-4">
			<RewardLogSection />
		</div>
	</div>

	<RecentShipmentsSection />
	<Footer />
</main>

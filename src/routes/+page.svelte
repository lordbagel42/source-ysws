<script lang="ts">
	import SkipToContent from '$lib/components/site/SkipToContent.svelte';
	import HeroSection from '$lib/components/site/mission/HeroSection.svelte';
	import StreakHeatSection from '$lib/components/site/mission/StreakHeatSection.svelte';
	import RecentShipmentsSection from '$lib/components/site/mission/RecentShipmentsSection.svelte';
	import RewardLogSection from '$lib/components/site/mission/RewardLogSection.svelte';
	import TerminalWindow from '$lib/components/site/mission/TerminalWindow.svelte';
	import Footer from '$lib/components/site/Footer.svelte';
</script>

<SkipToContent />
<main id="main-content">
	<HeroSection />
	<StreakHeatSection />
	<RecentShipmentsSection />
	<RewardLogSection />
	<TerminalWindow />
</main>
<Footer />

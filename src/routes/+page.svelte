<script lang="ts">
	import Navbar from "$lib/components/site/Navbar.svelte";
	import Sidebar from "$lib/components/site/Sidebar.svelte";
	import Footer from "$lib/components/site/Footer.svelte";
	import Hero from "$lib/components/site/Hero.svelte";
	import StreakHeat from "$lib/components/site/StreakHeat.svelte";
	import RecentShipments from "$lib/components/site/RecentShipments.svelte";
	import RewardLog from "$lib/components/site/RewardLog.svelte";
	import Terminal from "$lib/components/site/Terminal.svelte";
</script>

<Navbar />
<Sidebar />

<main class="md:pl-64 pt-16 pb-16">
	<Hero />
	<StreakHeat />
	<RecentShipments />
	<RewardLog />
	<Terminal />
</main>

<Footer />

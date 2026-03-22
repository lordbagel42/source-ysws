<script lang="ts">
	import NavBar from '$lib/components/landing/NavBar.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import WhatIsSource from '$lib/components/landing/WhatIsSource.svelte';
	import HowItWorks from '$lib/components/landing/HowItWorks.svelte';
	import Stats from '$lib/components/landing/Stats.svelte';
	import FinalCta from '$lib/components/landing/FinalCta.svelte';
	import Footer from '$lib/components/site/Footer.svelte';

	let { data } = $props();
</script>

<NavBar user={data.user} />
<Hero />
<WhatIsSource />
<HowItWorks />
<Stats />
<FinalCta user={data.user} />
<Footer />

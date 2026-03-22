<script lang="ts">
	import PageHeader from '$lib/components/site/hardware/PageHeader.svelte';
	import ActiveInventory from '$lib/components/site/hardware/ActiveInventory.svelte';
	import BomRequestLog from '$lib/components/site/hardware/BomRequestLog.svelte';
	import RequestPartForm from '$lib/components/site/hardware/RequestPartForm.svelte';
	import ProtocolReminders from '$lib/components/site/hardware/ProtocolReminders.svelte';
</script>

<!-- Note: the (app) layout already wraps us in <main class="flex-1 p-6"> -->
<!-- So we add pt-2 for extra top spacing and pb-6 for bottom -->

<!-- PageHeader (title + budget) -->
<PageHeader />

<!-- 12-col grid layout: 8 left + 4 right -->
<div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
	<!-- Left Column: Inventory + BOM -->
	<div class="space-y-8 lg:col-span-8">
		<ActiveInventory />
		<BomRequestLog />
	</div>

	<!-- Right Column: Request Form + Protocol -->
	<div class="lg:col-span-4">
		<div class="sticky top-8 space-y-6">
			<RequestPartForm />
			<ProtocolReminders />
		</div>
	</div>
</div>

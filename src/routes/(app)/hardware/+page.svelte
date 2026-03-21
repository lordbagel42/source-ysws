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

<!-- System Logs Footer -->
<!-- Matches Stitch HTML lines 259-276 -->
<div class="mt-20 border-t-2 border-outline-variant pt-12">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
		<div class="md:col-span-1">
			<h4 class="mb-4 font-headline text-xs font-bold uppercase tracking-[0.3em] text-primary">
				System_Logs
			</h4>
			<div class="space-y-2 font-mono text-[9px] text-on-surface-variant">
				<div class="flex justify-between">
					<span>BOOT_HARDWARE_CHECK</span><span class="text-primary">PASS</span>
				</div>
				<div class="flex justify-between">
					<span>MEM_ALLOCATION</span><span class="text-primary">STABLE</span>
				</div>
				<div class="flex justify-between">
					<span>UPLINK_STATUS</span><span class="text-primary">ENCRYPTED</span>
				</div>
			</div>
		</div>
		<div class="md:col-span-3">
			<div class="flex h-full flex-col justify-end border-l border-outline-variant pl-8">
				<p
					class="font-headline text-3xl font-black uppercase leading-none tracking-tighter text-surface-container-highest opacity-50"
				>
					Sovereign_Hardware_Supply_Chain_v2024
				</p>
			</div>
		</div>
	</div>
</div>

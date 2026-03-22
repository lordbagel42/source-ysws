<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Send } from 'lucide-svelte';

	let partName = $state('');
	let quantity = $state('1');
	let justification = $state('');
	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitted = true;
		setTimeout(() => {
			submitted = false;
			partName = '';
			quantity = '1';
			justification = '';
		}, 2000);
	}
</script>

<section class="border-2 border-outline bg-card">
	<div class="border-b-2 border-outline p-4">
		<h3
			class="flex items-center gap-2 font-headline text-xs font-bold tracking-[0.15em] text-primary uppercase"
		>
			<Send class="h-3.5 w-3.5" />
			Request Part
		</h3>
	</div>

	<form class="space-y-4 p-4" onsubmit={handleSubmit}>
		<div class="space-y-1.5">
			<Label
				for="part-name"
				class="font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
			>
				Part Name
			</Label>
			<Input
				id="part-name"
				type="text"
				placeholder="e.g. BME280 Sensor"
				class="h-8 font-mono text-xs"
				bind:value={partName}
				required
			/>
		</div>

		<div class="space-y-1.5">
			<Label
				for="quantity"
				class="font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
			>
				Quantity
			</Label>
			<Input
				id="quantity"
				type="number"
				min="1"
				max="50"
				class="h-8 font-mono text-xs"
				bind:value={quantity}
				required
			/>
		</div>

		<div class="space-y-1.5">
			<Label
				for="justification"
				class="font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
			>
				Justification
			</Label>
			<Input
				id="justification"
				type="text"
				placeholder="Required for SENTINEL_CAM_V2 build..."
				class="h-8 font-mono text-xs"
				bind:value={justification}
				required
			/>
		</div>

		<Button
			type="submit"
			class="w-full font-mono text-xs tracking-wider uppercase"
			disabled={submitted}
		>
			{#if submitted}
				REQUEST_SUBMITTED ✓
			{:else}
				SUBMIT_REQUEST
			{/if}
		</Button>
	</form>
</section>

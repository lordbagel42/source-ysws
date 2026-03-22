<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';
	import { Search, Package } from 'lucide-svelte';

	interface Component {
		name: string;
		category: string;
		qty: number;
		inStock: boolean;
	}

	const inventory: Component[] = [
		{ name: 'ESP32-CAM', category: 'Microcontrollers', qty: 3, inStock: true },
		{ name: 'RPi Zero 2W', category: 'Microcontrollers', qty: 1, inStock: true },
		{ name: 'Arduino Nano', category: 'Microcontrollers', qty: 5, inStock: true },
		{ name: 'PIR Sensor HC-SR501', category: 'Sensors', qty: 4, inStock: true },
		{ name: 'BME280', category: 'Sensors', qty: 2, inStock: true },
		{ name: 'IR LED 940nm', category: 'Sensors', qty: 10, inStock: true },
		{ name: 'OLED 0.96" SSD1306', category: 'Displays', qty: 3, inStock: true },
		{ name: 'I2S Amplifier MAX98357A', category: 'Power', qty: 2, inStock: true },
		{ name: 'PTC Heater 12V', category: 'Power', qty: 0, inStock: false },
		{ name: '5V 2A PSU', category: 'Power', qty: 4, inStock: true },
		{ name: 'Speaker Driver 3W', category: 'Mechanical', qty: 2, inStock: true },
		{ name: 'Microphone Array INMP441', category: 'Sensors', qty: 1, inStock: true },
		{ name: '3D-Printed Enclosure', category: 'Mechanical', qty: 0, inStock: false }
	];

	const categories = ['All', 'Microcontrollers', 'Sensors', 'Displays', 'Power', 'Mechanical'];

	let searchQuery = $state('');
	let activeCategory = $state('All');

	const filtered = $derived(
		inventory.filter((c) => {
			const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
			return matchesSearch && matchesCategory;
		})
	);
</script>

<aside class="border-2 border-outline bg-card">
	<div class="border-b-2 border-outline p-4">
		<h3
			class="mb-3 flex items-center gap-2 font-headline text-xs font-bold tracking-[0.15em] text-primary uppercase"
		>
			<Package class="h-3.5 w-3.5" />
			Component Inventory
		</h3>
		<div class="relative">
			<Search
				class="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
			/>
			<Input
				type="text"
				placeholder="Search components..."
				class="h-8 pl-9 font-mono text-xs"
				bind:value={searchQuery}
			/>
		</div>
	</div>

	<!-- Category Filters -->
	<div class="flex flex-wrap gap-1.5 border-b border-outline p-3">
		{#each categories as cat (cat)}
			<button
				type="button"
				class="border px-2 py-0.5 font-mono text-[10px] transition-colors {activeCategory === cat
					? 'border-primary bg-primary/10 text-primary'
					: 'border-outline text-muted-foreground hover:border-primary/50 hover:text-foreground'}"
				onclick={() => (activeCategory = cat)}
			>
				{cat.toUpperCase()}
			</button>
		{/each}
	</div>

	<!-- Parts List -->
	<div class="max-h-[400px] overflow-y-auto">
		{#each filtered as part (part.name)}
			<div
				class="flex items-center justify-between border-b border-outline/50 px-4 py-2.5 transition-colors hover:bg-surface-container"
			>
				<div>
					<span class="block font-mono text-xs text-foreground">{part.name}</span>
					<span class="font-mono text-[10px] text-muted-foreground">{part.category}</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="font-mono text-[10px] text-muted-foreground">×{part.qty}</span>
					{#if part.inStock}
						<Badge
							class="rounded-none border border-primary/40 bg-primary/10 px-1.5 py-0 font-mono text-[9px] text-primary"
						>
							IN_STOCK
						</Badge>
					{:else}
						<Badge
							class="rounded-none border border-destructive/40 bg-destructive/10 px-1.5 py-0 font-mono text-[9px] text-destructive"
						>
							OUT
						</Badge>
					{/if}
				</div>
			</div>
		{/each}
		{#if filtered.length === 0}
			<div class="p-6 text-center font-mono text-xs text-muted-foreground">NO_MATCHES_FOUND</div>
		{/if}
	</div>

	<div class="border-t border-outline p-3">
		<span class="font-mono text-[10px] text-muted-foreground">
			{filtered.length} / {inventory.length} components shown
		</span>
	</div>
</aside>

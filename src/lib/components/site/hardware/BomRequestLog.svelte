<script lang="ts">
	import { FileText } from 'lucide-svelte';
	import * as Table from '$lib/components/ui/table';

	const bomItems = [
		{
			id: 'BOM-001',
			component: 'ESP32-S3 Module',
			qty: 1,
			unitCost: 12.5,
			status: 'APPROVED',
			date: '2024-01-15'
		},
		{
			id: 'BOM-002',
			component: 'E-Ink Display 2.9"',
			qty: 1,
			unitCost: 28.0,
			status: 'PENDING',
			date: '2024-01-18'
		},
		{
			id: 'BOM-003',
			component: 'Custom PCB v2',
			qty: 5,
			unitCost: 8.5,
			status: 'APPROVED',
			date: '2024-01-12'
		},
		{
			id: 'BOM-004',
			component: 'LoRa SX1276 Module',
			qty: 2,
			unitCost: 15.0,
			status: 'REVIEW',
			date: '2024-01-20'
		}
	];

	const pendingTotal = bomItems
		.filter((i) => i.status !== 'APPROVED')
		.reduce((sum, i) => sum + i.unitCost * i.qty, 0);
</script>

<section>
	<div class="mb-4 flex items-center justify-between border-b border-outline-variant pb-2">
		<h2
			class="flex items-center gap-2 font-headline text-lg font-bold uppercase tracking-widest text-primary"
		>
			<FileText class="size-4" />
			BOM_Request_Log
		</h2>
		<span class="font-headline text-[10px] text-muted-foreground">
			PENDING_TOTAL: ${pendingTotal.toFixed(2)}
		</span>
	</div>

	<div class="border-2 border-outline-variant bg-surface-container-low">
		<Table.Root class="font-mono text-xs">
			<Table.Header>
				<Table.Row class="border-outline-variant">
					<Table.Head class="font-headline text-[10px] uppercase tracking-widest text-muted-foreground">PART_ID</Table.Head>
					<Table.Head class="font-headline text-[10px] uppercase tracking-widest text-muted-foreground">COMPONENT</Table.Head>
					<Table.Head class="font-headline text-[10px] uppercase tracking-widest text-muted-foreground">QTY</Table.Head>
					<Table.Head class="font-headline text-[10px] uppercase tracking-widest text-muted-foreground">UNIT_COST</Table.Head>
					<Table.Head class="font-headline text-[10px] uppercase tracking-widest text-muted-foreground">STATUS</Table.Head>
					<Table.Head class="font-headline text-[10px] uppercase tracking-widest text-muted-foreground">DATE</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each bomItems as item (item.id)}
					<Table.Row class="border-outline-variant">
						<Table.Cell class="text-primary">{item.id}</Table.Cell>
						<Table.Cell>{item.component}</Table.Cell>
						<Table.Cell>{item.qty}</Table.Cell>
						<Table.Cell>${item.unitCost.toFixed(2)}</Table.Cell>
						<Table.Cell>
							{#if item.status === 'APPROVED'}
								<span class="border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase text-primary">
									{item.status}
								</span>
							{:else if item.status === 'PENDING'}
								<span class="border border-secondary/30 bg-secondary/10 px-2 py-0.5 text-[10px] font-bold uppercase text-secondary">
									{item.status}
								</span>
							{:else}
								<span class="border border-outline-variant bg-muted px-2 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
									{item.status}
								</span>
							{/if}
						</Table.Cell>
						<Table.Cell class="text-muted-foreground">{item.date}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</section>

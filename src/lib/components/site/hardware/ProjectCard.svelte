<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import * as Table from '$lib/components/ui/table';
	import { Clock, Cpu, Layers } from 'lucide-svelte';

	interface BomItem {
		name: string;
		cost: number;
	}

	interface Props {
		codename: string;
		title: string;
		status: 'VERIFIED' | 'IN_PROGRESS' | 'QUEUED';
		difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
		description: string;
		bom: BomItem[];
		progress: number;
		timeEstimate: number;
	}

	let { codename, title, status, difficulty, description, bom, progress, timeEstimate }: Props =
		$props();

	const bomTotal = $derived(bom.reduce((sum, item) => sum + item.cost, 0));

	const statusColor = $derived(
		status === 'VERIFIED'
			? 'bg-primary/20 text-primary border-primary/40'
			: status === 'IN_PROGRESS'
				? 'bg-[#00E3FD]/20 text-[#00E3FD] border-[#00E3FD]/40'
				: 'bg-muted text-muted-foreground border-outline'
	);

	const difficultyColor = $derived(
		difficulty === 'BEGINNER'
			? 'text-primary'
			: difficulty === 'INTERMEDIATE'
				? 'text-[#F0FF00]'
				: 'text-[#ff4444]'
	);
</script>

<article class="border-2 border-outline bg-card transition-colors hover:border-primary/50">
	<!-- Card Header -->
	<div class="border-b-2 border-outline p-5">
		<div class="mb-3 flex flex-wrap items-center gap-3">
			<Badge class="border {statusColor} rounded-none font-mono text-[10px]">
				[{status}]
			</Badge>
			<span class="font-mono text-[10px] {difficultyColor}">
				{difficulty}
			</span>
			<span class="ml-auto font-mono text-[10px] text-muted-foreground">
				<Clock class="mr-1 inline-block h-3 w-3" />
				{timeEstimate}h estimated
			</span>
		</div>
		<h2 class="font-headline text-2xl font-bold tracking-tight text-foreground">
			<Cpu class="mr-2 inline-block h-5 w-5 text-primary" />
			{codename}
		</h2>
		<p class="mt-1 font-mono text-xs text-muted-foreground">{title}</p>
	</div>

	<!-- Card Body -->
	<div class="space-y-5 p-5">
		<p class="font-mono text-xs leading-relaxed text-on-surface-variant">
			{description}
		</p>

		<!-- Build Progress -->
		<div>
			<div class="mb-2 flex items-center justify-between font-mono text-xs">
				<span class="text-muted-foreground">BUILD_PROGRESS</span>
				<span class="text-primary">{progress}%</span>
			</div>
			<Progress value={progress} max={100} class="h-2" />
			<p class="mt-1 font-mono text-[10px] text-muted-foreground">
				{#if progress === 100}
					BUILD COMPLETE — READY FOR DEPLOYMENT
				{:else if progress === 0}
					QUEUED — AWAITING INITIALIZATION
				{:else}
					IN PROGRESS — {100 - progress}% REMAINING
				{/if}
			</p>
		</div>

		<!-- Bill of Materials -->
		<div>
			<h3
				class="mb-2 flex items-center gap-2 font-headline text-xs font-bold tracking-[0.15em] text-primary uppercase"
			>
				<Layers class="h-3.5 w-3.5" />
				Bill of Materials
			</h3>
			<div class="border border-outline">
				<Table.Root>
					<Table.Header>
						<Table.Row class="border-b border-outline hover:bg-transparent">
							<Table.Head
								class="font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
							>
								Component
							</Table.Head>
							<Table.Head
								class="text-right font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
							>
								Cost
							</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each bom as item (item.name)}
							<Table.Row class="border-b border-outline/50 hover:bg-surface-container">
								<Table.Cell class="font-mono text-xs text-foreground">
									{item.name}
								</Table.Cell>
								<Table.Cell class="text-right font-mono text-xs text-[#F0FF00]">
									${item.cost}
								</Table.Cell>
							</Table.Row>
						{/each}
						<Table.Row class="border-t-2 border-primary/30 hover:bg-transparent">
							<Table.Cell class="font-mono text-xs font-bold text-foreground">TOTAL</Table.Cell>
							<Table.Cell class="text-right font-mono text-xs font-bold text-primary">
								${bomTotal}
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</div>
		</div>
	</div>
</article>

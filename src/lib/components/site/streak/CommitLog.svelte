<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	const commits = [
		{
			hash: 'a1b2c3d',
			message: 'FIX_PWM_DUTY_CYCLE_OVERFLOW',
			author: 'OPERATOR_01',
			timestamp: '2024-10-24 14:32',
			status: 'MERGED' as const
		},
		{
			hash: 'e4f5g6h',
			message: 'ADD_THERMAL_SENSOR_V2_DRIVER',
			author: 'OPERATOR_01',
			timestamp: '2024-10-24 11:15',
			status: 'MERGED' as const
		},
		{
			hash: 'i7j8k9l',
			message: 'REFACTOR_PCB_LAYOUT_MODULE',
			author: 'CONTRIBUTOR_03',
			timestamp: '2024-10-23 23:59',
			status: 'REVIEW' as const
		},
		{
			hash: 'm0n1o2p',
			message: 'UPDATE_BOM_COMPONENT_LIST',
			author: 'OPERATOR_01',
			timestamp: '2024-10-23 18:42',
			status: 'MERGED' as const
		},
		{
			hash: 'q3r4s5t',
			message: 'INIT_POWER_REGULATION_SUBSYS',
			author: 'CONTRIBUTOR_07',
			timestamp: '2024-10-22 09:11',
			status: 'PENDING' as const
		}
	];
</script>

<section class="border-2 border-outline-variant bg-surface-container-low p-8">
	<header class="mb-8 border-b-2 border-surface-container-high pb-4">
		<span class="mb-2 block font-headline text-[10px] tracking-[0.2em] text-outline uppercase">
			SYSTEM_LOG // COMMIT_HISTORY
		</span>
		<h2 class="font-headline text-4xl font-bold tracking-tighter text-foreground uppercase">
			GIT_COMMIT_LOG
		</h2>
	</header>

	<div class="overflow-x-auto">
		<Table.Root>
			<Table.Header>
				<Table.Row class="border-b-2 border-outline-variant hover:bg-transparent">
					<Table.Head class="font-headline text-[10px] tracking-widest text-outline uppercase">
						HASH
					</Table.Head>
					<Table.Head class="font-headline text-[10px] tracking-widest text-outline uppercase">
						MESSAGE
					</Table.Head>
					<Table.Head class="font-headline text-[10px] tracking-widest text-outline uppercase">
						AUTHOR
					</Table.Head>
					<Table.Head class="font-headline text-[10px] tracking-widest text-outline uppercase">
						TIMESTAMP
					</Table.Head>
					<Table.Head class="font-headline text-[10px] tracking-widest text-outline uppercase">
						STATUS
					</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each commits as commit (commit.hash)}
					<Table.Row
						class="border-b border-outline-variant/50 transition-colors hover:bg-surface-container-high"
					>
						<Table.Cell class="font-mono text-xs text-primary">
							{commit.hash}
						</Table.Cell>
						<Table.Cell class="font-mono text-xs text-on-surface uppercase">
							{commit.message}
						</Table.Cell>
						<Table.Cell class="font-headline text-xs text-on-surface-variant uppercase">
							{commit.author}
						</Table.Cell>
						<Table.Cell class="font-mono text-xs text-on-surface-variant">
							{commit.timestamp}
						</Table.Cell>
						<Table.Cell>
							{#if commit.status === 'MERGED'}
								<Badge
									class="border-0 bg-[#00530e] font-headline text-[10px] tracking-widest text-primary uppercase"
								>
									MERGED
								</Badge>
							{:else if commit.status === 'REVIEW'}
								<Badge
									class="border-0 bg-[#004f58] font-headline text-[10px] tracking-widest text-secondary uppercase"
								>
									REVIEW
								</Badge>
							{:else}
								<Badge
									variant="outline"
									class="font-headline text-[10px] tracking-widest text-on-surface-variant uppercase"
								>
									PENDING
								</Badge>
							{/if}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</section>

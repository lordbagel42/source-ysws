<script lang="ts">
	import { Progress } from '$lib/components/ui/progress';
	import { Trophy } from 'lucide-svelte';

	type Builder = {
		rank: number;
		username: string;
		votes: number;
		approved: number;
		reputation: number;
	};

	const builders: Builder[] = [
		{ rank: 1, username: '@circuit_sage', votes: 312, approved: 8, reputation: 95 },
		{ rank: 2, username: '@byte_forge', votes: 287, approved: 7, reputation: 89 },
		{ rank: 3, username: '@nano_drift', votes: 241, approved: 6, reputation: 82 },
		{ rank: 4, username: '@pixel_smith', votes: 198, approved: 5, reputation: 74 },
		{ rank: 5, username: '@volt_runner', votes: 176, approved: 5, reputation: 70 },
		{ rank: 6, username: '@flux_welder', votes: 154, approved: 4, reputation: 63 },
		{ rank: 7, username: '@key_phantom', votes: 132, approved: 3, reputation: 55 },
		{ rank: 8, username: '@signal_ghost', votes: 108, approved: 3, reputation: 48 }
	];

	function rankColor(rank: number): string {
		if (rank === 1) return 'text-[#F0FF00]';
		if (rank === 2) return 'text-primary';
		if (rank === 3) return 'text-secondary';
		return 'text-on-surface-variant';
	}
</script>

<aside aria-labelledby="leaderboard-title" class="space-y-4">
	<div class="flex items-center gap-2">
		<Trophy class="h-4 w-4 text-[#F0FF00]" />
		<h2
			id="leaderboard-title"
			class="font-headline text-lg font-black tracking-wider text-foreground"
		>
			TOP_BUILDERS
		</h2>
	</div>

	<div class="space-y-1">
		{#each builders as builder (builder.username)}
			<div
				class="border-2 border-outline-variant bg-surface-container-low p-3 transition-colors hover:border-outline"
			>
				<div class="mb-2 flex items-center gap-3">
					<span
						class={`font-headline text-lg font-black ${rankColor(builder.rank)}`}
						aria-label="Rank {builder.rank}"
					>
						{String(builder.rank).padStart(2, '0')}
					</span>
					<div class="min-w-0 flex-1">
						<span class="block truncate font-mono text-sm font-bold text-foreground">
							{builder.username}
						</span>
						<span class="font-mono text-[10px] text-on-surface-variant">
							{builder.votes} votes · {builder.approved} approved
						</span>
					</div>
				</div>
				<div class="flex items-center gap-2">
					<Progress value={builder.reputation} max={100} class="h-1.5" />
					<span class="font-mono text-[10px] text-on-surface-variant">
						{builder.reputation}%
					</span>
				</div>
			</div>
		{/each}
	</div>
</aside>

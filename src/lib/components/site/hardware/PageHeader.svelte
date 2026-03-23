<script lang="ts">
	import { Progress } from '$lib/components/ui/progress';

	const allocation = 275;
	const spent = 65;
	const remaining = allocation - spent;
	const percentSpent = Math.round((spent / allocation) * 100);
</script>

<div class="mb-12 space-y-6">
	<div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
		<div>
			<span class="mb-2 block font-mono text-xs tracking-[0.2em] text-muted-foreground">
				MANIFEST_ID: 0x2A7F_HARDWARE
			</span>
			<h1
				class="crt-glow font-headline text-3xl md:text-5xl leading-none font-black tracking-tighter text-primary uppercase md:text-6xl"
			>
				HARDWARE_REGISTRY
			</h1>
			<p class="mt-3 max-w-xl font-mono text-sm text-muted-foreground">
				Available build protocols and component manifests
			</p>
		</div>
	</div>

	<!-- Budget Tracker -->
	<div class="border-2 border-outline bg-surface-container-low p-4">
		<div class="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs">
			<span class="text-primary">${allocation} ALLOCATION</span>
			<span class="text-muted-foreground">//</span>
			<span class="text-[#F0FF00]">${spent} SPENT</span>
			<span class="text-muted-foreground">//</span>
			<span class="text-[#00E3FD]">${remaining} REMAINING</span>
		</div>
		<div class="relative">
			<Progress value={percentSpent} max={100} class="h-2" />
			<span class="mt-1 block text-right font-mono text-[10px] text-muted-foreground">
				{percentSpent}% utilized
			</span>
		</div>
	</div>
</div>

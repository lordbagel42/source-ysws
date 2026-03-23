<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Target, Gift } from 'lucide-svelte';

	let progress = $state(60);
</script>

<section
	aria-label="Daily mission"
	class="hard-shadow border-2 border-[var(--primary)] bg-[var(--surface-container-low)] p-6"
	style="box-shadow: 4px 4px 0 #000, 0 0 12px rgba(0, 255, 65, 0.15);"
>
	<div class="mb-4 flex flex-wrap items-center gap-3">
		<div
			class="flex h-8 w-8 items-center justify-center border-2 border-[var(--primary)] bg-[rgba(0,255,65,0.1)]"
		>
			<Target class="h-4 w-4 text-[var(--primary)]" />
		</div>
		<h3 class="font-headline text-lg font-bold tracking-wider text-[var(--primary)] uppercase">
			TODAY'S OBJECTIVE
		</h3>
		<Badge
			class="border border-[#f0ff00] bg-[rgba(240,255,0,0.1)] font-mono text-xs text-[#f0ff00]"
		>
			IN PROGRESS
		</Badge>
	</div>

	<p class="mb-4 font-body text-sm text-[var(--foreground)]">
		Complete solder joints on audio amplifier board
	</p>

	<div class="mb-2 space-y-2">
		<div class="flex justify-between font-mono text-xs text-[var(--on-surface-variant)]">
			<span>PROGRESS</span>
			<span class="text-[var(--primary)]">{progress}%</span>
		</div>
		<div class="h-3 w-full border-2 border-[var(--border)] bg-[var(--surface-container)]">
			<div
				class="h-full bg-[var(--primary)] transition-all duration-500"
				style="width: {progress}%;"
				role="progressbar"
				aria-valuenow={progress}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-label="Mission progress: {progress}%"
			></div>
		</div>
	</div>

	<div class="flex items-center gap-2 font-mono text-sm text-[var(--on-surface-variant)]">
		<Gift class="h-4 w-4 text-[#f0ff00]" />
		<span>REWARD: <span class="text-[#f0ff00]">+50 SRC tokens</span></span>
	</div>
</section>

<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Clock } from 'lucide-svelte';

	let approveCount = $state(67);
	let flagCount = $state(4);

	function handleApprove() {
		approveCount++;
	}

	function handleFlag() {
		flagCount++;
	}
</script>

<section aria-labelledby="featured-title">
	<span class="mb-3 block font-headline text-[10px] tracking-[0.2em] text-outline uppercase">
		FEATURED // COMMUNITY_REVIEW
	</span>

	<div
		class="relative overflow-hidden border-2 border-primary bg-surface-container-low"
		style="box-shadow: 0 0 20px rgba(0, 255, 65, 0.15);"
	>
		<!-- Decorative corner -->
		<div class="absolute top-0 right-0 border-b-2 border-l-2 border-primary bg-primary px-3 py-1">
			<span class="font-headline text-[10px] font-bold tracking-widest text-primary-foreground">
				★ FEATURED
			</span>
		</div>

		<div class="grid grid-cols-1 gap-0 lg:grid-cols-12">
			<!-- Image placeholder -->
			<div
				class="relative flex h-full items-center justify-center overflow-hidden border-b-2 border-outline-variant bg-surface-container lg:col-span-4 lg:border-r-2 lg:border-b-0"
			>
				<div
					class="pointer-events-none absolute inset-0 opacity-10"
					style="background-image: radial-gradient(circle, #00ff41 1px, transparent 1px); background-size: 20px 20px;"
				></div>
				<span class="py-12 font-mono text-sm text-on-surface-variant opacity-50"
					>PROJECT_PREVIEW</span
				>
			</div>

			<!-- Content -->
			<div class="p-6 lg:col-span-8 lg:p-8">
				<div class="mb-4 flex flex-wrap items-start gap-3">
					<h2
						id="featured-title"
						class="font-headline text-2xl font-black tracking-wider text-primary md:text-3xl"
					>
						QUANTUM_RELAY_BOARD
					</h2>
					<Badge variant="secondary" class="font-mono text-[10px]">HARDWARE</Badge>
				</div>

				<p class="mb-2 font-mono text-sm text-secondary">@circuit_sage</p>

				<p class="mb-6 max-w-xl text-sm leading-relaxed text-on-surface-variant">
					A custom PCB relay board with quantum-inspired error correction for mesh network nodes.
					Features onboard RP2040, LoRa transceiver, and solar charge controller. Open-source
					hardware with full KiCad files.
				</p>

				<!-- Vote + timer row -->
				<div class="flex flex-wrap items-center gap-4">
					<Button
						variant="outline"
						class="border-2 border-primary font-mono text-sm text-primary hover:bg-primary hover:text-primary-foreground"
						onclick={handleApprove}
					>
						APPROVE ▲
						<span class="ml-2 font-bold">{approveCount}</span>
					</Button>

					<Button
						variant="outline"
						class="border-2 border-destructive font-mono text-sm text-destructive hover:bg-destructive hover:text-destructive-foreground"
						onclick={handleFlag}
					>
						FLAG ▼
						<span class="ml-2 font-bold">{flagCount}</span>
					</Button>

					<span class="ml-auto flex items-center gap-2 font-mono text-xs text-on-surface-variant">
						<Clock class="h-3.5 w-3.5" />
						VOTING_CLOSES: 23H 14M
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

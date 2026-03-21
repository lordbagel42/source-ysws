<script lang="ts">
	import { Package, Cpu } from 'lucide-svelte';
</script>

<section>
	<div class="mb-4 flex items-center justify-between border-b border-outline-variant pb-2">
		<h2
			class="flex items-center gap-2 font-headline text-lg font-bold uppercase tracking-widest text-primary"
		>
			<Package class="size-4" />
			Active_Inventory
		</h2>
		<span class="font-headline text-[10px] text-muted-foreground">ITEMS_COUNT: 01</span>
	</div>

	<div class="group border-2 border-outline-variant bg-surface-container-low p-0">
		<div
			class="flex items-center justify-between border-b border-outline-variant bg-surface-container-high px-4 py-2"
		>
			<span class="font-headline text-[10px] text-primary">UID: LILY-TDECK-001</span>
			<span class="bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
				ALLOCATED
			</span>
		</div>
		<div class="flex flex-col gap-6 p-6 md:flex-row">
			<div
				class="flex h-24 w-24 flex-shrink-0 items-center justify-center border border-outline-variant bg-surface-container-highest"
			>
				<Cpu class="size-8 text-muted-foreground opacity-60" />
			</div>
			<div class="flex-1">
				<div class="mb-2 flex items-start justify-between">
					<h3 class="font-headline text-xl font-bold tracking-tight text-primary">
						LILYGO® T-DECK
					</h3>
					<div class="text-right">
						<span class="font-headline text-lg font-bold">$0.00</span>
						<span class="text-[10px] font-normal uppercase text-muted-foreground">
							(VOUCHER_USED)
						</span>
					</div>
				</div>
				<p class="max-w-md font-mono text-xs leading-relaxed text-on-surface-variant">
					ESP32-S3 Dual-Core Processor, 2.8" LCD, LoRa Module, QWERTY Keyboard. Core build
					component for YSWS_CONSOLE.
				</p>
				<div class="mt-4 flex gap-2">
					<span
						class="border border-outline-variant px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
					>
						LORA_868MHZ
					</span>
					<span
						class="border border-outline-variant px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
					>
						TRACKBALL_INPUT
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

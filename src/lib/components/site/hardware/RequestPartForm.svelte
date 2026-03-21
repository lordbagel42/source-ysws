<script lang="ts">
	import { PlusSquare, CheckCircle } from 'lucide-svelte';
</script>

<div class="relative border-2 border-outline bg-surface-container-low p-6">
	<span
		class="absolute -top-3 right-4 bg-surface px-2 font-headline text-[10px] uppercase tracking-widest text-muted-foreground"
	>
		Hardware_Req_v1
	</span>
	<h3
		class="mb-6 flex items-center gap-2 font-headline text-lg font-bold uppercase tracking-widest text-primary"
	>
		<PlusSquare class="size-5" />
		Request_New_Part
	</h3>

	<form class="space-y-5">
		<div>
			<label
				class="mb-2 block font-headline text-[10px] uppercase tracking-widest text-muted-foreground"
			>
				Vendor_Source
			</label>
			<select
				class="w-full appearance-none border-2 border-outline-variant bg-surface-container-lowest px-3 py-2 font-mono text-xs text-on-surface outline-none focus:border-secondary"
			>
				<option>DIGIKEY_ELECTRONICS</option>
				<option>MOUSER_ELECTRONICS</option>
				<option>AMAZON_US</option>
				<option>ADAFRUIT_INDUSTRIES</option>
			</select>
		</div>

		<div>
			<label
				class="mb-2 block font-headline text-[10px] uppercase tracking-widest text-muted-foreground"
			>
				Component_URL
			</label>
			<input
				type="text"
				placeholder="HTTPS://WWW.MOUSER.COM/P/..."
				class="w-full border-2 border-outline-variant bg-surface-container-lowest px-3 py-2 font-mono text-xs text-on-surface outline-none focus:border-secondary"
			/>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div>
				<label
					class="mb-2 block font-headline text-[10px] uppercase tracking-widest text-muted-foreground"
				>
					Unit_Price
				</label>
				<div class="relative">
					<span
						class="absolute left-3 top-2 text-xs text-on-surface-variant"
					>
						$
					</span>
					<input
						type="number"
						placeholder="0.00"
						class="w-full border-2 border-outline-variant bg-surface-container-lowest py-2 pl-6 pr-3 font-mono text-xs text-on-surface outline-none focus:border-secondary"
					/>
				</div>
			</div>
			<div>
				<label
					class="mb-2 block font-headline text-[10px] uppercase tracking-widest text-muted-foreground"
				>
					Quantity
				</label>
				<input
					type="number"
					placeholder="1"
					class="w-full border-2 border-outline-variant bg-surface-container-lowest px-3 py-2 font-mono text-xs text-on-surface outline-none focus:border-secondary"
				/>
			</div>
		</div>

		<div class="border-t border-outline-variant pt-4">
			<button
				type="button"
				class="mb-3 flex w-full items-center justify-center gap-2 border-2 border-primary bg-surface py-3 font-headline font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground active:translate-y-0.5"
			>
				<CheckCircle class="size-4" />
				VERIFY_COST
			</button>
			<button
				type="submit"
				class="w-full bg-primary py-3 font-headline font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/80"
			>
				PUSH_TO_MANIFEST
			</button>
		</div>
	</form>
</div>

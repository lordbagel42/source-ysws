<script lang="ts">
	import { PlusSquare, CheckCircle } from 'lucide-svelte';
</script>

<div class="relative border-2 border-outline bg-surface-container-low p-6">
	<span
		class="bg-surface absolute -top-3 right-4 px-2 font-headline text-[10px] tracking-widest text-muted-foreground uppercase"
	>
		Hardware_Req_v1
	</span>
	<h3
		class="mb-6 flex items-center gap-2 font-headline text-lg font-bold tracking-widest text-primary uppercase"
	>
		<PlusSquare class="size-5" />
		Request_New_Part
	</h3>

	<form class="space-y-5">
		<div>
			<label
				for="vendor-source"
				class="mb-2 block font-headline text-[10px] tracking-widest text-muted-foreground uppercase"
			>
				Vendor_Source
			</label>
			<select
				id="vendor-source"
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
				for="component-url"
				class="mb-2 block font-headline text-[10px] tracking-widest text-muted-foreground uppercase"
			>
				Component_URL
			</label>
			<input
				id="component-url"
				type="text"
				placeholder="HTTPS://WWW.MOUSER.COM/P/..."
				class="w-full border-2 border-outline-variant bg-surface-container-lowest px-3 py-2 font-mono text-xs text-on-surface outline-none focus:border-secondary"
			/>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div>
				<label
					for="unit-price"
					class="mb-2 block font-headline text-[10px] tracking-widest text-muted-foreground uppercase"
				>
					Unit_Price
				</label>
				<div class="relative">
					<span class="absolute top-2 left-3 text-xs text-on-surface-variant"> $ </span>
					<input
						id="unit-price"
						type="number"
						placeholder="0.00"
						class="w-full border-2 border-outline-variant bg-surface-container-lowest py-2 pr-3 pl-6 font-mono text-xs text-on-surface outline-none focus:border-secondary"
					/>
				</div>
			</div>
			<div>
				<label
					for="quantity"
					class="mb-2 block font-headline text-[10px] tracking-widest text-muted-foreground uppercase"
				>
					Quantity
				</label>
				<input
					id="quantity"
					type="number"
					placeholder="1"
					class="w-full border-2 border-outline-variant bg-surface-container-lowest px-3 py-2 font-mono text-xs text-on-surface outline-none focus:border-secondary"
				/>
			</div>
		</div>

		<div class="border-t border-outline-variant pt-4">
			<button
				type="button"
				class="bg-surface mb-3 flex w-full items-center justify-center gap-2 border-2 border-primary py-3 font-headline font-bold tracking-widest text-primary uppercase transition-all hover:bg-primary hover:text-primary-foreground active:translate-y-0.5"
			>
				<CheckCircle class="size-4" />
				VERIFY_COST
			</button>
			<button
				type="submit"
				class="w-full bg-primary py-3 font-headline font-bold tracking-widest text-primary-foreground uppercase transition-all hover:bg-primary/80"
			>
				PUSH_TO_MANIFEST
			</button>
		</div>
	</form>
</div>

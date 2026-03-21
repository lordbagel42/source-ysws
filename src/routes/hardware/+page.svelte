<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const inventory = [
		{
			uid: 'LILY-TDECK-001',
			title: 'LILYGO® T-DECK',
			desc: 'ESP32-S3 Dual-Core Processor, 2.8" LCD, LoRa Module, QWERTY Keyboard. Core build component for YSWS_CONSOLE.',
			price: '0.00',
			voucher: 'VOUCHER_USED',
			tags: ['LORA_868MHZ', 'TRACKBALL_INPUT'],
			img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsnS7-mDmC6uz8WaYEKAa1ZnX7jd8cEKmz6oJvUsLXurqkpuAhxsfrrUxa0U4Ti57qV4-hE67E4UuxHRE6JrOez3D2k7TG74gHgtyH29QoesjxEe3CjDSLn2TAxltqV29ceWcfNv2MJQGx8lZeTFFt4U21S4PIlXsy2piJasT5s5DmPuC3ASgYQsQ_y4JYSzjfOSH_uASG0z1F-fyhUKZWs2Tq2DRjSuoCUoqbGqzIN1wd2Qd-a6EjheRVRRORgQ4sweV4xUlwH12a'
		}
	];
</script>

<svelte:head>
	<title>YSWS_CONSOLE_V1.0 | HARDWARE_MANIFEST</title>
</svelte:head>

<!-- Header Section / Budget Display -->
<div class="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
	<div>
		<span
			class="mb-2 block font-label text-xs tracking-[0.2em] text-outline underline decoration-primary/30"
			>MANIFEST_ID: 0x2A7F_HARDWARE</span
		>
		<h1
			class="crt-glow font-headline text-5xl leading-none font-black tracking-tighter text-primary uppercase md:text-6xl"
		>
			Hardware Catalog
		</h1>
	</div>
	<Card.Root
		class="relative min-w-[300px] border-2 border-primary-container bg-surface-container-high p-6 shadow-none"
	>
		<div
			class="absolute -top-3 left-4 bg-surface px-2 font-label text-[10px] tracking-widest text-primary-container uppercase"
		>
			Global Allocation
		</div>
		<div class="mb-1 font-headline text-xs text-outline">BUDGET_REMAINING:</div>
		<div class="font-headline text-4xl font-bold tracking-tighter text-primary-container">
			$275.00
		</div>
		<div class="mt-4 h-1.5 w-full overflow-hidden bg-surface-container-lowest">
			<div class="h-full w-full bg-primary-container"></div>
		</div>
	</Card.Root>
</div>

<div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
	<!-- Left Column: BOM List -->
	<div class="space-y-8 lg:col-span-8">
		<section>
			<div class="mb-4 flex items-center justify-between border-b border-outline-variant pb-2">
				<h2
					class="flex items-center gap-2 font-headline text-lg font-bold tracking-widest text-primary uppercase"
				>
					<span class="material-symbols-outlined text-sm">inventory_2</span> Active_Inventory
				</h2>
				<span class="font-label text-[10px] text-outline">ITEMS_COUNT: 01</span>
			</div>

			{#each inventory as item (item.uid)}
				<Card.Root
					class="group border-2 border-outline-variant bg-surface-container-low p-0 shadow-none"
				>
					<div
						class="flex items-center justify-between border-b border-outline-variant bg-surface-container-high px-4 py-2"
					>
						<span class="font-label text-[10px] text-primary-container">UID: {item.uid}</span>
						<Badge
							class="bg-primary-container px-2 py-0.5 text-[10px] font-bold text-on-primary uppercase shadow-none"
							>ALLOCATED</Badge
						>
					</div>
					<div class="flex flex-col gap-6 p-6 md:flex-row">
						<div
							class="h-24 w-24 flex-shrink-0 border border-outline-variant bg-surface-container-highest"
						>
							<img
								src={item.img}
								alt={item.title}
								class="h-full w-full opacity-60 grayscale transition-all hover:grayscale-0"
							/>
						</div>
						<div class="flex-1">
							<div class="mb-2 flex items-start justify-between">
								<h3 class="font-headline text-xl font-bold tracking-tight text-primary">
									{item.title}
								</h3>
								<span class="font-headline text-lg font-bold"
									>${item.price}
									<span class="text-[10px] font-normal text-outline uppercase"
										>({item.voucher})</span
									></span
								>
							</div>
							<p class="max-w-md font-mono text-xs leading-relaxed text-outline-variant">
								{item.desc}
							</p>
							<div class="mt-4 flex gap-2">
								{#each item.tags as tag (tag)}
									<Badge
										variant="outline"
										class="border-outline-variant px-2 py-0.5 font-mono text-[10px] text-outline shadow-none"
										>{tag}</Badge
									>
								{/each}
							</div>
						</div>
					</div>
				</Card.Root>
			{/each}
		</section>

		<section>
			<div class="mb-4 flex items-center justify-between border-b border-outline-variant pb-2">
				<h2
					class="flex items-center gap-2 font-headline text-lg font-bold tracking-widest text-primary uppercase"
				>
					<span class="material-symbols-outlined text-sm">receipt_long</span> BOM_REQUEST_LOG
				</h2>
				<span class="font-label text-[10px] text-outline">PENDING_TOTAL: $0.00</span>
			</div>
			<Card.Root
				class="border-2 border-dashed border-outline-variant bg-transparent p-12 text-center shadow-none"
			>
				<span class="material-symbols-outlined mb-4 text-4xl text-outline-variant">terminal</span>
				<p class="font-label text-xs tracking-widest text-outline uppercase">
					No additional components requested.
				</p>
				<p class="mt-2 text-[10px] text-outline-variant">
					Initialize request using the terminal form.
				</p>
			</Card.Root>
		</section>
	</div>

	<!-- Right Column: Request Form -->
	<div class="lg:col-span-4">
		<div class="sticky top-8 space-y-6">
			<Card.Root class="relative border-2 border-outline bg-surface-container-low p-6 shadow-none">
				<div
					class="absolute -top-3 right-4 bg-surface px-2 font-label text-[10px] tracking-widest text-outline uppercase"
				>
					Hardware_Req_v1
				</div>
				<h3
					class="mb-6 flex items-center gap-2 font-headline text-lg font-bold tracking-widest text-primary uppercase"
				>
					<span class="material-symbols-outlined">add_box</span> Request_New_Part
				</h3>
				<form class="space-y-5">
					<div>
						<Label
							for="vendor"
							class="mb-2 block font-label text-[10px] tracking-widest text-outline uppercase"
							>Vendor_Source</Label
						>
						<select
							id="vendor"
							class="w-full appearance-none border-2 border-outline-variant bg-surface-container-lowest px-3 py-2 font-mono text-xs text-on-surface outline-none focus:border-secondary"
						>
							<option>DIGIKEY_ELECTRONICS</option>
							<option>MOUSER_ELECTRONICS</option>
							<option>AMAZON_US</option>
							<option>ADAFRUIT_INDUSTRIES</option>
						</select>
					</div>
					<div>
						<Label
							for="url"
							class="mb-2 block font-label text-[10px] tracking-widest text-outline uppercase"
							>Component_URL</Label
						>
						<Input
							id="url"
							type="text"
							placeholder="HTTPS://WWW.MOUSER.COM/P/..."
							class="h-auto w-full border-2 border-outline-variant bg-surface-container-lowest px-3 py-2 font-mono text-xs text-on-surface outline-none placeholder:text-outline-variant focus:border-secondary"
						/>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<Label
								for="price"
								class="mb-2 block font-label text-[10px] tracking-widest text-outline uppercase"
								>Unit_Price</Label
							>
							<div class="relative">
								<span class="absolute top-2 left-3 text-xs text-outline-variant">$</span>
								<Input
									id="price"
									type="number"
									placeholder="0.00"
									class="h-auto w-full border-2 border-outline-variant bg-surface-container-lowest py-2 pr-3 pl-6 font-mono text-xs text-on-surface outline-none placeholder:text-outline-variant focus:border-secondary"
								/>
							</div>
						</div>
						<div>
							<Label
								for="quantity"
								class="mb-2 block font-label text-[10px] tracking-widest text-outline uppercase"
								>Quantity</Label
							>
							<Input
								id="quantity"
								type="number"
								placeholder="1"
								class="h-auto w-full border-2 border-outline-variant bg-surface-container-lowest px-3 py-2 font-mono text-xs text-on-surface outline-none placeholder:text-outline-variant focus:border-secondary"
							/>
						</div>
					</div>
					<div class="border-t border-outline-variant pt-4">
						<Button
							type="button"
							variant="outline"
							class="mb-3 flex h-auto w-full items-center justify-center gap-2 border-2 border-primary bg-surface py-6 font-headline font-bold tracking-widest text-primary uppercase shadow-none transition-all hover:bg-primary-container hover:text-on-primary active:translate-y-0.5"
						>
							<span class="material-symbols-outlined text-sm">verified</span> VERIFY_COST
						</Button>
						<Button
							type="submit"
							class="h-auto w-full bg-primary-container py-6 font-headline font-bold tracking-widest text-on-primary uppercase shadow-none transition-all hover:bg-primary-fixed-dim"
						>
							PUSH_TO_MANIFEST
						</Button>
					</div>
				</form>
			</Card.Root>

			<Card.Root
				class="border-2 border-outline-variant bg-surface-container-highest p-4 shadow-none"
			>
				<div class="mb-3 flex items-center gap-3 text-secondary">
					<span class="material-symbols-outlined">info</span>
					<span class="font-label text-[10px] font-bold tracking-widest uppercase"
						>Protocol_Reminder</span
					>
				</div>
				<p class="font-mono text-[10px] leading-relaxed text-outline">
					ALL REQUESTS ARE SUBJECT TO OPERATOR REVIEW. ENSURE QUANTITIES REFLECT EXACT PROJECT
					NEEDS. SHIPMENT BATCHING OCCURS EVERY FRIDAY AT 00:00 UTC.
				</p>
			</Card.Root>
		</div>
	</div>
</div>

<!-- BOM Table Style Footer -->
<div class="mt-20 border-t-2 border-outline-variant pt-12">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
		<div class="md:col-span-1">
			<h4 class="mb-4 font-label text-xs font-bold tracking-[0.3em] text-primary uppercase">
				System_Logs
			</h4>
			<div class="space-y-2 font-mono text-[9px] text-outline-variant">
				<div class="flex justify-between">
					<span>BOOT_HARDWARE_CHECK</span><span class="text-primary-container">PASS</span>
				</div>
				<div class="flex justify-between">
					<span>MEM_ALLOCATION</span><span class="text-primary-container">STABLE</span>
				</div>
				<div class="flex justify-between">
					<span>UPLINK_STATUS</span><span class="text-primary-container">ENCRYPTED</span>
				</div>
			</div>
		</div>
		<div class="md:col-span-3">
			<div class="flex h-full flex-col justify-end border-l border-outline-variant pl-8">
				<p
					class="font-headline text-3xl leading-none font-black tracking-tighter text-surface-container-highest uppercase opacity-50"
				>
					Sovereign_Hardware_Supply_Chain_v2024
				</p>
			</div>
		</div>
	</div>
</div>

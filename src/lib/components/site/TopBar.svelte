<script lang="ts">
	import { Settings, HelpCircle } from 'lucide-svelte';
</script>

<header
	class="fixed top-0 right-0 z-40 flex h-14 items-center justify-between gap-4 border-b-2 border-outline-variant bg-surface-container-lowest/80 px-4 backdrop-blur-md md:left-64"
>
	<span class="font-headline text-sm font-bold tracking-wider text-primary uppercase"
		>SOURCE // PROTOCOL</span
	>
	<input
		type="text"
		placeholder="SEARCH_PROTOCOL..."
		disabled
		class="mx-4 hidden max-w-md flex-1 border-2 border-outline-variant bg-surface-container px-3 py-1.5 font-mono text-xs text-on-surface-variant placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none md:block"
	/>
	<div class="flex items-center gap-1">
		<button class="p-2 text-on-surface-variant hover:text-primary">
			<Settings size={18} />
		</button>
		<button class="p-2 text-on-surface-variant hover:text-primary">
			<HelpCircle size={18} />
		</button>
	</div>
</header>

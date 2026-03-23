<script lang="ts">
	import { Users, FolderKanban, ThumbsUp } from 'lucide-svelte';
</script>

<section aria-labelledby="network-title" class="space-y-6">
	<!-- Header label -->
	<span class="block font-headline text-[10px] tracking-[0.2em] text-outline uppercase">
		PROTOCOL // PEER_VALIDATION_NETWORK
	</span>

	<!-- Title -->
	<h1
		id="network-title"
		class="crt-glow font-headline text-5xl font-black tracking-wider md:text-7xl"
	>
		COMMUNITY_PROTOCOL
	</h1>

	<!-- Subtitle -->
	<p class="font-mono text-sm text-on-surface-variant">Peer review and validation network</p>

	<!-- Stats bar -->
	<div
		class="flex flex-wrap items-center gap-6 border-2 border-outline-variant bg-surface-container-low px-6 py-3 font-mono text-xs"
	>
		<span class="flex items-center gap-2 text-primary">
			<Users class="h-3.5 w-3.5" />
			247 BUILDERS
		</span>
		<span class="text-outline">//</span>
		<span class="flex items-center gap-2 text-secondary">
			<FolderKanban class="h-3.5 w-3.5" />
			89 PROJECTS
		</span>
		<span class="text-outline">//</span>
		<span class="flex items-center gap-2 text-[#F0FF00]">
			<ThumbsUp class="h-3.5 w-3.5" />
			1.2K VOTES CAST
		</span>
	</div>
</section>

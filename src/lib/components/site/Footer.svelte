<script lang="ts">
	import { page } from '$app/state';

	const commitSha = $derived(page.data?.commitSha ?? 'dev');
</script>

<footer
	class="border-t-2 border-outline-variant bg-surface-container-lowest px-6 py-6 md:px-8 md:py-8"
>
	<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
		<p class="font-mono text-xs text-on-surface-variant">© 2025 HACK CLUB</p>
		<span class="font-mono text-xs text-on-surface-variant">
			BUILD:
			{#if commitSha !== 'dev'}
				<a
					href="https://github.com/lordbagel42/source-ysws/commit/{commitSha}"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:underline"
				>
					{commitSha.slice(0, 7)}
				</a>
			{:else}
				{commitSha.slice(0, 7)}
			{/if}
		</span>
	</div>
</footer>

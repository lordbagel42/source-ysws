<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();

	let loading = $state(false);
</script>

<h1>Hi, {data.user.name}!</h1>
<p>Your user ID is {data.user.id}.</p>
<form
	method="post"
	action="?/signOut"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update();
		};
	}}
>
	<button
		disabled={loading}
		class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
	>
		{#if loading}
			Signing out...
		{:else}
			Sign out
		{/if}
	</button>
</form>

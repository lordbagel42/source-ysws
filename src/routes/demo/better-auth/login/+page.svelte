<script lang="ts">
	import { enhance } from '$app/forms';

	let loading = $state(false);
</script>

<h1>Login</h1>
<form
	method="post"
	action="?/signInSocial"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update();
		};
	}}
>
	<input type="hidden" name="provider" value="github" />
	<input type="hidden" name="callbackURL" value="/demo/better-auth" />
	<button
		disabled={loading}
		class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
	>
		{#if loading}
			Signing in...
		{:else}
			Sign in with GitHub
		{/if}
	</button>
</form>

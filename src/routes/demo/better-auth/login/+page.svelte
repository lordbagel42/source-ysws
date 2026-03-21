<script lang="ts">
	import { authClient } from '$lib/auth-client';
</script>

<h1>Login</h1>
<div class="flex flex-col gap-4">
	<button
		type="button"
		onclick={async () => {
			await authClient.signIn.social({
				provider: 'hackclub',
				callbackURL: '/demo/better-auth'
			});
		}}
		class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
	>
		Sign in with Hack Club
	</button>
</div>

<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1>Login</h1>
<form method="post" action="?/signInOAuth" use:enhance>
	<input type="hidden" name="providerId" value="hackclub" />
	<input type="hidden" name="callbackURL" value="/demo/better-auth" />
	<button class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
		>Sign in with Hack Club</button
	>
</form>

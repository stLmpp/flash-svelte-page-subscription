<script>
	import { enhance } from '$app/forms';
</script>

<a href="/">Home</a>

<form method="POST" use:enhance>
	<button type="submit">Submit and check the console</button>
</form>

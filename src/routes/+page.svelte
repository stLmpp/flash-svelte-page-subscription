<script lang="ts">
	import { page } from '$app/stores';
	import { initFlash } from 'sveltekit-flash-message/client';

	const flash = initFlash(page);
</script>

{$flash}

<a href="/other">Other</a>

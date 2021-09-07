<script>
	import { dev } from '$app/env';		
	import '../../app.postcss';
</script>
<svelte:head>
{#if !dev}
		<script async defer data-website-id="56437991-d609-4892-8938-0b7258634e52" src="https://umami.dsoto.dev/umami.js"></script>		
{/if}
</svelte:head>


<slot />

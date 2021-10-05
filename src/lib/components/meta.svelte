<script>
    import { dev } from '$app/env';	

	export let title = 'DiapoLink - Create SlideShow Easily'
	export let description = 'Descubre que sucede en cuba contado por su blogueros'
	export let url = 'https://diapo.link'
	export let author = '@sotoplatero'
	export let isPost = 0
	export let avatar = ''
	export let image = 'https://diapo.link/img/back.jpg'

</script>

<svelte:head>
	<meta property="og:title" content="{title}">
	<meta property="og:description" content="{description}">

	<meta name="twitter:title" content="{title}">
	<meta name="twitter:description" content="{description}">
	<meta property="og:url" content="{url}">

	<meta property="og:image" content="{image}">
	<meta name="twitter:image" content="{image}">
	{#if author}
		<meta name="twitter:user" content="{author}">
	{/if}

	<link rel="canonical" href="{url}" />
</svelte:head>
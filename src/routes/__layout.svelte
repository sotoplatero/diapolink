<script>
    import "../app.css";
    import "../app.postcss";

    import { navigating } from '$app/stores';
    import { dev } from '$app/env';

    import Header from '$lib/ui/header.svelte'
    import Footer from '$lib/ui/footer.svelte'
    // import 'webslides/static/css/webslides.css'

</script>

<svelte:head>
{#if !dev}
		<script async="" defer="" data-website-id="56437991-d609-4892-8938-0b7258634e52" src="https://umami.dsoto.dev/umami.js"></script>		
{/if}
</svelte:head>

<Header/>
<slot></slot>
<!-- <Footer/> -->



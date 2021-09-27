<script context="module">
	import getPattern from '$lib/pattern'

    export async function load({page, fetch}) {

    	const res = await fetch(`/thread/${page.params.thread}.json`)
    	if (!res.ok) {
    		return null
    	}
    	const tweets = await res.json()

		const pattern = getPattern()

		return {
			props: { tweets }
		}
    }	
</script>
<script>
	export let tweets = []
</script>
<article id="webslides">
	{#each tweets as tweet, index}
		<section>
			<h2>{tweet.text}</h2>
		</section>
	{/each}
</article>
<script context="module">
	import getPattern from '$lib/pattern'

    export async function load({page, fetch}) {

    	const res = await fetch(`/thread/${page.params.thread}.json`)
    	if (!res.ok) {
    		return null
    	}
    	const {tweets,author} = await res.json()

		const pattern = getPattern()

		return {
			props: { tweets, author }
		}
    }	
</script>
<script>
	export let tweets = []
	export let author
</script>
<article id="webslides">
	{#each tweets as tweet, index}
		<section >
			<div class="wrap size-60">
				<p class="text-intro"><strong>{author.name}</strong></p>
				<h3>{tweet.text}</h3>
			</div>
		</section>
	{/each}
</article>
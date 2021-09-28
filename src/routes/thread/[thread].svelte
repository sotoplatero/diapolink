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
<article id="webslides" class="bg-apple">
	{#each tweets as tweet, index}
		<section >
			<div class="wrap size-50">
				<p class="text-intro">
					<strong>{@html author.name}</strong>
					<span class="text-gray-500">@{author.username}</span>
				</p>
				<p class="text-intro">{tweet.text}</p>
			</div>
		</section>
	{/each}
</article>
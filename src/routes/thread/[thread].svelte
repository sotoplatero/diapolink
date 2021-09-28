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
<article id="webslides" class="bg-apple h-screen !overflow-y-hidden ">
	<section class="aligncenter">
		<div class="wrap size-50">
			<img src="{author.profile_image_url}" alt="{author.name}" class="avatar-64">
			<h2><a href="{author.url}"><strong>{@html author.name}</strong></a></h2>
			<p class="text-intro">
				<span class="text-gray-500">@{author.username}</span>
			</p>
			<p class="text-intro">{@html author.description}</p>
		</div>
	</section>	
	{#each tweets as tweet, index}
		<section >
			<div class="wrap size-50">
				<div>
					<p class="text-intro">
						<img src="{author.profile_image_url}" alt="{author.name}" class="avatar-48">
						<strong>{@html author.name}</strong>
						<span class="text-gray-500">
							@{author.username}
						</span>

					</p>
					<p class="text-intro">{@html tweet.text}</p>
					
				</div>
			</div>
		</section>
	{/each}
</article>
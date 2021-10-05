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
	import Meta from '$lib/components/meta.svelte'
	import Slide from '$lib/components/slide.svelte'
	import Article from '$lib/components/article.svelte'
	export let tweets = []
	export let author = {}
	const user_url = `https://twitter.com/${author.username}`

	'https://twitter.com/intent/tweet?in_reply_to=1443976651818377249'
</script>

<Meta 
	title="Diapolink - Tread of {author.name}" 
	author={author.username}
	description={author.description}
	url={user_url}
/>
	
<Article class="bg-apple h-screen !overflow-y-hidden ">
	
<!-- <article id="webslides" class="bg-apple h-screen !overflow-y-hidden "> -->
	<section class="aligncenter">
		<div class="flex">
			<img src="{author.profile_image_url}" alt="{author.name}" class="h-10 w-10 rounded-full overflow-hidden">
			<div>
				<h1><a href="{user_url}"><strong>{@html author.name}</strong></a></h1>
				<p class="text-intro ">@{author.username}</p>
			</div>
		</div>
		<p class="text-intro whitespace-pre-line">{@html author.description}</p>
	</section>	

	{#each tweets as tweet, index}
		<Slide size="40">
		<div class="flex">
			<img src="{author.profile_image_url}" alt="{author.name}" class="h-12 w-12 rounded-full overflow-hidden">
			<div>
				<h1><a href="{user_url}"><strong>{@html author.name}</strong></a></h1>
				<p class="text-intro ">@{author.username}</p>
			</div>
		</div>
			<p class="tweet-text">{@html tweet.text}</p>
<!-- <ul class="flexblock gallery">
              <li>
                <a href="../demos/why-webslides.html" title="Why WebSlides?">
                  <figure>
                    <img alt="Thumbnail Why WebSlides?" src="https://webslides.tv/static/images/demos-why.png">
                    <figcaption>
                      <h2>Why WebSlides?</h2>
                    </figcaption>
                  </figure>
                </a>
              </li>
              <li>
                <a href="../demos/landings.html" title="Landings">
                  <figure>
                    <img alt="Thumbnail Landings" src="https://webslides.tv/static/images/demos-landings.png">
                    <figcaption>
                      <h2>Landings</h2>
                    </figcaption>
                  </figure>
                </a>
              </li>
              <li>
                <a href="../demos/portfolios.html" title="Portfolios">
                  <figure>
                    <img alt="Thumbnail Portfolios" src="https://webslides.tv/static/images/demos-portfolios.png">
                    <figcaption>
                      <h2>Portfolios</h2>
                    </figcaption>
                  </figure>
                </a>
              </li>
              <li>
                <a href="../demos/keynote.html" title="Apple Keynote">
                  <figure>
                    <img alt="Thumbnail Apple Keynote" src="https://webslides.tv/static/images/demos-apple.png">
                    <figcaption>
                      <h2>Apple Keynote</h2>
                    </figcaption>
                  </figure>
                </a>
              </li>
            </ul> -->
<!--             <ul class="flexblock gallery">	
			{#each tweet.media as media, index}
				<li>
					<img src="{media.url}" alt="">
				</li>
			{/each}
            </ul> -->
		</Slide>
	{/each}
</Article>

<style>
	.tweet-text{
		white-space: pre-line;
	}
</style>
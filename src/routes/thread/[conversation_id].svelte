<script context="module">
	import getPattern from '$lib/pattern'

    export async function load({page, fetch}) {

    	const res = await fetch(`/thread/${page.params.conversation_id}.json`)
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
	import { dev } from '$app/env';	
	import Meta from '$lib/components/meta.svelte'
	import Slides from '$lib/components/Slides.svelte'
	import Slide from '$lib/components/slide.svelte'
	import Avatar from '$lib/components/avatar.svelte'
	export let tweets = []
	export let author = {}
	const user_url = `https://twitter.com/${author.username}`
	let image

	'https://twitter.com/intent/tweet?in_reply_to=1443976651818377249'

	$: {
		const tweetWithImage = tweets.find(t=>t.media && t.media.length)
		if (tweetWithImage) {
			const imgSrc = tweetWithImage.media[0].url.replace(/^https:\/\//,'')
			image =  `${dev ? 'http://localhost:300' : 'https://diapo.link'}/og/${imgSrc}`
		}
	}
</script>

<Meta 
	title="DiapoLink - Thread of {author.name}" 
	author={author.username}
	description={tweets[0].text.replace(/\n/g,' ')}
	url={user_url}
	{image}
/>

<Slides class="bg-[#15202B] h-screen overflow-y-scroll text-white" pagination='{{ "type": "fraction"}}'>
	
<!-- <Slides id="webslides" class="bg-apple h-screen !overflow-y-hidden "> -->
	<Slide class="flex items-center h-screen w-11/12 sm:w-3/5 md:w-2/5 mx-auto">
		<div class="text-center">
			<Avatar src={author.profile_image_url} alt="{author.name}" class="w-16 h-16 mx-auto"/>
			<a href="{user_url}">
				<h1>{@html author.name}</h1>
				<p class="text-gray-500 text-xl ">
					@{author.username}
				</p>
			</a>
			<p class="mt-4 sm:text-xl">{@html author.html}</p>
		</div>
	</Slide>	

	{#each tweets as tweet, index}
		<Slide class="flex items-center h-screen w-11/12 sm:w-3/5 md:w-2/5 mx-auto">
			<div class="w-full">
			<div class="flex items-center">
				<Avatar src="{author.profile_image_url}" alt="{author.name}" class="h-8 w-8 mr-4"/>	
				<a href="{user_url}" target="_blank" class="text-base sm:text-lg !leading-snug">
					<div class="font-semibold">{@html author.name}</div>
					<div class="text-gray-500">
						@{author.username}
					</div>
				</a >
			</div>
			<p class="text-sm sm:text-base mt-2 !leading-snug ">
				{@html tweet.html}
			</p>

			{#if tweet.media && tweet.media.length}
				<Slides 
					class="mt-2" 
					pagination='{{ "clickable": true }}'
					loop={false}
				>
					{#each tweet.media as media, index}
						<Slide >
							<div class="aspect-w-4 aspect-h-3 rounded-lg !overflow-hidden">
								<img src="{media.url}" alt="Tweet from {author.username}" class="object-cover rounded-lg overflow-hidden">
								
							</div>
						</Slide>
					{/each}
				</Slides>
			{/if}
			</div>

		</Slide>
	{/each}
</Slides>

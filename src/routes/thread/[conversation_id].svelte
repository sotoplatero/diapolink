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
	import Meta from '$lib/components/meta.svelte'
	import Slides from '$lib/components/Slides.svelte'
	import Slide from '$lib/components/slide.svelte'
	import Avatar from '$lib/components/avatar.svelte'
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

<Slides class="bg-[#15202B] h-screen !overflow-y-hidden text-white" pagination='{{
  "type": "fraction"
}}'>
	
<!-- <Slides id="webslides" class="bg-apple h-screen !overflow-y-hidden "> -->
	<Slide class="text-center">
		<div class="wrap size-50">
			<Avatar src={author.profile_image_url} alt="{author.name}" class="w-16 h-16 mx-auto"/>
			<a href="{user_url}">
				<h1>{@html author.name}</h1>
				<p class="text-gray-500 text-xl ">
					@{author.username}
				</p>
			</a>
			<p class="mt-4 sm:text-2xl">{@html author.html}</p>
		</div>
	</Slide>	

	{#each tweets as tweet, index}
		<Slide >
			<div class="flex items-center">
				<Avatar src="{author.profile_image_url}" alt="{author.name}" class="h-10 w-10 mr-2"/>	
				<a href="{user_url}" target="_blank" class="text-xl">
					<div class="font-bold">{@html author.name}</div>
					<div class="text-gray-500">
							@{author.username}
					</div>
				</a >
			</div>
			<p class="sm:text-2xl mt-4 whitespace-pre-line">
				{@html tweet.html}
			</p>

			{#if tweet.media && tweet.media.length}
	      <div class="grid { tweet.media.length === 1 ? 'grid-cols-1' : 'grid-cols-2' } gap-2 mt-4">	
					{#each tweet.media as media, index}
						<picture class="aspect-w-16 aspect-h-9 ">
							<img src="{media.url}" alt="" class="object-cover rounded-2xl">
						</picture>
					{/each}
	      </div>
			{/if}

		</Slide>
	{/each}
</Slides>

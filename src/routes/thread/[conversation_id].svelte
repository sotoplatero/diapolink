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
	title="Diapolink - Thread of {author.name}" 
	author={author.username}
	description={tweets[0].text}
	url={user_url}
/>

<Slides class="bg-[#15202B] h-screen overflow-y-scroll text-white" pagination='{{ "type": "fraction"}}'>
	
<!-- <Slides id="webslides" class="bg-apple h-screen !overflow-y-hidden "> -->
	<Slide class="flex items-center h-screen w-2/5 mx-auto ">
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
		<Slide class="flex items-center h-screen w-2/5 mx-auto">
			<div class="w-full">
			<div class="flex items-center">
				<Avatar src="{author.profile_image_url}" alt="{author.name}" class="h-10 w-10 mr-4"/>	
				<a href="{user_url}" target="_blank" class="text-lg">
					<div class="font-bold">{@html author.name}</div>
					<div class="text-gray-500">
						@{author.username}
					</div>
				</a >
			</div>
			<p class="text-base sm:text-lg mt-2 !leading-tight whitespace-pre-line">
				{@html tweet.html}
			</p>

			{#if tweet.media && tweet.media.length}
				<Slides 
					class="mt-2" 
					pagination='{{ "clickable": true }}'
					loop={false}
				>
					{#each tweet.media as media, index}
						<Slide class="aspect-w-4 aspect-h-3">
							<img src="{media.url}" alt="" class="object-cover rounded-lg">
						</Slide>
					{/each}
				</Slides>
			{/if}
			</div>

		</Slide>
	{/each}
</Slides>

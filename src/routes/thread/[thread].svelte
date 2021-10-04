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
	import Slides from '$lib/components/Slides.svelte'
	import Slide from '$lib/components/Slide.svelte'
	import Avatar from '$lib/components/Avatar.svelte'
	export let tweets = []
	export let author = {}
	const user_url = `https://twitter.com/${author.username}`
</script>

<Slides class="bg-[#15202B] h-screen !overflow-y-hidden ">
	
<!-- <Slides id="webslides" class="bg-apple h-screen !overflow-y-hidden "> -->
	<Slide class="text-center">
		<div class="wrap size-50">
			<Avatar src={author.profile_image_url} alt="{author.name}" class="w-10 h-10 mx-auto"/>
			<a href="{user_url}">
				<h1>{@html author.name}</h1>
				<p class="text-gray-500 text-xl">
					@{author.username}
				</p>
			</a>
			<p class="mt-4">{@html author.description}</p>
		</div>
	</Slide>	

	{#each tweets as tweet, index}
		<Slide >
			<div class="flex items-center">
				<Avatar src="{author.profile_image_url}" alt="{author.name}" class="h-10 w-10 mr-2"/>	
				<a href="{user_url}" target="_blank">
					<div class="font-bold">{@html author.name}</div>
					<div class="text-gray-500">
							@{author.username}
					</div>
				</a >
			</div>
			<p class="mt-4 whitespace-pre-line">
				{@html tweet.text}
			</p>
<!--             <ul class="flexblock gallery">	
			{#each tweet.media as media, index}
				<li>
					<img src="{media.url}" alt="">
				</li>
			{/each}
            </ul> -->
		</Slide>
	{/each}
</Slides>

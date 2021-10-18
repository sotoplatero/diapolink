<script context="module">
    export async function load({page, fetch}) {

    	const res = await fetch(`/gallery/${page.params.username}.json`)
    	if (!res.ok) {
    		return null
    	}
    	const {tweets, author} = await res.json()
		return {
			props: { author,tweets }
		}
  }	
</script>
<script>
	import { SwiperSlide } from 'swiper/svelte';	
	import Meta from '$lib/components/meta.svelte'
	import Slides from '$lib/components/Slides.svelte'
	import Avatar from '$lib/components/avatar.svelte'
	export let tweets = []
	export let author
	let challenge = tweets[0]

</script>

<!-- <Meta 
	title="Diapolink - Challenge of {challenge.author.name}" 
	author="{challenge.author.username}"
	description={challenge.text.replace(/\n/g,'')}
	image={challenge.media.url}
	url='https://diapo.link/challenge/{thread}'
/> -->

 <div class="w-11/12 sm:w-3/4 mx-auto">
	<div class="text-center mt-12 mb-6">
		<Avatar src="{author.profile_image_url.replace('normal','bigger')}" alt="{author.name}" class="h-20 w-20 mx-auto"/>	
		<a href="https://twitter.com/{author.username}" target="_blank" class="text-lg sm:text-xl font-semibold">
			<div class="font-semibold">{@html author.name}</div>
			<div class="text-gray-500">
				@{author.username}
			</div>
		</a >
		<p class="text-lg">{author.description}</p>
	</div>

	<div class="grid grid-cols-3 md:grid-cols-4 gap-1">
		{#each tweets as tweet, index}
			<!-- <SwiperSlide class="max-h-screen h-screen flex items-center" > -->
			     	<div class="">
						<div class="aspect-w-4 aspect-h-4">
							<!-- {JSON.stringify(tweet.media)} -->
							<img  alt="" class="w-full object-cover" src="{tweet.media[0].url}" >
						</div>
				     	
			     	</div>
					
			<!-- </SwiperSlide>	 -->
		{/each}
		
	</div>
	</div>
<!-- </Slides> -->

<script context="module">
	import getPattern from '$lib/pattern'

    export async function load({page, fetch}) {

    	const res = await fetch(`/challenge/${page.params.thread}.json`)
    	if (!res.ok) {
    		return null
    	}
    	const {tweets} = await res.json()
		const pattern = getPattern()
		return {
			props: { tweets, thread: page.params.thread }
		}
  }	
</script>
<script>
	import { SwiperSlide } from 'swiper/svelte';	
	import Meta from '$lib/components/meta.svelte'
	import Slides from '$lib/components/Slides.svelte'
	import Avatar from '$lib/components/avatar.svelte'
	export let tweets = []
	export let thread
	let challenge = tweets[0]
</script>

<Meta 
	title="Diapolink - Challenge of {challenge.author.name}" 
	author="{challenge.author.username}"
	description={challenge.text.replace(/\n/g,'')}
	image={challenge.media.url}
	url='https://diapo.link/challenge/{thread}'
/>

<Slides class="h-screen !overflow-y-hidden bg-gray-800 text-white" pagination='{{ "type": "fraction"}}'>
	<SwiperSlide class="flex items-center">
	     <div class="w-2/5 mx-auto ">
	     	<div class="relative">
	     		
				<div class="aspect-w-4 aspect-h-3 mt-2 ">
					<img src="{challenge.media.url || challenge.media.preview_image_url}" alt="" class="w-full object-cover rounded-lg" loading="lazy">
				</div>
		     	
		     	<div class="mt-2">
					<div class="flex items-center justify-center">
						<Avatar src="{challenge.author.profile_image_url}" alt="{challenge.author.name}" class="h-6 w-6 mr-2"/>	
						<a href="{challenge.author.url}" target="_blank" class="text-sm">
							<div class="font-semibold">
								{@html challenge.author.name}
								<span class="text-gray-500">
										@{challenge.author.username}
								</span>
							</div>
						</a >
					</div>
					<p class="mt-2 text-base text-center">
						{ challenge.text}
					</p>
		     	</div>
	     	</div>
	     </div>
	</SwiperSlide>	

	{#each tweets.slice(1) as tweet, index}
		<SwiperSlide class="flex items-center" >
		     <div class="w-2/5 mx-auto ">
		     	<div class="relative">
		     		
					<div class="aspect-w-4 aspect-h-3 mt-2 ">
						<img data-src="{tweet.media.url || tweet.media.preview_image_url}" alt="" class="w-full object-cover rounded-lg swiper-lazy" src="data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" >
						<div class="swiper-lazy-preloader"></div>
					</div>
			     	
			     	<div class="mt-2">
						<div class="flex items-center justify-center">
							<Avatar src="{tweet.author.profile_image_url}" alt="{tweet.author.name}" class="h-6 w-6 mr-2"/>	
							<a href="{tweet.author.url}" target="_blank" class="text-sm">
								<div class="font-semibold">
									{@html tweet.author.name}
									<span class="text-gray-500">
											@{tweet.author.username}
									</span>
								</div>
							</a >
						</div>
<!-- 						<p class="mt-2 text-base">
							{ tweet.text}
						</p> -->
			     	</div>
		     	</div>
		     </div>
				
		</SwiperSlide>	
	{/each}
</Slides>

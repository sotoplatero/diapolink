<script context="module">
	import getPattern from '$lib/pattern'

    export async function load({page, fetch}) {

    	const res = await fetch(`/challenge/${page.params.conversation_id}.json`)
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

<Slides class="h-screen bg-[#15202B] text-white" pagination='{{ "type": "fraction"}}'>
	<SwiperSlide class="h-full flex items-center">
	     <div class="w-11/12 sm:w-2/4 mx-auto">
	     	<div class="relative">
	     		
		     	<div class="mb-2">
					<div class="flex items-center justify-center">
						<Avatar src="{challenge.author.profile_image_url}" alt="{challenge.author.name}" class="h-6 w-6 mr-2"/>	
						<a href="https://twitter.com/{challenge.author.username}" target="_blank" class="text-sm">
							<div class="font-semibold">
								{@html challenge.author.name}
								<span class="text-gray-500">
										@{challenge.author.username}
								</span>
							</div>
						</a >
					</div>
					<p class="mt-1 text-base text-center">
						{ challenge.text}
					</p>
		     	</div>
				<div class="aspect-w-4 aspect-h-3">
					<img src="{challenge.media.url || challenge.media.preview_image_url}" alt="" class="w-full object-cover rounded-lg" loading="lazy">
				</div>		     	
	     	</div>
	     </div>
	</SwiperSlide>	

	{#each tweets.slice(1) as tweet, index}
		<SwiperSlide class="max-h-screen h-screen flex items-center" >
		     <div class="w-11/12 sm:w-2/4 mx-auto">
		     	<div class="">
		     		
			     	<div class="">
							<a href="https://twitter.com/{tweet.author.username}" target="_blank" class="text-sm ">
						<div class="flex items-center justify-center drop-shadow-lg">
							<Avatar 
								src="{tweet.author.profile_image_url}" 
								alt="{tweet.author.name}" 
								class="h-6 w-6"
							/>	
								<div class="font-semibold ml-1 line-clamp-1">
									{@html tweet.author.name}
									<span class="text-white">
											@{tweet.author.username}
									</span>
								</div>
						</div>
							</a >
<!-- 						<p class="mt-2 text-base">
							{ tweet.text}
						</p> -->
			     	</div>
					<div class="aspect-w-4 aspect-h-3 mt-2 ">
						<img data-src="{tweet.media.url || tweet.media.preview_image_url}" alt="" class="w-full object-cover rounded-lg swiper-lazy" src="data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" >
						<div class="swiper-lazy-preloader"></div>
					</div>
			     	
		     	</div>
		     </div>
				
		</SwiperSlide>	
	{/each}
</Slides>

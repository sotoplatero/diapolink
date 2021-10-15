<script context="module">

    export async function load({page, query, fetch}) {

    	const res = await fetch(`/blog.json?url=${page.params.url}`)
    	if (!res.ok) {
			return {
				status: res.status,
				error: new Error(`Could not load ${page.params.url}`)
			};    		
    	}
    	const blog = await res.json()

		return {
			props: { blog }
		}

    }	
</script>
<script>
	import Slides from '$lib/components/Slides.svelte'
	import Slide from '$lib/components/slide.svelte'
	import Avatar from '$lib/components/avatar.svelte'
	import '$lib/random'	

	export let blog = {}
	const emoji = [ '❤️','✨','👏','👌','👍','⭐'].random()

</script>

<svelte:head>
	<meta property="og:title" content="{blog.title}">

	<!-- Twitter -->
	<meta property="twitter:title" content="{blog.title}">
	{#if blog.image}
	    <meta property="og:image" content="{blog.image}"  />
	    <meta property="twitter:image" content="{blog.image}"  />
	{/if}
</svelte:head>	

<Slides class="text-white h-screen bg-gradient-to-b from-black to-gray-800">

	<Slide class="h-screen flex items-center w-1/2 mx-auto" >
		<div class="text-center">
			
			<img src="https://logo.clearbit.com/{blog.domain}" class="h-28 w-28 mx-auto rounded-full" alt="Logo Blog">
			<a href="{blog.link}" class="space-y-4 block">
				<h1 class="leading-normal">{blog.title}</h1>	
			</a>
			<p class="uppercase text-xl mt-2">
				{blog.domain}
			</p>			
			{#if blog.description}
				<p class="text-lg">{@html blog.description}</p>
			{/if}
			<p class="text-lg mt-6">{ emoji + emoji + emoji }</p>			
			
		</div>

	</Slide>

	{#each blog.posts as post, index}
		<Slide  class="">
	<div class="bg-cover relative" style="background-image: url(/blog/i/{ post.url.replace(/https?:\/\//,'')});">
		<div class="absolute inset-0 bg-gray-800 bg-opacity-80"></div>
		<div class="relative text-center h-screen flex items-center w-1/2 mx-auto">
			
			<div>
				
				<div class="flex items-center justify-center">
					<img src="https://logo.clearbit.com/{blog.domain}" class="h-10 w-10 rounded-full mr-2">
					<span class="uppercase">{blog.domain}</span>	
				</div>
				<a href="{post.url}" target="_blank" rel="nofollower noopener">
					<h2 class="leading-tight sm:leading-snug">
						<strong>{post.title}</strong>
					</h2>
				</a>
				<p class="mb-4 text-gray-400 text-normal">
					{@html post.author}
					&bull;
					{post.date} 
				</p>
				<p class="text-intro line-clamp-3 sm:line-clamp-5">{post.excerpt}</p>
			</div>
		</div>
			
	</div>
		</Slide>
		
	{/each}

</Slides>
 
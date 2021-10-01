<script context="module">

    export async function load({page, query, fetch}) {

    	// const theme = page.params.options
    	const res = await fetch(`/blog.json?url=${page.params.url}`)

    	if (!res.ok) {
			return {
				status: res.status,
				error: new Error(`Could not load ${page.params.url}`)
			};    		
    	}
    	const blog = await res.json()

		// const pattern = getPattern()
		// const bg = bgs.random()

		return {
			props: { blog }
		}

    }	
</script>
<script>
	import {onMount} from 'svelte'   
	import Avatar from '$lib/components/avatar.svelte'
	import Slide from '$lib/components/slide.svelte'
	import '$lib/random'	

	export let blog = {}
	export let theme = ''
	let ws
	const emoji = [ '❤️','✨','👏','👌','👍','⭐'].random()

	onMount(async () => {
		await import('webslides')
		ws = new WebSlides();
	})  	

</script>
	
<article id="webslides" class="h-screen !overflow-y-hidden ">

	<section class="aligncenter h-screen">
		<div class="wrap size-60">
			<img src="https://logo.clearbit.com/{blog.domain}" class="avatar-58" alt="Logo Blog">
			<h1>{blog.title}</h1>	
			<p class="text-subtitle">
				{blog.domain}
			</p>			
			{#if blog.description}
				<p class="text-intro">{@html blog.description}</p>
			{/if}
			<p class="text-symbols">{ emoji + emoji + emoji }</p>			
		</div>
	</section>

	{#each blog.posts as post, index}
		<Slide >
			<p class="text-subtitle">
				<img src="https://logo.clearbit.com/{blog.domain}" class="avatar-40">
				{blog.domain}
			</p>
			<h2><a href="{post.url}"><strong>{post.title}</strong></a></h2>
			<p>
				{@html post.author}
				&bull;
				{post.date} 
				{#if post.time}
					&bull; {post.time} minutes
				{/if}
			</p>
			<p class="text-intro line-clamp-3 sm:line-clamp-5">{post.excerpt}</p>
		</Slide>
	{/each}

</article>
 
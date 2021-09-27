<script context="module">
	import formatSlide from '$lib/formatslide'	
	import getPattern from '$lib/pattern'

    export async function load({page, fetch}) {

    	const res = await fetch(`/blog.json?url=${page.params.url}`)
    	const blog = await res.json()

		const pattern = getPattern()

		return {
			props: { pattern, blog }
		}

    }	
</script>
<script>
	import {formatMention} from '$lib/formattext'
	export let blog = {}
</script>

<article id="webslides">

	<section class="aligncenter">
		<div class="wrap size-60">
			<p class="text-subtitle">
				{blog.domain}
			</p>			
			<h1>{blog.title}</h1>	
			{#if blog.description}
				<p>{blog.description}</p>
			{/if}
			<p class="text-symbols">⭐⭐⭐</p>			
		</div>
	</section>

	{#each blog.posts as post, index}
		<section >
			<div class="wrap size-60">
				<p class="text-subtitle">
					<img src="https://logo.clearbit.com/{blog.domain}" class="avatar-48">
					{blog.domain}
				</p>
				<h2><a href="{post.url}"><strong>{post.title}</strong></a></h2>
				<p>{post.date} 
					{#if post.time}
						&bull; {post.time} minutes
					{/if}
				</p>
				<p class="text-intro">{post.excerpt}</p>
				{#if post.author}
					<p class="text-intro">{@html formatMention(post.author)}</p>
				{/if}
			</div>
		</section>
	{/each}
</article>
 

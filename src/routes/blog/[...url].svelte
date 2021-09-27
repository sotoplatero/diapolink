<script context="module">
	import formatSlide from '$lib/formatslide'	
	import getPattern from '$lib/pattern'
	import {bgs} from '$lib/const'
	import '$lib/random'

    export async function load({page, fetch}) {

    	const res = await fetch(`/blog.json?url=${page.params.url}`)
    	const blog = await res.json()

		const pattern = getPattern()
		const bg = bgs.random()

		return {
			props: { pattern, blog, bg }
		}

    }	
</script>
<script>
	import {formatMention} from '$lib/formattext'
	import '$lib/random'	
	export let blog = {}
	export let bg
	let emoji = [ '❤️', '🔥', '✨','👏'].random()

</script>

<article id="webslides" class="{bg}">

	<section class="aligncenter">
		<div class="wrap size-50">
			<img src="https://logo.clearbit.com/{blog.domain}" class="avatar-56">
			<p class="text-subtitle">
				{blog.domain}
			</p>			
			<h1>{blog.title}</h1>	
			{#if blog.description}
				<p class="text-intro">{@html blog.description}</p>
			{/if}
			<p class="text-symbols">{ emoji + emoji + emoji }</p>			
		</div>
	</section>

	{#each blog.posts as post, index}
		<section >
			<div class="wrap size-60">
				<p class="text-subtitle">
					<img src="https://logo.clearbit.com/{blog.domain}" class="avatar-40">
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
					<p class="text-intro">
						<img src="https://unavatar.io/{post.author}" class="avatar-48">
						{@html formatMention(post.author)}
					</p>
				{/if}
			</div>
		</section>
	{/each}
</article>
 

<script context="module">
	import formatSlide from '$lib/formatslide'	
	import getPattern from '$lib/pattern'
    export async function load({page, fetch}) {

    	let slides = page.params.slides.replace(/\-/g,' ').split('/')
    	const title = slides[0].split('|')[0]
		slides = slides.map( el => formatSlide(el))

		const pattern = getPattern()

		return {
			props: { pattern, slides, title }
		}

    }	
</script>
<script>
	import { page } from '$app/stores';
	// import './_slide.postcss'
	import { onMount } from 'svelte'
	// import Footer from './_inc/footer.svelte'

	export let title
	export let pattern
	export let slides = []
	let params = $page.params.slides

	let hasPrev = false
	let hasNext = false

	onMount(()=>{
	    hasNext = !!document.querySelector('.translate-x-0').nextSibling;

		document.body.addEventListener("keyup", (e) => {
			if (e.code === 'ArrowRight') next()
			if (e.code === 'ArrowLeft') prev()
	    });
		document.body.focus()
	})

	function prev() {
	    let activeSlide = document.querySelector('.translate-x-0');
	    let prevSlide = activeSlide.previousSibling;
	    hasPrev = !!prevSlide.previousSibling
	    hasNext = !!prevSlide.nextSibling

	    if (!!prevSlide) {
		    activeSlide.classList.remove('translate-x-0');
		    activeSlide.classList.add('translate-x-full');

		    prevSlide.classList.remove('-translate-x-full');
		    prevSlide.classList.add('translate-x-0');
	    }
	}

	function next() {
	    let activeSlide = document.querySelector('.translate-x-0');;
	    let nextSlide = activeSlide.nextSibling;
	    hasPrev = !!nextSlide.previousSibling
	    hasNext = !!nextSlide.nextSibling

	    if (!!nextSlide) {
		    activeSlide.classList.remove('translate-x-0');
		    activeSlide.classList.add('-translate-x-full');
	    
		    nextSlide.classList.remove('translate-x-full');
		    nextSlide.classList.add('translate-x-0');
	    }
	}

	const ogImage = `https://cdn.statically.io/og/${title}.jpg`

</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content="{title}">	
	<meta property="og:image" content="{ogImage}" />	
	<meta property="twitter:title" content="{title}">
	<meta property="twitter:image" content="{ogImage}" />
</svelte:head>
 
<div class="slides relative w-screen h-screen overflow-hidden " style={pattern}>
	<div class="slides"  >
		{#each slides as slide, index (slide)}
		    <div class="slide absolute inset-0 w-screen h-screen text-white flex items-center justify-center px-5 md:px-20 py-10 sm:px-52 transition-all ease-in-out duration-1000 transform text-3xl sm:text-5xl sm:leading-normal bg-transparent { !index ? 'translate-x-0' : 'translate-x-full'} " >
		    	<div class="max-h-full">
			    	{@html slide}
		    	</div>
			</div>
		{/each}
	</div>
	{#if hasPrev}
		<button on:click={prev} class="absolute top-[50%] left-4 text-6xl text-white opacity-40 hover:opacity-75">
			&larr;
		</button>
	{/if}
	{#if hasNext}
		<button on:click={next} class="absolute top-[50%] right-4 text-6xl text-white opacity-40 hover:opacity-75">
			&rarr;
		</button>
	{/if}
	<Footer {params} class="absolute bottom-0 left-0 w-full m-2"/>
</div>
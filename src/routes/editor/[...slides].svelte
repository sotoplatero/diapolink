<script context="module">
	import formatSlide from '$lib/formatslide'	
	import getPattern from '$lib/pattern'
    export async function load({page, fetch}) {

    	let slides = page.params.slides.replace(/\-/g,' ').split('/')
		// slides = slides.map( el => formatSlide(el))

		return {
			props: { slides }
		}

    }	
</script>

<script>
	import { session } from '$app/stores';	
	import { browser } from '$app/env';	

	export let slides = ['']
	let url = ''

	$: if ( browser ) {
		let slideUrl = slides
			.filter( el => !!el )
			.map( el =>  el.trim().replace( /(\n\s?)+/g, '|' ) )
		$session['url'] = `/show/${ encodeURIComponent( slideUrl.join('/') ) }`
	}

	function autoGrow(e) {
		let scroll_height = e.target.scrollHeight
		let offsetHeight = e.target.offsetHeight
		// e.target.style.height = parseInt(scroll_height) +  2 + 'px'
	}

	function del(idx) {
		slides.splice(idx,1)
		slides = slides
	}

</script>
<div class="space-y-1 text-lg pt-10">
	<h1 class="text-2xl text-gray-800 font-bold mb-2">Create Presentation</h1>
<!-- 	<p>Crea una presentación agregando el texto de cada una de las diapositivas. Puedes ir revisando en la vista previa.</p> -->
	{#each slides as slide, index}
	<div>
		<div class='text-right'>
			<button on:click={ () => del(index) } class='text-sm text-gray-500 hover:text-red-500'>
				Remove
			</button>
		</div>
		<textarea
			class="w-full py-2 px-3 text-gray-600 focus:outline-none overscroll-none text-medium shadow-sm rounded-lg border border-gray-100"
			bind:value={slide}
			on:input={autoGrow}
			rows="5"
		></textarea>
	</div>
	{/each}
	<div>
		<button on:click={ () => slides = [...slides,''] } class='px-6 py-2 font-semibold bg-gray-700 hover:bg-gray-800 text-gray-100 hover:text-white rounded-lg'>
			+ Slide
		</button>
		{#if slides.join().trim() !==''}

			<a class="inline-block border-2 border-gray-300 px-6 py-2 font-semibold hover:bg-gray-100 text-gray-600" href="https://twitter.com/intent/tweet?text={encodeURIComponent(slides[0].trim())}&url=diapo.link{url}" target="_blank">
				Tweet
			</a>

		{/if}
	</div>

</div>

<style>
	p{ @apply text-lg text-gray-700 mt-2; }
	/*code{ @apply bg-gray-100 px-3 font-mono; }*/
</style>

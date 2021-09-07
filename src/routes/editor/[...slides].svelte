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
	import { browser } from '$app/env';	

	export let slides = ['']
	$: url = `/show/${slides.filter(el=>!!el).map(el=>el.trim()).join('/').trim().replace(/\n\s+/g,'\n').replace(/\n+/g,'|')}`

	function autoGrow(e) {
		console.log(e.target)
		let scroll_height = e.target.scrollHeight
		let offsetHeight = e.target.offsetHeight
		console.log(e.target.offsetHeight +' - '+ scroll_height)
		// e.target.style.height = parseInt(scroll_height) +  2 + 'px'
	}

	function del(idx) {
		slides.splice(idx,1)
		slides = slides
	}

</script>
<div class="space-y-4 text-lg mt-16">
	<h1>Nueva Presentación</h1>
	<p>Crea una presentación agregando el texto de cada una de las diapositivas. Puedes ir revisando en la vista previa.</p>
	{#each slides as slide, index}
	<div>
		<div class='text-right'>
			<button on:click={ () => del(index) } class='text-sm text-gray-500 hover:text-red-500'>
				Eliminar
			</button>
		</div>
		<textarea
			class="w-full border-2 border-gray-300 py-3 px-5 text-gray-600 min-h-48 focus:outline-none overscroll-none text-medium"
			bind:value={slide}
			on:input={autoGrow}
		></textarea>
	</div>
	{/each}
	<div>
		<button on:click={ () => slides = [...slides,''] } class='border-2 border-gray-300 px-6 py-2 font-semibold hover:bg-gray-100 text-gray-600'>
			+ Diapositiva
		</button>
		{#if slides.join().trim() !==''}

			<a class="inline-block border-2 border-gray-300 px-6 py-2 font-semibold hover:bg-gray-100 text-gray-600" href="https://twitter.com/intent/tweet?text={encodeURIComponent(slides[0].trim())}&url=diapo.link{url}" target="_blank">
				Tweet
			</a>

			<a href={url} target="_blank" class='px-6 py-2 font-semibold disabled:text-gray-300'>Vista Previa</a>

		{/if}
	</div>

</div>

<style>
	h1{ @apply text-3xl text-gray-800 font-bold mb-2; }
	/*h3{ @apply text-xl text-gray-800 font-semibold mb-2; }*/
	p{ @apply text-lg text-gray-700 mt-2; }
	/*code{ @apply bg-gray-100 px-3 font-mono; }*/
</style>


<script>
	import Slides from '$lib/components/Slides.svelte'
	import Slide from '$lib/components/Slide.svelte'

</script>

<svelte:head>
	<meta property="og:title" content="DiapoLink - Create SlideShow Easily">
    <meta property="og:image" content="https://diapo.link/img/back.jpg"  />

	<!-- Twitter -->
	<meta property="twitter:title" content="DiapoLink - Crea divertidas presentaciones desde la URL">
    <meta property="twitter:image" content="https://diapo.link/img/back.jpg"  />
    <meta property="twitter:site" content="@diapolink"  />
    <meta property="twitter:user" content="@sotoplatero"  />
</svelte:head>

<Slides >

	<Slide class="">
		<div class="text-center">

			<p class="uppercase font-light tracking-wider text-2xl">
				Diapo&bull;Link
			</p>				
			<h1 >Create SlideShow Easily</h1>
			<p class="text-2xl text-gray-600 mt-4">
				Don't waste time designed complex slides.
			</p>
			<div class="flex justify-center space-x-6 mt-8">
				<div class="column">
					<button class="button" title="Start DiapoLink">
		                Start &darr;
			        </button>
				</div>
				<div class="column">
			        <a href="https://twitter.com/intent/tweet?text=DiapoLink - Create SlideShow Easily&url=" class="button text-indigo-700"><strong>TWEET</strong></a>
				</div>
			</div>
			
		</div>		
	</Slide>

	<Slide class="bg-apple">
		<div class="wrap size-40">
			<h2 class="text-landing aligncenter">Create SlideShow Now</h2>
			<div class="grid">
				<div class="column">
					<a href="/blog" class="button">
						Blog to SlideShow
					</a>
				</div>
				<div class="column">
					<a href="/thread" class="button">
						Thread to SlideShow
					</a>
				</div>
			</div>
		</div>
	</Slide>

</Slides>




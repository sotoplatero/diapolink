
<script>
	import Slides from '$lib/components/Slides.svelte'
	import Slide from '$lib/components/slide.svelte'

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

<Slides direction={'vertical'} class="h-screen">

	<Slide class="w-11/12 sm:w-1/2 mx-auto h-screen flex items-center justify-center" >
		<div class="text-center " >

			<p class="uppercase tracking-wider text-2xl mb-3">
				<img src="/logo.png" class="w-16 h-16 rounded-md mx-auto">
				Diapo<span class="text-blue-600">&bull;</span>Link
			</p>				
			<h1 class="text-6xl font-bold"><span class="">Create</span> <br><span class="">SlideShow</span> <br><span class="">Easily</span></h1>
			<p class="text-2xl text-gray-600 mt-4">
				Don't waste time designed complex slides. Easily create presentations from a twitter thread or from a blog 
			</p>
			<div class="flex justify-center space-x-6 mt-8">
				<div class="">
					<button class="btn text-xl !bg-blue-700" title="Start DiapoLink">
		                Start &darr;
			        </button>
				</div>
<!-- 				<div class="">
			        <a href="https://twitter.com/intent/tweet?text=DiapoLink - Create SlideShow Easily&url=" class="button text-indigo-700"><strong>TWEET</strong></a>
				</div> -->
			</div>
			
		</div>		
	</Slide>

	<Slide class="w-11/12 sm:w-1/2 mx-auto h-screen flex items-center justify-center text-center">
		<div>
			<h2 class="text-5xl leading-snug font-bold">Create <br> SlideShow <br> Now</h2>
			<div class="grid grid-cols-3 gap-2">
				<a href="/blog" >
					<button class="w-full" >Blog</button>
				</a>
				<a href="/thread" >
					<button class="w-full">Thread</button>
				</a>
				<a href="/challenge" >
					<button class="w-full">Challenge</button>
				</a>
			</div>
			
		</div>
	</Slide>

</Slides>





<script>
    import {onMount} from 'svelte'	
    let ws

    onMount(async () => {
		await import('webslides')
		ws = new WebSlides();
	})	

</script>
<svelte:head>
	<meta property="og:title" content="DiapoLink - Create SlideShow Easily">
    <meta property="og:image" content="https://cdn.statically.io/og/theme=dark/DiapoLink - Crea divertidas presentaciones desde la URL.jpg"  />

	<!-- Twitter -->
	<meta property="twitter:title" content="DiapoLink - Crea divertidas presentaciones desde la URL">
    <meta property="twitter:image" content="https://cdn.statically.io/og/theme=dark/DiapoLink - Crea divertidas presentaciones desde la URL.jpg"  />
</svelte:head>

<article id="webslides" class="vertical">

	<section class="bg-black">
		<span class="background dark" style="background-image:url('/img/back.jpg')"></span>

		<!-- <span class="background dark" style="background-image:url('https://www.freepik.com/free-photo/rocks-stacked-sea_925643.htm#page=1&query=calm&position=0')"></span>		 -->
		<div class="wrap aligncenter size-60">

			<div class="content-center">
				<p class="text-subtitle">Diapo.Link</p>				
				<h1 ><strong>Create SlideShow Easily</strong></h1>
				<p class="text-intro">
					Don't waste time designed complex slides.
				</p>
				<div class="grid">
					<div class="column">
						<button on:click={ ()=>ws.goNext() } class="button" title="Start DiapoLink">
			                Start &darr;
				        </button>
					</div>
					<div class="column">
				        <a href="https://twitter.com/intent/tweet?text=DiapoLink - Create SlideShow Easily&url=" class="button ghost"><strong>TWEET</strong></a>
					</div>
				</div>
				
			</div>
		</div>		
	</section>

	<section class="bg-apple">
		<div class="wrap size-40">
			<h2 class="text-landing aligncenter">Create SlideShow Now</h2>
			<div class="grid">
				<div class="column">
					<a href="/blog" class="button">
						Blog to SlideShow
					</a>
				</div>
				<div class="column">
					<a href="/blog" class="button">
						Thread to SlideShow
					</a>
				</div>
			</div>
		</div>
	</section>

<!-- 
	<section class="aligncenter ">
		<div class="wrap">
			<h2><strong>Why use DiapoLink?</strong></h2>
		</div>
	</section>


	<section>
		<div class="wrap">
			<div class="grid vertical-align">
				<div class="column">
					<img src="/img/save-money.svg">	
				</div>
				<div class="column">
					<h2>Free</h2>
					<h3>Create endless presentations without paying a dime</h3>
				</div>
			</div>
		</div>
	</section>

	<section class="flex items-center space-x-12">
		<div class="wrap">
			<div class="grid vertical-align">			
				<div class="column">
					<img src="/img/meditation.svg">	
				</div>
				<div class="column">
					<h2>Easy</h2>
					<h3>does not require user registration just use it</h3>
				</div>
			</div>
		</div>
	</section>

	<section class="flex items-center space-x-28">
		<div class="wrap">
			<div class="grid vertical-align">			
				<div class="column">
					<img src="/img/time-managment.svg">	
				</div>
				<div class="column">
					<h2>Don't waste time</h2>
					<p class="text-intro">If you do not like to waste time designing a simple presentation, choosing colors, looking for Diapolink images is what you need</p>
				</div>
			</div>
		</div>
	</section>
 -->
</article>




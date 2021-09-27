<svelte:head>
	<meta property="og:title" content="DiapoLink - Crea divertidas presentaciones desde la URL">
    <meta property="og:image" content="https://cdn.statically.io/og/theme=dark/DiapoLink - Crea divertidas presentaciones desde la URL.jpg"  />

	<!-- Twitter -->
	<meta property="twitter:title" content="DiapoLink - Crea divertidas presentaciones desde la URL">
    <meta property="twitter:image" content="https://cdn.statically.io/og/theme=dark/DiapoLink - Crea divertidas presentaciones desde la URL.jpg"  />
</svelte:head>

<main>
	<header class="flex items-center py-16 ">
		<div>
			<h1 class="text-gray-800 text-8xl sm:text-6xl tracking-tighter mb-2">
				Create <br><span class="text-pink-700">presentations</span> easily
			</h1>
			<div class="font-light text-2xl sm:text-3xl text-gray-500 leading-relaxed mt-4 font-semibold">Don't waste time designed complex slides just paste the text and you're done</div>
			<a href="/editor" class='text-4xl py-4 px-10 transition border-2 border-pink-600 text-pink-600 inline-block mt-8 rounded'>
				Start&rarr;
			</a>
		</div>
		<div class="w-1/2 flex-shrink-0">
			<img src="/img/get-started.svg">
		</div>
	</header>

	<h2>Why use DiapoLink?</h2>

	<div class="space-y-40">

		<div class="flex items-center space-x-32">
			<div class="w-1/2 flex-shrink-0">
				<img src="/img/save-money.svg">	
			</div>
			<div>
				<h3>Free</h3>
				<p>Create endless presentations without paying a dime</p>
			</div>
		</div>

		<div class="flex items-center space-x-12">
			<div class="w-1/2">
				<img src="/img/meditation.svg">	
			</div>
			<div>
				<h3>Easy</h3>
				<p>does not require user registration just use it</p>
			</div>
		</div>

		<div class="flex items-center space-x-28">
			<div class="w-1/2 flex-shrink-0">
				<img src="/img/time-managment.svg">	
			</div>
			<div>
				<h3>Don't waste time</h3>
				<p>If you do not like to waste time designing a simple presentation, choosing colors, looking for Diapolink images is what you need</p>
			</div>
		</div>

		<div class="flex items-center space-x-12">
			<div class="w-1/2 flex-shrink-0">
				<img src="/img/focus-on-positive-activities.svg">	
			</div>
			<div>
				<h3>Pretty Format</h3>
				<p>If you do not like to waste time designing a simple presentation, choosing colors, looking for Diapolink images is what you need</p>
			</div>
		</div>
	</div>


</main>

<style>
	h2{ @apply text-3xl text-gray-800 font-bold mb-8; }
	h3{ @apply text-5xl text-gray-800 mb-2; }
	p{ @apply font-light text-3xl text-gray-700 mt-2; }
	code{ @apply bg-gray-100 px-3 font-mono; }
</style>


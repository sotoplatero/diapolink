<svelte:head>
	<meta property="og:title" content="DiapoLink - Crea divertidas presentaciones desde la URL">
    <meta property="og:image" content="https://cdn.statically.io/og/theme=dark/DiapoLink - Crea divertidas presentaciones desde la URL.jpg"  />

	<!-- Twitter -->
	<meta property="twitter:title" content="DiapoLink - Crea divertidas presentaciones desde la URL">
    <meta property="twitter:image" content="https://cdn.statically.io/og/theme=dark/DiapoLink - Crea divertidas presentaciones desde la URL.jpg"  />
</svelte:head>

<main>
	<header class="py-28">

		<h1 class="font-extrabold text-gray-800 text-4xl sm:text-6xl tracking-tighter mb-2">
			Crea <br>divertidas <span class="text-pink-700">presentaciones</span><br> desde la <span class="text-pink-700">URL</span>
		</h1>
		<div class="text-xl sm:text-3xl font-medium text-gray-500 leading-relaxed">Haz una presentación de tu <span class="font-bold">nuevo producto</span>, escribe un <span class="font-bold">mini-tutorial</span>, comparte una <span class="font-bold">historia corta</span>. <strong>DiapoLink</strong> hace presentaciones solo escribiendo la url</div>
		<a href="/editor" class='text-3xl py-7 font-extrabold hover:text-pink-700 text-pink-600 inline-block'>
			Crear Presentación &rarr;
		</a>
	</header>

	<div class="mb-16">
		<h2>¿Cómo funciona?</h2>
		<p>El servicio funciona sobre las dirección <code>/show</code> y el texto de cada diapositiva separado por slash <code>/</code>, como en una url, ejemplo:</p>
		<p>
			<a href="/show/diapositiva 1/diapositiva 2/diapositiva 3" target="_blank" class="link">/show/diapositiva 1/diapositiva 2/diapositiva 3</a>
		</p>
	</div>

	<div class="mb-8">
		<h2>Formato</h2>
		<p>DiapoLink utiliza un formato tomando como base el markdown para poder tener Títulos, <strong>negritas</strong>, <em>inclinadas</em>, cuentas de Twitter, enlaces y listas.</p>
		<p>Utiliza el carácter <code>|</code> como separador de lineas dentro de una diapositiva</p>
		<p>
			<a href="/show/título 1|contenido de la diapositiva 1/título 2|contenido de la diapositiva/título 3|contenido de la diapositiva 3" target="_blank" class="link">/show/título 1|contenido de la diapositiva 1/título 2|contenido de la diapositiva/título 3|contenido de la diapositiva 3</a>
		</p>
	</div>

	<div class="space-y-8">
		<div class="">
			<h3>Título</h3>
			<p>Utilizando el separador <code>|</code> puedes añadir las lineas que necesites. La primera de esas lineas dentro de una diapositiva será tomada como el Tiulo.</p>
			<p>
				<a href="/show/titulo de la diapositiva|es la primera línea de la diapositiva" target="_blank" class="link"> 
					/show/titulo de la diapositiva|es la primera línea de la diapositia
				</a>
			</p>
		</div>

		<div class="">
			<h3>Cuenta en Twitter</h3>
			<p>Si escribes tu cuenta a twitter iniciando con @ se creará un enlace a tu perfil</p>
			<p>
				<a href="/show/Incluye tu cuenta en twitter escribiendo tu usuario @sotoplatero" target="_blank" class="link">/show/Incluye tu cuenta en twitter escribiendo tu usuario @sotoplatero</a>
			</p>
		</div>

		<div class="">
			<h3>Enlaces</h3>
			<p>Puedes incluir tus enlaces pero solo a un dominio es decir puedes publicar tu <em>dominio.com</em> pero no a <em>dominio.com/about</em></p>
			<p>
				<a href="/show/comparte tu sitio web ej: cssfindes.xyz en cualquier diapositiva" target="_blank" class="link">/show/comparte el enlace a tu sitio web ej: cssfindes.xyz en cualquier diapositiva</a>
			</p>
		</div>

		<div class="">
			<h3>Negritas, cursivas</h3>
			<p>Solo utiliza el fomato de markdown: entre doble asterisco para <strong>**negritas**</strong>, entre asteriscos sencillos para <em>*cursivas*</em></p>
			<p>
				<a href="/show/decora el texto con **negritas** y *cursivas* e incluye code si eres " target="_blank" class="link">/show/Incluye tu cuenta en twitter escribiendo tu usuario @sotoplatero</a>
			</p>			
		</div>
	</div>

	<div class="text-center my-20 p-12 bg-pink-100">
		<!-- <h2>Me cuadra</h2> -->
		<a href="/editor" class='text-3xl font-extrabold bg-pink-700 text-white py-4 px-5 rounded-xl border inline-block'>
			Crear Presentación &rarr;
		</a>
	</div>

</main>

<style>
	h2{ @apply text-3xl text-gray-800 font-bold mb-2; }
	h3{ @apply text-xl text-gray-800 font-semibold mb-2; }
	p{ @apply text-lg text-gray-700 mt-2; }
	code{ @apply bg-gray-100 px-3 font-mono; }
</style>


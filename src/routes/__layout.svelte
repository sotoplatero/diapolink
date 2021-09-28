<script>
	import "../app.postcss";
    import { navigating } from '$app/stores';
    import {onMount} from 'svelte'
    import { session } from '$app/stores';
    import { browser } from '$app/env'
    import { dev } from '$app/env';
    import 'webslides/static/css/webslides.css'

    onMount(async () => {
		await import('webslides')
		window.ws = new WebSlides();
	})

</script>

<svelte:head>
{#if !dev}
		<script async="" defer="" data-website-id="56437991-d609-4892-8938-0b7258634e52" src="https://umami.dsoto.dev/umami.js"></script>		
{/if}
</svelte:head>

<div class="max-w-screen-lg mx-auto w-full px-2">
<!-- 	<header class="sticky top-0 z-40 py-2	bg-gray-50">
		<div class="">
		<div class="flex items-center justify-between ">

			<a href="/">
				<h1 class="text-xl sm:text-2xl py-4 font-semibold flex items-center">
					<img src="/logo.png" class="w-8 h-8 rounded-md mr-2" alt="">	
					<span class="text-gray-700">Diapo</span><span class="text-pink-700 font-semibold">Link</span>
				</h1>
			</a>

			{#if $session['url']}
				<a href={$session['url']} target="_blank" class='font-semibold disabled:text-gray-300'>Preview</a>		
			{/if}
			
		</div>
			
		</div>
	</header> -->

	<slot>

<!--   <footer class="max-w-screen-sm mx-auto mt-24 mb-12 text-sm text-center 
  space-y-4">
  	<div>Proudly develop with <a href="https://kit.svelte.dev" target="_blank" rel="nofollow noopener">SvelteKit</a>, <a href="https://tailwindcss.com" target="_blank" rel="nofollow noopener">Tailwind</a> and hosted in <a href="https://vercel.com">Vercel</a></div>

  	<div>
      If 💓 DiapoLink  follow me <a href="https://twitter.com/sotoplatero" class="text-blue-500" target="_blank" rel="me">@sotoplatero</a> for more projects like <a href="htps://cssfinder.xyz">CSSFinder</a>
    </div>
  </footer> -->

</slot></div>

<slot></slot>
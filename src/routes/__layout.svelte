<script>
	// import "../app.postcss";
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

<header role="banner">
      <nav role="navigation">
        <p class="">
        	<a href="/" title="DiapoLink">
        		<img src="/logo.png" class="h-8 w-8 rounded-lg">
	        	<strong>DiapoLink</strong>
	        </a>
        </p>
        <ul>
          <li class="github">
            <a rel="external" href="https://github.com/webslides/webslides" title="Github">
              <em>WebSlides</em>
            </a>
          </li>
          <li class="twitter">
            <a rel="external" href="https://twitter.com/webslides" title="Twitter">
<!--               <svg class="fa-twitter" viewBox="0 0 512 512">
      <path d="m481 117c-13 18-28 34-46 47 0 3 0 7 0 12 0 25-3 50-11 74-7 25-18 49-33 71-14 23-32 43-52 61-21 17-45 31-74 41-29 11-60 16-92 16-52 0-99-14-142-42 7 1 14 2 22 2 43 0 81-14 115-40-20 0-38-6-54-18-16-12-27-27-33-46 7 1 13 2 18 2 8 0 16-1 24-4-21-4-39-15-53-31-14-17-21-37-21-59l0-1c13 7 27 11 42 11-13-8-23-19-30-32-8-14-11-29-11-44 0-17 4-33 12-47 23 28 51 51 84 68 33 17 69 27 107 29-2-8-3-15-3-22 0-25 9-47 27-65 18-18 40-27 66-27 26 0 49 10 67 29 21-4 40-11 59-22-7 22-21 39-41 51 18-2 35-7 53-14z"></path>
    </svg> -->
              <em>@WebSlides</em>
            </a>
          </li>
          <!--  <li class="dribbble"><a rel="external" href="http://dribbble.com/webslides" title="Dribbble"><svg class="fa-dribbble"><use xlink:href="#fa-dribbble"></use></svg> <em>webslides</em></a></li> -->
        </ul>
      </nav>
    </header>

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

	<!-- <slot> -->

<!--   <footer class="max-w-screen-sm mx-auto mt-24 mb-12 text-sm text-center 
  space-y-4">
  	<div>Proudly develop with <a href="https://kit.svelte.dev" target="_blank" rel="nofollow noopener">SvelteKit</a>, <a href="https://tailwindcss.com" target="_blank" rel="nofollow noopener">Tailwind</a> and hosted in <a href="https://vercel.com">Vercel</a></div>

  	<div>
      If 💓 DiapoLink  follow me <a href="https://twitter.com/sotoplatero" class="text-blue-500" target="_blank" rel="me">@sotoplatero</a> for more projects like <a href="htps://cssfinder.xyz">CSSFinder</a>
    </div>
  </footer> -->

<!-- </slot></div> -->

<slot></slot>

<footer class="bg-white">
            <!--.wrap o <nav> = container 1200px -->
            <div class="wrap">
              <p>
                <span class="alignleft"><a href="https://google.com" title="Google">
                	<img src="../static/images/logos/google.svg" alt="Google"></a></span>
                <span class="alignright">
                  <a href="#" title="Twitter">
<!--                     <svg class="fa-twitter" viewBox="0 0 512 512">
                      
                    
      <path d="m481 117c-13 18-28 34-46 47 0 3 0 7 0 12 0 25-3 50-11 74-7 25-18 49-33 71-14 23-32 43-52 61-21 17-45 31-74 41-29 11-60 16-92 16-52 0-99-14-142-42 7 1 14 2 22 2 43 0 81-14 115-40-20 0-38-6-54-18-16-12-27-27-33-46 7 1 13 2 18 2 8 0 16-1 24-4-21-4-39-15-53-31-14-17-21-37-21-59l0-1c13 7 27 11 42 11-13-8-23-19-30-32-8-14-11-29-11-44 0-17 4-33 12-47 23 28 51 51 84 68 33 17 69 27 107 29-2-8-3-15-3-22 0-25 9-47 27-65 18-18 40-27 66-27 26 0 49 10 67 29 21-4 40-11 59-22-7 22-21 39-41 51 18-2 35-7 53-14z"></path>
    </svg> -->
                    @username
                  </a>
                </span>
              </p>
            </div>
          </footer>
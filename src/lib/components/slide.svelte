<script>
	import { SwiperSlide } from 'swiper/svelte';

	export let style = ''
	export {_class as class}
	let _class = ''

</script>
<SwiperSlide class="">
	<!-- BACK LAYER -->
	{#if style}
		<div {style} class="absolute top-0 left-0 w-full h-full z-0 bg-center bg-cover bg-black bg-opacity-70"></div>
		<div class="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-90"></div>
	{/if}

	<section class="relative min-h-screen w-full sm:w-2/5 mx-auto flex items-center justify-center z-30 {_class}" >
		<div class="px-4 ">
			<slot></slot>
		</div>
	</section>
</SwiperSlide>


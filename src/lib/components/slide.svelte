<script>
	import { SwiperSlide } from 'swiper/svelte';

	export let style = ''
	export {_class as class}
	let _class = ''

</script>
<SwiperSlide class="">
	<!-- BACK LAYER -->
<!-- 	{#if style}
		<div {style} class="absolute top-0 left-0 w-full h-full z-0 bg-center bg-cover bg-black bg-opacity-70"></div>
		<div class="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-90"></div>
	{/if} -->

	<section class="{_class}" >
		<slot></slot>
	</section>
</SwiperSlide>


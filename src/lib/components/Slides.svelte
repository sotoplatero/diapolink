<script>
	import { Swiper } from 'swiper/svelte';
	import { Mousewheel,Pagination,Lazy } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/mousewheel'
	import "swiper/css/pagination"
	import "swiper/css/lazy"

	export let direction = 'horizontal'
	export let pagination = true
	export {_class as class}

	let _class

</script>
<Swiper
	modules={[ Mousewheel, Pagination, Lazy ]}
	mousewheel={true}
	{pagination}
	loop={true}
	{direction}
	preloadImages={false}
	lazy={true}
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])}
	class="min-h-screen h-screen w-full {_class}"
>
	<slot></slot>
</Swiper>
<script>
	import { Swiper } from 'swiper/svelte';
	import { Mousewheel,Pagination,Lazy } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/mousewheel'
	import "swiper/css/pagination"
	import "swiper/css/lazy"

	export let direction = 'horizontal'
	export let pagination = true
	export let loop = true
	export {_class as class}

	let _class

</script>
<Swiper
	modules={[ Mousewheel, Pagination, Lazy ]}
	mousewheel={true}
	preloadImages={false}
	lazy={true}
	{pagination}
	{loop}
	{direction}
	class="{_class}"
>
	<slot></slot>
</Swiper>
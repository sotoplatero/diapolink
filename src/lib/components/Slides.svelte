<script>
	import { Swiper } from 'swiper/svelte';
	import { Mousewheel,Pagination } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/mousewheel';	
	import "swiper/css/pagination"

	export let direction = 'horizontal'
	export {_class as class}

	let _class

</script>
<Swiper
	modules={[ Mousewheel, Pagination ]}
	mousewheel={true}
	pagination={true}
	{direction}
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])}
	class="min-h-screen w-full {_class}"
>
	<slot></slot>
</Swiper>
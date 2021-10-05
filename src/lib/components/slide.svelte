<script>
	export let size = 50
	export let effect = 'fadeIn'
	export {_class as class}
	let _class
</script>
<section class="transition">
	<div class="wrap size-{size} {_class}">
		<slot/>
	</div>
</section>


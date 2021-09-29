<script>
	export let size = 50
	export let effect = 'fadeIn'
</script>
<section >
	<div class="wrap size-{size} {effect}">
		<slot/>
	</div>
</section>


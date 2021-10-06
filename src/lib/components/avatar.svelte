<script>
	export let src = ''
	export let alt = ''
	export {_class as class}
	let _class

	$: src = src ?? `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&bold=true`

</script>

<img src="{src}" class="rounded-full overflow-hidden {_class}">

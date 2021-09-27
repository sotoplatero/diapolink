<script>
	export let username = ''
	export let size = '48'

	$: src = /^@/.test(username) 
		? `https://unavatar.io/twitter/${username}` 
		: `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&bold=true`

</script>

<img src="{src}" class="avatar-{size}">

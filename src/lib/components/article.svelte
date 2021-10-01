<script>
    import {onMount} from 'svelte'	
    let ws
    let _class
    export {_class as class}

    onMount(async () => {
		await import('webslides')
		ws = new WebSlides();
	})	

</script>

<article id="webslides" class="{_class}">
	<slot></slot>
</article>
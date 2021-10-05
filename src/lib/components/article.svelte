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

<article id="webslides" class="w-full w-2/5 mx-auto min-h-screen flex justify-center text-lg sm:text-xl transition {_class}">
	<slot></slot>
</article>
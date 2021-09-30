<script context="module">
	import marked from 'marked'
    export async function load({page, fetch}) {

    	page.params.txt.split('#')
    	console.log(page.params.txt.split('#'))
    	// const theme = page.params.options
    	// const res = await fetch(`/blog.json?url=${page.params.txt}`)
    	// if (!res.ok)
    	// const blog = await res.json()

		return {
			props: {  }
		}

    }	
</script>
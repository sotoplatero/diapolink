<script context="module">
	export function load({ error, status }) {

		console.log(error)

		return {
			props: {
				// title: `${status}: ${error.message}`
				error,status
			}
		};
	}
</script>

<script>
	export let error;
	export let status;
</script>

<article >
	<section class="aligncenter bg-red">
		<h1><strong>{status}</strong></h1>
		<p class="text-intro">{error.message}</p>
		<p>Return to <a href="/" class="text-white"><strong>Home</strong></a></p>
	</section>
</article>
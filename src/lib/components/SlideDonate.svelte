<script>
	import Slide from '$lib/components/slide.svelte'
	import IconCopy from '$lib/ui/IconCopy.svelte'
	let text = 'Create slideshow of your preferred twitter threads'
	const url = encodeURIComponent('https://diapo.link')
</script>
<Slide>
	<div class="flex items-center min-h-screen w-11/12 sm:w-2/4 mx-auto">
		<div class="w-full text-center">
			<div class="text-4xl mb-4">✨</div>
			<p class="text-xl sm:text-2xl font-extrabold mb-2">Thank you for using Diapo<span class="text-blue-500">&bull;</span>Link.</p>
			<p>If you ❤️, consider a donation to continue <b>improving it</b> 🚀</p>
			<div class="mt-8">
				<a href="https://qvapay.com/payme/diapo.link" target="_blank" rel="nofollower noopener"><img src="/qvapay-logo-d.webp" alt="" class="w-40 mx-auto block"></a>
<!-- 				<p>
					<a href="https://buymeacoffee.com/diapo.link" target="_blank" rel="nofollower noopener">
						<img src="/bmc-button.png" alt="" class="w-40 mx-auto">
					</a>
				</p>
-->			</div>
			<div class="mt-8">
				<p>Or share it with your followers to make it <b>grow</b></p>
				<div class="flex items-center justify-center space-x-4 mt-4">
					<a href="https://twitter.com/intent/tweet?text={text}&url={url}&via=diapolink" target="_blank" rel="nofollower noopener"> 
						<svg class="w-8 h-8 fill-current text-[#1da1f2]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>					
					</a>
					<a href="https://www.facebook.com/sharer/sharer.php?u={url}&src=diapolink" target="_blank" rel="nofollower noopener"> 
						<svg class="w-8 h-8 fill-current text-[#1877f2]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
					</a>
					<a href="https://telegram.me/share/url?url={url}&text={text}" target="_blank" rel="nofollower noopener">
						<svg class="w-8 h-8 fill-current text-[#0088cc]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
					</a>
					
				</div>
			</div>

		</div>
	</div>
</Slide>
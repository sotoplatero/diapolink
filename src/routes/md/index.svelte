<script>
	let md = ''
	$: url = `/md/${encodeURIComponent( md ) }`
</script>


<article id="">
  
  <section class="" style="">
<!--     <span class="background-right-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span> -->
    <div class="wrap size-40 aligncenter">
<textarea
	class=""
	bind:value={md}
	rows="5"
></textarea>
<a href={url} type="submit" tabindex="2" title="URL Blog" class="button"><strong>Publish ›</strong></a>    </div>
    <!-- .end .wrap -->
  </section>
</article>
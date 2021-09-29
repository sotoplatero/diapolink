<script>
  import { goto } from '$app/navigation';  
  let tweet = ''
  $: url = `/thread/${ tweet.split('/').pop().split('?')[0] }`
</script>
<article id="">
  
  <section class="" style="">
<!--     <span class="background-right-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span> -->
    <div class="wrap size-40 aligncenter">
        <h1>Thread to Slideshow</h1>
        <p>Write some tweet url from thread to create and publish a slideshow with its tweets. 
        </p>
          <form on:submit={goto(url)}>
            <input bind:value={tweet} type="text" placeholder="Type your url blog" class="text-gray-700">
          </form>
          <p>
            
          <a href={url} type="submit" tabindex="2" title="URL Blog" class="button"><strong>Publish ›</strong></a>
          </p>
    </div>
    <!-- .end .wrap -->
  </section>
</article>
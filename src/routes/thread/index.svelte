<script>
  import { goto } from '$app/navigation';  
  let tweet = ''
  $: url = `/thread/${ tweet.split('/').pop().split('?')[0] }`
</script>
<article id="">
  
  <section class="bg-apple" style="">
<!--     <span class="background-right-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span> -->
    <div class="wrap size-50">
      <div class="content-center">
        <h1>Blog to Slideshow</h1>
        <p>Write your url blog to create and publish a slideshow with its posts. 
        </p>
          <form on:submit={goto(url)}>
            <input bind:value={tweet} type="text" placeholder="Type your url blog" required="" class="">
          </form>
          <p>
            
          <a href={url} type="submit" tabindex="2" title="URL Blog" class="button">Publish ›</a>
          </p>
      </div>
    </div>
    <!-- .end .wrap -->
  </section>
</article>
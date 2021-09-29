<script>
  import { goto } from '$app/navigation';  
  let blog = ''
  $: url = `/blog/${ blog.replace(/^https?:\/\//i,'') }`
</script>
<article id="">
  
  <section class="" style="">
<!--     <span class="background-right-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span> -->
    <div class="wrap size-40 aligncenter">
        <h1>Blog to Slideshow</h1>
        <p class="text-intro">Write your url blog to create and publish a slideshow with its posts. 
        </p>
          <form on:submit={goto(url)}>
            <input bind:value={blog} type="text" placeholder="Type your url blog" required="" class="">
          </form>
          <p>
            
          <a href={url} type="submit" tabindex="2" title="URL Blog" class="button"><strong>Publish ›</strong></a>
          </p>
    </div>
    <!-- .end .wrap -->
  </section>
</article>
<script>
  let blog = ''
  $: url = `/blog/${ blog.replace(/^https?:\/\//i,'') }`
</script>
<article id="">
  
  <section class="bg-apple" style="">
<!--     <span class="background-right-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span> -->
    <div class="wrap">
      <div class="content-left">
        <h1>Blog to Slideshow</h1>
        <p>Write your url blog to create and publish a slideshow with its posts. 
        </p>
        <div class="grid ms">
          <div class="column">
          <input bind:value={blog} type="text" placeholder="Type your url blog" required="" class="">
          </div>
          <div class="column">
          <a href={url} type="submit" tabindex="2" title="URL Blog" class="button">Publish ›</a>
          </div>
          
        </div>
        <!-- <form action="{url}" class="user" method="get"> -->
        <!-- </form> -->
      </div>
    </div>
    <!-- .end .wrap -->
  </section>
</article>
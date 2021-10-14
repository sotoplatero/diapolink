<script>
  import {goto} from '$app/navigation'
  let blog = ''
  $: url = `/blog/${ blog.replace(/^https?:\/\//i,'') }`

</script>

<article id="webslides" class="h-screen w-full sm:w-2/5 px-2 mx-auto flex items-center ">
  <section class="text-center" style="">
<!--     <span class="background-right-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span> -->
    <div class="wrap size-40 aligncenter">
        <h1>Blog to Slideshow</h1>
        <p class="text-intro">Write your url blog to create and publish a slideshow with its posts. 
        </p>
          <form on:submit|preventDefault={goto(url)} class="space-y-2 mt-6">
            <input bind:value={blog} type="text" placeholder="Type your url blog" required="" class="">
            <button type="submit" tabindex="2" title="URL Blog" class="button"><strong>Publish ›</strong></button>
          </form>
          <p>
            
          </p>
    </div>
    <!-- .end .wrap -->
  </section>

</article>
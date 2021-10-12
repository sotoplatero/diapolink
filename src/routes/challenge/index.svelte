<script>
  import { goto } from '$app/navigation';  
  let tweet = ''
  $: url = `/challenge/${ tweet.split('/').pop().split('?')[0] }`
</script>
<div class="">
  <article class="h-screen w-2/5 mx-auto flex items-center " >
    
    <section class="" >
  <!--     <span class="background-right-bottom" ></span> -->
      <div class="wrap size-40 aligncenter text-center">
          <h1 class="mb-2">Challenge to Slideshow</h1>
          <p >Type the url of some'a tweet within the challenge (thread) to create a slideshow with the images of the responses. 
          </p>
          <form on:submit|preventDefault={goto(url)} class="space-y-2 mt-6">
            <input bind:value={tweet} type="text" placeholder="Type your url tweet">
            <button type="submit" tabindex="2" title="URL Blog" class="button">
              Publish ›
            </button>
          </form>
              
      </div>
      <!-- .end .wrap -->
    </section>
  </article>
  
</div>
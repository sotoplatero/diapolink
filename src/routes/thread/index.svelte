<script>
  import { goto } from '$app/navigation';  
  let tweet = ''
  // $: url = `/thread/${ tweet.split('/').pop().split('?')[0] }`
  $: tweet_id = tweet.split('/').pop().split('?')[0]
</script>
<div class="">
  <article class="h-screen w-full sm:w-2/5 px-2 mx-auto flex items-center " >
    
    <section class="" >
  <!--     <span class="background-right-bottom" ></span> -->
      <div class="wrap size-40 aligncenter text-center">
          <h1 class="mb-2">Thread to Slideshow</h1>
          <p >Write some tweet url from thread to create and publish a slideshow with its tweets. 
          </p>
          <form 
            action="/thread/tweet/{tweet_id}" 
            method="POST"           
            class="space-y-2 mt-6"
          >
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
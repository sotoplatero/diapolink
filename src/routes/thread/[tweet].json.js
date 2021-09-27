import Twitter from 'twitter-v2';
// import Twitter from 'twitter-lite';

const t = new Twitter({
	bearer_token: import.meta.env.VITE_TWITTER_BEARER_TOKEN
	  // consumer_key: import.meta.env.VITE_TWITTER_CONSUMER_KEY,
	  // consumer_secret: import.meta.env.VITE_TWITTER_CONSUMER_SECRET,
	  // access_token_key: import.meta.env.VITE_TWITTER_ACCESS_TOKEN,
	  // access_token_secret: import.meta.env.VITE_TWITTER_ACCESS_SECRET,
});

// const user = new Twitter({
//   consumer_key: import.meta.env.VITE_TWITTER_CONSUMER_KEY,
//   consumer_secret: import.meta.env.VITE_TWITTER_CONSUMER_SECRET
// });

// const response = await user.getBearerToken();
// const t = new Twitter({
//   bearer_token: response.access_token
// });

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function get({params}) {

	const { data } = await t.get('tweets', { 
		ids: params.tweet,
		tweet: {
			fields: 'author_id,conversation_id,created_at,in_reply_to_user_id,referenced_tweets'
		},
		expansions:'author_id,in_reply_to_user_id,referenced_tweets.id',
		user: {
			fields: 'name,username'
		}
	});
	const conversationId = data[0].conversation_id

	const { data:tweets, includes, meta } = await t.get('tweets/search/recent', { 
		query: `conversation_id: ${conversationId}`,
		tweet: {
			fields: 'author_id,conversation_id,created_at,in_reply_to_user_id,referenced_tweets'
		},
		expansions:'author_id,in_reply_to_user_id,referenced_tweets.id,attachments.media_keys',
		media: {
			fields: 'duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text'
		},
		max_results: 100,
	});

	const initialTweet = includes.tweets.find( t => t.id === conversationId )

	const thread = tweets
		.filter( t => t.in_reply_to_user_id === t.author_id ) 
	console.log(thread)
	return {
		body: thread.reverse()
			.map( t => ({ 
				...t,
				media: includes.media
					.filter( m => t.attachments && t.attachments.media_keys.includes(m.media_key) )
			}))

	}

}
// https://twitter.com/m1guelpf/status/1441648726657933314?s=20

      
// curl --request GET \
//   --url 'https://api.twitter.com/2/tweets/search/recent?query=conversation_id:1279940000004973111&tweet.fields=in_reply_to_user_id,author_id,created_at,conversation_id' \
//   --header 'Authorization: Bearer $BEARER_TOKEN' 

    
      
// curl --request GET \
//   --url 'https://api.twitter.com/2/tweets?ids=1225917697675886593&tweet.fields=author_id,conversation_id,created_at,in_reply_to_user_id,referenced_tweets&expansions=author_id,in_reply_to_user_id,referenced_tweets.id&user.fields=name,username' \
//   --header 'Authorization: Bearer $BEARER_TOKEN' 

async function getTweet(id) {
	return await t.get('tweets', { 
		ids: id,
		tweet: {
			fields: 'author_id,conversation_id,created_at,in_reply_to_user_id,referenced_tweets'
		},
		expansions:'author_id,in_reply_to_user_id,referenced_tweets.id',
		user: {
			fields: 'name,username'
		}
	});
}
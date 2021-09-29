import Twitter from 'twitter-v2';
// import tweetify from '$lib/render_entities'
// import tweetToHTML from 'tweet-to-html';

const t = new Twitter({
	bearer_token: import.meta.env.VITE_TWITTER_BEARER_TOKEN
	  // consumer_key: import.meta.env.VITE_TWITTER_CONSUMER_KEY,
	  // consumer_secret: import.meta.env.VITE_TWITTER_CONSUMER_SECRET,
	  // access_token_key: import.meta.env.VITE_TWITTER_ACCESS_TOKEN,
	  // access_token_secret: import.meta.env.VITE_TWITTER_ACCESS_SECRET,
});

const options = { 
		tweet: {
			fields: 'author_id,conversation_id,created_at,in_reply_to_user_id,referenced_tweets,entities'
		},
		expansions:'author_id,in_reply_to_user_id,referenced_tweets.id,attachments.media_keys',
		user: {
			fields: 'name,username'
		},
		media: {
			fields: 'duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text'
		},		
	}

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function get({params}) {

	const conversationId = await getConversationId(params.tweet)

	const { data:tweets, includes, meta } = await t.get('tweets/search/recent', { 
		...options,
		query: `conversation_id: ${conversationId}`,
		max_results: 100,
	});

	const initialTweet = includes.tweets.find( t => t.id === conversationId )

	const { tweet: firstTweet, author} = await getTweet(conversationId)
	
	const thread = tweets
		.filter( t => t.in_reply_to_user_id === t.author_id ) 
		// .map(t=>({...t,html: tweetToHTML.parse(t) 	}))
		.reverse()

	return {
		body: {
			author,
			tweets: [ firstTweet, ...thread ]
					.map( t => ({ 
						...t,
						media: includes.media
							?.filter( m => t.attachments && t.attachments.media_keys.includes(m.media_key) )
					}))}
	}

}

async function getTweet(id) {
	const {data,includes} = await t.get('tweets', { 
		...options, 		
		ids: id,	
		user: {
			fields: 'name,username,description,profile_image_url,url'
		}, 
	});
	return { 
		tweet: {...data[0]}, 
		author: includes.users[0] 
	}
}

async function getConversationId(id){
	let tweet
	const options = { 
		ids: id,
		tweet: { fields: 'conversation_id'},
	}

	try {
		tweet = await t.get('tweets', options) ;
	} catch (e) {
		return e
	}

	return tweet.data[0].conversation_id	
}
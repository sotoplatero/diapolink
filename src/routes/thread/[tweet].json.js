import {TwitterApi} from 'twitter-api-v2';

const twitterClient = new TwitterApi(import.meta.env.VITE_TWITTER_BEARER_TOKEN);

const options = { 
		'tweet.fields': 'author_id,conversation_id,created_at,in_reply_to_user_id,referenced_tweets,entities',
		'expansions':'author_id,in_reply_to_user_id,referenced_tweets.id,attachments.media_keys',
		'user.fields': 'name,username,description,profile_image_url,url',
		'media.fields': 'duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text',
	}

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function get({params}) {


		const { data: { conversation_id } } = await twitterClient.v2.singleTweet(params.tweet,{'tweet.fields': 'conversation_id'})

		let jsConversation = await twitterClient.v2.search(`conversation_id:${conversation_id}`,{...options, max_results: 100});	
		const jsTweets = await twitterClient.v2.search(`conversation_id:${conversation_id}`,{...options, max_results: 100});	
		const tweets = jsConversation.tweets
		const includes = jsConversation.data.includes

		const { 
			data: tweet, 
			includes: { 
				users: [author] 
			} 
		} = await twitterClient.v2.singleTweet(conversation_id,options)

		const thread = tweets
			.filter( t => t.in_reply_to_user_id === t.author_id ) 
			.reverse()


	return {
		body: {
			author,
			tweets: [ tweet, ...thread ]
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

async function getconversation_id(id){
	let tweet
	const options = { 
		'ids': id,
		'tweet.fields': 'conversation_id',
	}

	try {
		tweet = await t.get('tweets', options) ;
	} catch (e) {
		return e
	}
	return tweet.data[0].conversation_id	
}
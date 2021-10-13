import {TwitterApi} from 'twitter-api-v2';
import twitter from 'twitter-text'

const tc = new TwitterApi(import.meta.env.VITE_TWITTER_BEARER_TOKEN);

const options = { 
		'tweet.fields': 'author_id,conversation_id,in_reply_to_user_id,entities',
		'expansions':'author_id,in_reply_to_user_id,referenced_tweets.id,attachments.media_keys',
		'user.fields': 'name,username,description,profile_image_url',
		'media.fields': 'media_key,preview_image_url,type,url,alt_text',
	}

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function get({params}) {


		// const { data: { conversation_id } } = await tc.v2.singleTweet(params.tweet,{'tweet.fields': 'conversation_id'})
		const conversation_id = params.conversation_id
		let jsConversation = await tc.v2.search(`conversation_id:${conversation_id} has:images`,options);	
		const jsTweetLast = await jsConversation.fetchLast(100)

		// const { 
		// 	data: tweet, 
		// 	includes: { 
		// 		users: [author] 
		// 	} 
		// } = await tc.v2.singleTweet(conversation_id,options)

		let challenge = await tc.v2.singleTweet(conversation_id,options)
		console.log(jsTweetLast.includes)
		let tweets = [...jsTweetLast.tweets, challenge.data]
		const medias = [...jsTweetLast.includes.media, ...challenge.includes.media]
		const users = [...jsTweetLast.includes.users, ...challenge.includes.users]
		
		tweets = tweets
			.filter( t =>  
				medias.some( m => 
					t.attachments.media_keys.includes(m.media_key) &&
					m.type === 'photo'
				)
		    ) 
			.reverse()
			.map( t => ({ 
				...t,
				media: medias?.find( m => 
					t.attachments.media_keys.includes(m.media_key)   
				),
				author: users?.find( u => 
					u.id == t.author_id   
				) 
			}))
			// .filter((t,i)=>i<10)

	return {
		body: {	tweets } 
	}

}

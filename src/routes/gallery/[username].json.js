import {TwitterApi} from 'twitter-api-v2';
import twitter from 'twitter-text'

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


		const username = params.username
		const {data: author} = await twitterClient.v2.userByUsername(username, {
			'user.fields': 'description,entities,id,location,name,profile_image_url,url,username'
		})

		let jsConversation = await twitterClient.v2.userTimeline( author.id, { 
			exclude: 'retweets,replies',
			...options, 
		});	

		const jsTweetLast = await jsConversation.fetchLast(100)
		const medias = jsTweetLast.includes.media 

		const tweets = jsTweetLast.tweets
			.filter( t =>  
				medias.some( m => 
					t.attachments?.media_keys.includes(m.media_key) &&
					m.type === 'photo'
				)
		    ) 
			// .reverse()
			.map( t => ({ 
				...t,
				html: twitter.autoLink(t.text),
				media: medias?.filter( m => 
					t.attachments && t.attachments.media_keys.includes(m.media_key) 
				)
			}))
			.filter((t,i)=>i<12)

	return {
		headers: { 'Cache-Control':' s-maxage=1, stale-while-revalidate' },
		body: {	author, tweets }
	}

}
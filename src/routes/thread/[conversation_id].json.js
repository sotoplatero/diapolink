import {TwitterApi} from 'twitter-api-v2';
import twitter from 'twitter-text'
import { read, create } from '$lib/supabase'

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


	const conversation_id = params.conversation_id

	const { data: savedThread, error } = await read(conversation_id)
	if (savedThread) {
		return {
			headers: { 'Cache-Control':' s-maxage=1, stale-while-revalidate' },
			body: savedThread
		}
	}

		const { 
			data: tweet, 
			includes: { users, media } 
		} = await twitterClient.v2.singleTweet(conversation_id,options)

		const author = {
			...users[0],
			html: twitter.autoLink(users[0].description)
		}

		let endTime = new Date(tweet.created_at)
		endTime.setDate(endTime.getDate() + 1)

		let jsConversation = await twitterClient.v2.userTimeline( author.id, { 
			since_id: conversation_id,
			end_time: endTime.toISOString(),
			...options, 
		});	

		const jsTweetLast = await jsConversation.fetchLast(100)
		
		const includesMedia = jsTweetLast.includes?.media || [] 
		const authorMedia = media || []
		const medias = [ ...includesMedia, ...authorMedia ]

		const tweets = jsTweetLast.tweets
			.filter( t => 
				t.in_reply_to_user_id === t.author_id && 
				t.conversation_id == conversation_id 
			)
			.concat([tweet])
			.reverse()
			.map( t => ({ 
				...t,
				html: twitter.autoLink(t.text),
				media: medias?.filter( m => 
					t.attachments && t.attachments.media_keys.includes(m.media_key) 
				)
			}))		

		// const response = await create({conversation_id,author,tweets})
		// console.log(response.error)

	return {
		headers: { 'Cache-Control':' s-maxage=1, stale-while-revalidate' },
		body: {	author ,tweets }
	}

}
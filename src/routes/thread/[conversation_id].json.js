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


		const conversation_id = params.conversation_id
		const { 
			data: tweet, 
			includes: { users: [author], media} 
		} = await twitterClient.v2.singleTweet(conversation_id,options)

		let endTime = new Date(tweet.created_at)
		endTime.setDate(endTime.getDate() + 1)

		let jsConversation = await twitterClient.v2.userTimeline( author.id, { 
			since_id: conversation_id,
			end_time: endTime.toISOString(),
			...options, 
		});	

		const jsTweetLast = await jsConversation.fetchLast(100)
		const medias = [...(jsTweetLast.includes?.media || []), ...(media||[])]

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

	return {
		body: {
			author: {
				...author,
				html: twitter.autoLink(author.description)
			},
			tweets, 
		}
	}

}
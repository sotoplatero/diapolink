import {TwitterApi} from 'twitter-api-v2';

const tc = new TwitterApi(import.meta.env.VITE_TWITTER_BEARER_TOKEN);

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function post({params}) {

	const { data: { conversation_id } } = await tc.v2.singleTweet(params.id,{'tweet.fields': 'conversation_id'})

	return {
		headers: {
			'Location': `/thread/${conversation_id}`
		},
		status: 301

	}

}

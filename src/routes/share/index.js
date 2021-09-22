import { createClient } from 'redis';

const upstash_url = 'https://eu1-trusting-cattle-32715.upstash.io'

export async function post({ body }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const url = body.get('url');

	var client = createClient ({
	    socket: {
	        url: import.meta.env.VITE_REDIS_URL
	    }
	});

	client.on("error", function(err) {    
		throw err;  
	});

	client.set('slug','bar');
	const slug = await client.get('slug');

	return {
		body: {
			slug
		}
	};
}


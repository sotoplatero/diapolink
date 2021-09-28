import Parser from 'rss-parser';
import cheerio from 'cheerio';
import { getDomain } from 'tldts'

// import '$lib/random'
let parser = new Parser()
/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function get({query}) {
	let url = query.get('url')
	console.log(url)
	url = /^http/.test(url) ? url : `https://${url}`

	const res = await fetch(url)
	if (!res.ok) {
		return {
			status: 404,
			body: {}
		}		
	}
	const html = await res.text()
	$ = cheerio.load( html)
	let rss = $('link[type="application/rss+xml"],link[type="application/atom+xml"]').attr('href')
	let creator = $('meta[name="twitter:site"],meta[name="twitter:user"],meta[property="twitter:site"],meta[property="twitter:user"]')?.attr('content')
	let description = $('meta[property="description"],meta[name="description"],meta[property="og:description"]').attr('content')
	rss = getDomain(rss) ? rss : url + rss
	const feed = await parser.parseURL( rss );

	const cpm = 225 // characters per minutes
	// const content = (post.contentSnippet || post.content)
	const blog = {
		title: feed.title,
		description: feed.description ?? description,
		url: feed.link,
		domain: getDomain(rss),
		posts: feed.items
			.map( post => {
				const $ = cheerio.load( post.contentSnippet || post['content:encoded'] )
				const content = $.text()
				return {
					title: post.title,
					url: post.link,
					date: new Date(post.pubDate).toLocaleDateString(),
					time: Math.floor( content.length / cpm ),
					excerpt: (post.description || content).slice(0,280),
					author: post.creator ?? creator,
				}
			})
		}

	return {
		body: blog
	};

}

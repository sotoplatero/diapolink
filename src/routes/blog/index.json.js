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
	url = /^http/.test(url) ? url : `https://${url}`

	const res = await fetch(url)
	if (!res.ok) {
		return {
			status: 404,
			body: {}
		}		
	}
	const html = await res.text()

	const $ = cheerio.load(html)
	let rss = $('link[type="application/rss+xml"],link[type="application/atom+xml"]').attr('href')
	rss = getDomain(rss) ? rss : url + rss
	const feed = await parser.parseURL( rss );

	return {
		body: { 
			...feed.items
				.filter( (i,idx) => idx <= 3 )
				.map( ({title,link,contentSnippet}) => ({
					title: title,
					url: link,
					excerpt: contentSnippet.slice(0,280) 
				}) )	
		}
	};

}

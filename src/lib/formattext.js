
export function formatMention(str){
	const linkUser = '<a href="https://twitter.com/$1" target="_blank" rel="nofollover noopener">$&</a>'
	return str.replace(/@([a-zA-Z0-9]+)/ig, linkUser)
}

export default function (str){
	const replaceMention = '<a href="https://twitter.com/$1" target="_blank" rel="nofollover noopener">$&</a>'
	const replaceURL = '<a href="https://$&" target="_blank" rel="nofollover noopener">$&</a>'	
	const replaceHashtag = '<a href="https://twitter.com/hashtag/$1?src=hash">#$1</a>'

	reURL =  /(ftp|https?):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/

	return str
		.replace(reURL,replaceURL)
		.replace(/@([a-zA-Z0-9]+)/ig, replaceMention)
		.replace(/#\w/ig, replaceHashtag)

}
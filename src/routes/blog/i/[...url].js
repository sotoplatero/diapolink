import cheerio from 'cheerio'
import '$lib/slugify'

export async function get({params}) {

    const res = await fetch(`http://${params.url}`)

    if (res.ok) {
        const html = await res.text()
        const $ = cheerio.load(html)

        let src = $('meta[name="og:image"],meta[property="og:image"]')?.attr('content')

    	if (src) {
            const resImage = await fetch(src)
            const buffer = await resImage.arrayBuffer()

            return {
                headers: { 
                    'Content-Disposition': `attachment; filename="${src.replace('/','-')}"`,
                    'content-type': resImage.headers.get('content-type'),
                    'Cache-Control': `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`,
                },
                body: new Uint8Array(buffer)
            }; 
        }

    }
    
    const image = await fetch('/img/black.png').then(res=>res.arrayBuffer())

    return {
        headers: { 
            'content-type': 'image/png',
            'Cache-Control': `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`,
        },        
        body: new Uint8Array(image)
    }


}
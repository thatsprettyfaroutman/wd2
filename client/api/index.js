import rss from 'rss-parser-browser'



export const getBlogPosts = async () => {
  let feed = await fetch('http://blog.wunder.dog/rss.xml')
  feed = await feed.text()
  feed = await ( new Promise(resolve => {
    rss.parseString(feed, (_, res) => resolve(res))
  }))
  const entries = (feed && feed.feed && feed.feed.entries) || []
  return entries.map(entry => {
    const image =
      entry.content.match(/(https\:\/\/blog\.wunder.*?\.(jpg|png|gif))/)[0]
    return {
      ...entry,
      image,
    }
  })
}

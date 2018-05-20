// Setup express to handle Web requests

import compression from 'compression'
import express from 'express'
import path from 'path'
import middleware from './middleware'
import favicon from '../client/favicon.ico'

const app = express()

// Add gzip compression to responses
app.use(compression())

// Favicon
const faviconFileName = favicon.slice(favicon.lastIndexOf('/') + 1)
app.use('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, `../client/${faviconFileName}`)))

// Expose the public directory as /dist and point to the browser version
app.use('/dist', express.static(`${__dirname}/../client`))

// Anything unresolved is serving the application and let
// react-router do the routing!
app.get('/*', middleware)

// Check for PORT environment variable, otherwise fallback on Parcel default port
console.log('PORT', process.env.PORT)
const PORT = process.env.PORT || 1234
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT, '...')
})

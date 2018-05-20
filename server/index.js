console.log('typeof window', typeof window)

if (typeof window === 'undefined') {
    global.window = null
}

require('babel-register')({})
require('babel-polyfill')
require('./App')

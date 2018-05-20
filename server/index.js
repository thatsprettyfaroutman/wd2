if (typeof window === 'undefined') {
    global.window = {}
}

require('babel-register')({})
require('babel-polyfill')
require('./App')

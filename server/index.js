console.log('DISPORT', process.env.PORT)

require('babel-register')({})
require('babel-polyfill')
require('./App')

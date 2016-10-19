const createStore = require('redux').createStore
const reducer = require('./reducer')

module.exports = createStore(reducer)

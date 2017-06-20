/**
 * Created by JUEXINPC-008 on 2017/6/20.
 */
// node 8.0
const {promisify} = require('util')

const fs = require('fs')

const readFileAsync = promisify(fs.readFile)

readFileAsync('./test.js').then(res => {
    console.log(res)
})

/**
 * Created by Administrator on 2017/9/4.
 */

var fs = require('fs')
var {promisify} = require('util')

var readFileAsync = promisify(fs.readFile)

var p1 = readFileAsync('./sample1.txt','utf8')
var p2 = readFileAsync('./sample2.txt','utf8')
var p3 = readFileAsync('./sample3.txt','utf8')

try {
  p1.then((data) => {
    console.log(data)
    p2.then((data) => {
      console.log(data)
      p3.then((data) => {
        console.log(data)
      })
    })
  })
} catch (error) {
  throw error
}


/**
 * Created by Administrator on 2017/6/7.
 */

var fs = require('fs')

fs.watch('./bb.txt', function (event,filename) {
  console.log(event)
  console.log(filename)
})
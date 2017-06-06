/**
 * Created by JUEXINPC-008 on 2017/6/6.
 */
var fs = require('fs')

var txt = '好好学习!'
fs.writeFile('bb.txt',txt,function (err) {
    if (err) {
      throw err;
    }
    console.log('File Saved')
})
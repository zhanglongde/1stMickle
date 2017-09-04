/**
 * Created by Administrator on 2017/9/4.
 */

var fs = require('fs')

fs.readFile('./sample1.txt','utf8', function (error,data) {
  return new Promise((resolve,reject) => {
    if (error) { // 文件不存在等异常
      reject(error)
    }
    resolve(data)
  })
}).then(data => {
  console.log(data)
  fs.readFile('./sample2.txt','utf8', function (error,data) {
    return new Promise((resolve,reject) => {
      if (error) {
        reject(error)
      }
      resolve(data)
    })
  })
}).then(data => {
  console.log(data)
  fs.readFile('./sample3.txt','utf8', function (error,data) {
    if (error) {
      throw error
    }
    console.log(data)
  })
})
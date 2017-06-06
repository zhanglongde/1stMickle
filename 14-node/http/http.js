/**
 * Created by JUEXINPC-008 on 2017/6/6.
 */

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req,res) {
  fs.readFile('bb.html','utf8', function (err,data) {
      if (err) {
        res.writeHead(500,{'Context-Type':'text/plain'})
        res.end('error!')  
      } else {
          res.writeHead(200,{'Content-Type':'text/html'})
          res.write(data)
          res.end()
      }
  })
})

server.listen(8888)

console.log('server run at port 8888')
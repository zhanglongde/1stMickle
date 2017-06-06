/**
 * Created by JUEXINPC-008 on 2017/6/6.
 */
var fs = require('fs')

fs.readFile('./bb.txt','utf8',function(error,data){
    if (error) {
     throw error;
    }
    console.log(data)
})

var express = require('express'),
	app = express();

//*************************** handler ***************************
var handlers = {
	'get': {
		'/': {
			getKey : 'Welcome to Simple Node  WebServer!'
		},
		'/test1':'test1',
		'/test2':'test2'
	},
	'post': {
		'/test': {
			postKey : 'post测试数据'
		}
	},
	'options':{
		'/*': {
			status: 'options ok!'
		}
	}

};

function doHandler(method, handle){
	for(var path in handle){
		if(handle.hasOwnProperty(path)){
			(function(path){
				app[method](path, function(req, res) {
					res.writeHead(200,{
// 						'Content-Type': 'text/json;charset=UTF-8',
						'Content-Type': '*',
						'Access-Control-Allow-Credentials': true,
						'Access-Control-Allow-Headers': 'x-requested-with,Content-Type',
						'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
// 						'Access-Control-Allow-Origin': req.headers.origin || req.headers.host,
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Max-Age': 3600,
						'Server': 'Node WebServer',
						'Website': 'https://github.com/Louiszhai/node-webserver'
					});
					res.write(JSON.stringify(handle[path]));
					res.end();
				});
			})(path);
		}
	}
}

for(var method in handlers) {
	if (handlers.hasOwnProperty(method)) {
		doHandler(method, handlers[method]);
	}
}
//*************************** handler ***************************
//var bodyParser = require('body-parser');
//app.use(bodyParser({ uploadDir: './upload' }));

app.use(express.static('./'));
app.listen(10108, function(){
	console.log('listening on *:10108');
});
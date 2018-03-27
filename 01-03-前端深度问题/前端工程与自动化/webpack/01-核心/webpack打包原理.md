
chunk
1.运行时 manifest.json
2.公共第三方代码 vendor.js
3.业务代码 app.js


chunk有3种类型，其中webpackJsonP,__webpack_require__对应了包含的模块，经过编译后形成的闭包


模块
传入参数source map
返回新资源
利用node.js
this.callback
https://github.com/jimuyouyou/node-interview-questions

Node核心内置类库（事件 流 文件 网络）
1.Node概览
1.1为什么要用node?
轻量可以扩展
海量第三方应用组件
1.2node的架构是什么样子的？
主要分为三层：应用app V 8及node内置架构 操作系统
node内置架构又可以分为三层：核心模块（js实现） C++绑定 libuv等
1.3node有哪些核心模块
EventEmitter Stream FS Net和全局对象


2.Node全局对象
2.1node有哪些全局对象
process Buffer exports
2.2process有哪些常用方法
process.stdin process.stdout
2.3console有哪些常用方法
2.4node有哪些定时功能
process.nextTick()
setImmediate
2.5node种的事件循环是什么样子的？
总体上执行顺序是:process.nextTick setImmediate setInterval
2.6node种的Buffer如何应用？
buffer用来处理二进制数据

3.EventEmitter

4.Stream

5.文件系统
5.1内置的fs模块架构是什么样子的？
POSIX文件Wrapper
文件流
同步文件读写
异步文件读写
5.2读写一个文件有多少种方法？
第一，node内置require,直接得到js对象
      node缓存机制造成只有一个js模块对象
第二，读文件，然后JSON.parse
5.3怎么读取json配置文件？
5.4fs.watch和fs.watchFile有什么区别，怎么应用？
fs.watch利用操作系统原生机制来监听
fs.watchFile定期检查文件状态变更，适用于网络文件系统，比fs.watch慢

6.网络
6.3实现一个简单的http服务器
var http = require('http')
http.createServer(function(req,res){
  res.writeHead()
  res.write()
  res.end()
}).listen(8080)

7.child_process



Node高级话题



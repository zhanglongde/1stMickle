https://www.zhihu.com/question/20215561
websocket原理
持久连接，如何维持？
服务器和客户端之间发送Ping/Pong Frame，这种frame只包含一些元数据而不需要真正的Data Payload
每个WebSocket连接都始于一个HTTP请求 Upgrade:websocket,如果服务器支持新的协议，则返回101
WebSocket基于http协议，或者说借用了http协议来完成一部分握手.WebSocket使用HTTP Upgrade机制升级到Web Socket协议。HTML5 Web Sockets有着兼容HTTP的握手机制
WebSocket解决的第一个问题：通过第一个Http request 建立了TCP连接之后，之后的交换数据都不需要在发送Http request,使得这个长连接变成一个真长连接,不需要发送http header就能交换数据

WebSocket两个版本
ws =>http 80
wss =>https 443
WebSocket可以和Http Server共享同一port

WebSocket实践
使用心跳维护WebSocket链路，探测客户端端的网红/主播是否在线
设置负载均衡7层的proxy_read_timeout默认为60s
设置心跳为50s，即可长期保持WebSocket不断开


http不支持持久连接
长连接keep-alive、循环连接不算持久连接
keep-alive connection 是指在一次 TCP 连接中完成多个 HTTP 请求，但是对每个请求仍然要单独发 header；
polling 是指从客户端（一般就是浏览器）不断主动的向服务器发 HTTP 请求查询是否有新数据。



WebSocket与Http
首先，Websocket是一个持久化的协议，相对于HTTP这种非持久的协议来说。简单的举个例子吧，
用目前应用比较广泛的PHP生命周期来解释。
1) HTTP的生命周期通过Request来界定，也就是一个Request 一个Response，那么在HTTP1.0中，这次HTTP请求就结束了。
在HTTP1.1中进行了改进，使得有一个keep-alive，也就是说，在一个HTTP连接中，可以发送多个Request，
接收多个Response。但是请记住 Request = Response ，
在HTTP中永远是这样，也就是说一个request只能有一个response。而且这个response也是被动的，不能主动发起。


WebSocket与长连接 循环连接 keep-alive http2.0多路复用的区别








学习WebSocket协议—从顶层到底层的实现原理（修订版）
https://github.com/abbshr/abbshr.github.io/issues/22
设计哲学
websocket 基于frame而非stream,即数据传输不像创痛的流式读写一样按字节发送，而是采用一帧一帧的frame
每个frame定义了严格的数据结构


https://www.zhihu.com/question/20215561
websocket原理


websocket与Http
首先，Websocket是一个持久化的协议，相对于HTTP这种非持久的协议来说。简单的举个例子吧，
用目前应用比较广泛的PHP生命周期来解释。1) HTTP的生命周期通过Request来界定，
也就是一个Request 一个Response，那么在HTTP1.0中，这次HTTP请求就结束了。
在HTTP1.1中进行了改进，使得有一个keep-alive，也就是说，在一个HTTP连接中，可以发送多个Request，
接收多个Response。但是请记住 Request = Response ，
在HTTP中永远是这样，也就是说一个request只能有一个response。而且这个response也是被动的，不能主动发起。


websocket与长连接 循环连接 keep-alive http2.0多路复用的区别

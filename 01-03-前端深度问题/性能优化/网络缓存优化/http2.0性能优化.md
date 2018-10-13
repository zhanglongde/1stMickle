http1.1
资源外链
通常资源都会部署在CDN，这样用户可以从离自己最近的节点上获取数据
一般文本文件都会采用gzip压缩，实际传输大小是文件大小的几分之一
服务端托管静态资源的效率非常高，服务端处理时间几乎可以忽略。



在忽略网络因素、传输大小以及服务端处理时间之后，用户合适能加载完外链资源，
很大程度上取决于《请求何时能发出去》，这主要受三个因素影响:
1.浏览器阻塞Stalled:浏览器会因为一些原因阻塞请求。例如rfc规定域名并发连接数
2.DNS查询DNS Lookup
  DNS会被缓存一段时间，但是第一次访问或者缓存失效，可能耗时即使到几百毫秒
3.建立连接Initial Connection
  http基于TCP协议，三次握手耗时



解决
1.http缓存 适用于强网环境
2.第一次访问资源内联，页面加载完成之后异步加载这些资源的外链版本
 缺点：浪费流量
3.localStorage缓存 适用于移动端弱网环境
4.http2.0
server push预加载
multiplexing 多路复用
https://imququ.com/post/http2-and-wpo-2.html
https://zhuanlan.zhihu.com/p/26519760?from=timeline&amp;isappinstalled=0
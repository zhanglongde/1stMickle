http1.0 1996
http1.1 1999
http2.0 2015 =>es2015

https://www.nihaoshijie.com.cn/index.php/archives/630/
http的基本优化
1.带宽
2.延迟
  2.1浏览器阻塞  浏览器限制同一域名连接数
  2.2DNS查询
  2.3建立连接
  
  
http1.x现存的问题
与Http2
1.传输内容明文，客户端和服务器端无法验证对方身份
2.Header携带内容过大，增加传输成本
3.传输数据每次都需要建立连接，增加大量延迟时间
4.尽管支持keep-alive,弥补多次创建连接产生的延迟，
但keep-alive使用多了同样会给服务端带来大量性能压力
与https
1.明文
2.无身份验证
3.无法证明报文完整性？？？


https
1.需要到CA申请证书
2.ssl/tsl加密传输协议
3.端口号443
加密 身份验证 报文完整性


https://github.com/ccforward/cc/issues/36
http2.0  Web性能权威指南
1.服务器推 server push
2.多路复用multiplexing=>keep alive
  连接共享，不需要反复建立连接
3.压缩头部HeaderCompression HPACK算法
4.解析基于二进制格式
  基于二进制更健壮，http1.x基于文本
5.强制加密


前端工程师学习Nginx实践配置HTTP2.0篇
http://cnt1992.xyz/2016/04/08/upgrade-nginx-to-http2/
1.增加二进制分帧 在应用层和传输层之家增加了一个二进制分帧层
将所有传输的信息分割为更小的消息和帧，并对他们此阿勇二进制格式的编码
headers帧 data帧
2.压缩头部
3.多路复用 避免请求阻塞
4.请求优先级 流里面有个优先级
5.服务器推 实现预加载
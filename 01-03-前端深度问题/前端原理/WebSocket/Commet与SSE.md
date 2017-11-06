Comet
Comet 是对 Ajax 的进一步扩展，让服务器几乎能够实时地向客户端推送数据。
实现 Comet 的手段主要有两个：长轮询和 HTTP 流。所有浏览器都支持长轮询，而只有部分浏览器原生支持 HTTP 流。


SSE
SSE（Server-Sent Events，服务器发送事件）是一种实现 Comet 交互的浏览器 API，既支持长轮询，也支持
HTTP 流。
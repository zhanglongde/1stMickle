gzip工作原理图
1)浏览器请求url，并在request header中设置属性accept-encoding:gzip。表明浏览器支持gzip。
2)服务器收到浏览器发送的请求之后，判断浏览器是否支持gzip，
  如果支持gzip，则向浏览器传送压缩过的内容，不支持则向浏览器发送未经压缩的内容。一般情况下，浏览器和服务器都支持gzip，response headers返回包含content-encoding:gzip。


gzip压缩比：1-9
压缩率决定因素：代码相似率
              对于静态资源量非常大的网站，开启gzip可节省大量流量


deflate与gzip使用的压缩算法几乎相同
sdch是Google推出的，目前只在Google Chrome, Chromium 和Android中支持

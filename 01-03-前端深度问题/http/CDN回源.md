CDN 回源过程：

第一次回源，如果源站返回 Last-Modified 头，CDN 会记录下来；

CDN 的文件过期后，如果源站之前已经返回了 Last-Modified 头，就以 If-Modified-Since 头(内容是 源站返回的Last-Modified 值) 来访问源站，如果文件未变更，则返回 304；
如果之前源站没返回  Last-Modified 头，则会下载整个文件，源站返回 200。
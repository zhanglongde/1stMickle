使用场景
随着服务器性能逐渐变强，一台服务器会部署多个 SSL 证书服务多个站点（CDN 是最典型的）。
服务端需要客户端先告知正准备访问的网站域名（Header 中 Host 字段），然后服务端才能发送正确的 SSL 证书信息和客户端来 SSL 握手



SNI，是 TLS 的一个扩展
有了 SNI，服务端可以通过 Client Hello 中的 SNI 扩展拿到用户要访问网站的 Server Name，进而发送与之匹配的证书，顺利完成 SSL 握手。
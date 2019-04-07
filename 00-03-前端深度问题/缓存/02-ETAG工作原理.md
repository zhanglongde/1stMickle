http://yangfch3.com/2016/11/12/%E7%BC%93%E5%AD%98%EF%BC%8C%E7%9C%8B%E8%BF%99%E4%B8%80%E7%AF%87%E5%B0%B1%E5%A4%9F%E4%BA%86/

ETAG
验证令牌，该令牌在缓存不符合cache-control规则时起作用
etag内容:通常是文件内容的哈希值或者某个其他指纹码

etag&if-none-match
1.etag由服务器生成，由response header（响应报文头）-etag字段携带传送给客户端进行保存，
2.当浏览器在资源过期后再次请求时，浏览器会默认在request header（请求报文头）中添加if-none-match字段，携带缓存的etag值给服务进行验证

服务器验证
如果指纹码仍然一致，说明资源未被修改，返回304，继续延长cache-control


总结
1.etag在缓存过期(过了cache-control指定期限)之后起作用
2.etag在缓存过期之后判定是对缓存(续命)还是(更新)



revalidation返回状态码
200 已修改
304 not modified
404 已删除
http://code.leozhang2018.me/2016/04/15/%E5%AE%9A%E4%B9%89%E6%9C%80%E4%BC%98%E7%9A%84%20HTTP%20Cache-Control%20%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5/
http://liujinkai.com/2015/08/13/http-cache/

RFC定义的cache-control常用基本策略
no-store 直接禁止浏览器以及所有中继缓存缓存返回的任何版本的响应
no-cache 表示客户端必须先和服务器确认返回的响应是否被更改，
         然后才能使用该响应来满足后续对同一网址的请求
         如果设置了etag，no-cache会发起往返通信来验证缓存的响应
public
private 任何中继缓存都无法对齐进行缓存，可以防止CDN进行缓存
max-age 从当前请求开示，允许资源被重用的最长时间
        浏览器缓存过期的相对时间


http caching 最佳实践
1.是否重用响应reusable response，否:no-store
2.是否每次都生效revalidate each time，是：no-cache
3.能否被中继缓存 cacheable by intermediate caches，是：public，否：private
4.最大缓存时间？max-age=
5.添加etag首部


更新已缓存的资源
给每一个文件资源分配一个fingerprint指纹码或者版本号


缓存层级
/page HTML cache-control:no-cache 每次请求都会重新验证文档
    样式 /style.fingerprint.css cache-control:max-age
    脚本 /script.fingerprint.js cache-control:private,max-age 包含了CDN不应缓存的一些用户私人数据
    图片 /photo.jpg cache-control:max-age


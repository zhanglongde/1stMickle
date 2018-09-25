Cookie几个字段
key value
过期时间
domain 二级域名
path secure
http-only 是否允许通过JS来读写
host-only=>sameSite 可用于防范CSRF

读取cookie，key=value;key=value;




https://imququ.com/post/host-only-cookie.html
https://segmentfault.com/a/1190000004556040
[把cookie聊清楚](https://juejin.im/post/59d1f59bf265da06700b0934?utm_source=gold_browser_extension)

## cookie规范 ##
规范 rfc6265
cookie作用
保存用户相关信息

## cookie原理 ##
cookie以文本键值对的形式存储
为每一个来访者建立一个唯一的ID号码，并且将这个号码存储到每个来访者的机器的Cookies中

类似二维码扫码登录

## cookie跨域 ##
获取Cookie时，首先要检查Domain匹配性，其次才检查path secure http-only等属性的匹配性
如果host-only-flag为true时，只有当前域名与该Cookie的Domain属性完全相等才可以进入后续流程
如果host-only-flag为false时，符合域规则的域名都可以进入后续流程。

举个例子，
host-only-flag为true时，Domain属性为example.com的Cookie只有在example.com才有可能获取到；
（跨二级域名）host-only-flag为false时，Domain属性为example.com的Cookie，在example.com、www.example.com、sub.example.com等等都可能获取到。


cookie header set-cookie http-only host-only
  http-only为true,表示这个cookie不允许通过JS来读写
cookie 对象 document.cookie
cookie使用  大小与限制


## 浏览器的Cookie策略 ##
跨域发送cookie withCredentials
浏览器所持有的Cookie分为两种：
一种是Session Cookie，又称临时Cookie;保存在浏览器进程的内存空间中，即使打开了一个Tab页，Session Cookie也是有效的
一种是Third-party Cookie,又称本地Cookie；保存在本地
third-party cookie是服务器在Set-Cookie时，指定了Expire,只有到了Expire时间后才会失效


## 带上cookie的ajax跨域请求（credentials） ##
https://github.com/brunoyang/blog/issues/11
默认情况下，在发生跨域时，cookie 作为一种 credential 信息是不会被传送到服务端的。必须要进行额外设置才可以。
Access-Control-Allow-Credentials（可选） – 该项标志着请求当中是否包含cookies信息，只有一个可选值：true（必为小写）。如果不包含cookies，请略去该项，而不是填写false。这一项与XmlHttpRequest2对象当中的withCredentials属性应保持一致，
即withCredentials为true时该项也为true；withCredentials为false时，省略该项不写。反之则导致请求失败。




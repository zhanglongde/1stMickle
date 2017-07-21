https://imququ.com/post/host-only-cookie.html
https://segmentfault.com/a/1190000004556040
规范 rfc6265
cookie 跨域
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
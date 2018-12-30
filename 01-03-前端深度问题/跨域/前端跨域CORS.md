https://github.com/brunoyang/blog/issues/11
https://segmentfault.com/a/1190000003710973



Nginx配置
https://enable-cors.org/server_nginx.html


http://newhtml.net/using-cors/
安全问题
跨域请求始终是网页安全中一个比较头疼的问题，CORS提供了一种跨域请求方案，但没有为安全访问提供足够的保障机制，
如果你需要信息的绝对安全，不要依赖CORS当中的权限制度，应当使用更多其它的措施来保障，比如OAuth2。


CORS设置为*有什么问题？
设置withCredential,仍然无法获知cookie信息
header信息 Access-Control-Allow-Credentials:true
Access-Control-Allow-Origin不可以为 '*'，因为 '*' 会和 Access-Control-Allow-Credentials:true 冲突，需配置指定的地址

但是对于复杂请求的前置请求，无法鞋带上cookie怎么处理？
1.后端强制通过
  状态码，其他header也需要一致，浏览器才会通过
2.另一种解决方式OAuth2.0
cookie-token,在头部返回服务器进行校验





CORS容易忽视的技术细节
1.请求类型
简单请求
非简单请求：预检请求
2.忽略登录验证
Java后端没有收到前端请求，登录信息不对被重定向
因为，CORS请求，ajax或者fetch默认不会携带cookie
解决=>
XHR:xhr.credential = true
fetch:{credential: "include"}
3.非简单请求的Option请求
  自定义请求头白名单，变成非简单请求
  浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息
  解决=>
  服务端返回头与客户端请求头一致
4.preflight请求无法携带cookie
解决=>
修改拦截器逻辑
在Login之前，放一个针对CORS的拦截器，只要是OPTIONS请求，判断必要的origin和method是否合法，然后直接返回状态码200.
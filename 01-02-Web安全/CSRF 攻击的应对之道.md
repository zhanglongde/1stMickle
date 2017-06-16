https://www.ibm.com/developerworks/cn/web/1102_niugang_csrf/




CSRF攻击对象
直接产生数据改变的服务，对于读取数据不需要改变


攻击手段
攻击者盗用你的身份，以你的名义发送恶意请求，比如：利用cookie,绕过身份验证，操作服务器
受害者：
登录收信人网站，并在本地生成Cookie
在不登出A的情况下，访问危险网站B


攻击原理
Cookie是可以跨域的，而且可以通过插件等强制修改
对于来自客户端的请求一般都要先进性身份验证，服务器身份验证模式 未过期的Session[cookie]，确认身份之后，才能进行后续操作
CSRF攻击是借助受害者的Cookie骗取服务器的信任，但是黑客并不能拿到Cookie，也看不到Cookie的内容
对应服务器返回的结果，由于浏览器同于策略限制，也无法进行解析。


防御
https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html
服务端
1.Cookie hash 
还有1%可能，利用XSS先获取Cookie
2.验证码
提交表单时，填写随机字符串，用户体验不好
3.one-time tokens
不同的表单包含一个不同的为随机值
浏览器
1.验证 HTTP Referer 字段；
2.在请求地址中添加 token 并验证；
3.在 HTTP 头中自定义属性并验证


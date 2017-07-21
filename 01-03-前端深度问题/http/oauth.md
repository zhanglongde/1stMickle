

前后端分离，最应该用token来交互，而不是用cookie。
当然是可以取得cookie的。所有的cookie 都在头里面，有个Set-Cookie的字段，读取这个头就可以了。

Token是令牌。
HTTP是无状态的，Cookie是记录HTTP状态的一种手段。
浏览器会通过Set-Cookie字段获取Cookie。而Token是通过oauth认证后得到的令牌。

http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html
https://www.zhihu.com/question/19781476
OAuth2.0协议 RFC6740  RFC6749
OAuth

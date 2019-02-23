

前后端分离，最应该用token来交互，而不是用cookie。
当然是可以取得cookie的。所有的cookie 都在头里面，有个Set-Cookie的字段，读取这个头就可以了。

Token是令牌。
HTTP是无状态的，Cookie是记录HTTP状态的一种手段。
浏览器会通过Set-Cookie字段获取Cookie。而Token是通过oauth认证后得到的令牌。

http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html
https://www.zhihu.com/question/19781476
OAuth2.0协议 RFC6740  RFC6749
OAuth




应用场景
云打印Google照片



实现思路
OAuth在"客户端"与"服务提供商"之间，设置了一个授权层（authorization layer）。
"客户端"不能直接登录"服务提供商"，只能登录授权层，以此将用户与客户端区分开来。
        "客户端"登录授权层所用的令牌（token），与用户的密码不同。
        用户可以在登录的时候，指定授权层令牌的权限范围和有效期。

"客户端"登录授权层以后，"服务提供商"根据令牌的权限范围和有效期，向"客户端"开放用户储存的资料。
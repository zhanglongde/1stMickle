BearerToken与MACToken区别

Bearer 介绍
优点：
　　调用简单，不需要对请求进行签名。
缺点：
　　请求API需要使用https协议保证信息传输安全。
　　Access Token有效期一个月，过期后需要使用Refresh Token进行刷新。

MAC 介绍
优点：
　　不依赖https协议，无协议加密带来的性能开销。
　　Access Token长期有效，无需使用Refresh Token刷新。
缺点：
　　需要进行MAC计算。
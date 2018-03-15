http://www.ruanyifeng.com/blog/2016/06/dns.html
http://imweb.io/topic/55e3ba46771670e207a16bc8
https://zhuanlan.zhihu.com/p/28305778
https://edu.unixhot.com/cache-dns.html

域名解析过程
当用户在浏览器中输入域名并按下回车键后：
1.查找浏览器缓存
  chrome缓存的时间只有一分钟，查看chrome的缓存可打开：chrome://net-internals/#dns
2.查找系统缓存
  操作系统的缓存：window系统是一天，mac系统严格根据DNS协议中的TTL
3.hosts文件
4.查找路由器缓存
5.查找ISP DNS缓存
  网络配置中的DNS服务器地址
6.递归搜索


递归查询 https://www.zhihu.com/question/23042131
根据本地DNS服务器的设置进行查询
CNAME
NSLOOKUP
A
非转发模式
根DNS服务器收到请求后会判断这个域名(.com)是谁来授权管理，并会返回一个负责该顶级域名服务器的一个IP。本地DNS服务器收到IP信息后，将会联系负责.com域的这台服务器。这台负责.com域的服务器收到请求后，如果自己无法解析，它就会找一个管理.com域的下一级DNS服务器地址(http://qq.com)给本地DNS服务器。当本地DNS服务器收到这个地址后，就会找http://qq.com域服务器，重复上面的动作，进行查询，直至找到www  . qq  .com主机。


DNS Prefetching
zone文件

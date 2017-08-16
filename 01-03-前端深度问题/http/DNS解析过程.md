http://www.ruanyifeng.com/blog/2016/06/dns.html
http://imweb.io/topic/55e3ba46771670e207a16bc8
https://zhuanlan.zhihu.com/p/28305778
https://edu.unixhot.com/cache-dns.html

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


DNS Prefetching
zone文件

http://www.ruanyifeng.com/blog/2016/06/dns.html
http://imweb.io/topic/55e3ba46771670e207a16bc8
https://zhuanlan.zhihu.com/p/28305778
https://edu.unixhot.com/cache-dns.html

域名解析过程
当用户在浏览器中输入域名并按下回车键后：
第一阶段，缓存阶段
1.查找浏览器缓存
  chrome缓存的时间只有一分钟，查看chrome的缓存可打开：chrome://net-internals/#dns
2.查找系统缓存
  操作系统的缓存：window系统是一天，mac系统严格根据DNS协议中的TTL
3.hosts文件
4.查找路由器缓存
5.查找ISP DNS缓存
  网络配置中的DNS服务器地址
第二阶段，代理查询
6.递归搜索
  根据本地域名服务器的配置
  两种方式：localDNS 公共DNS


[递归查询](https://www.zhihu.com/question/23042131)
根据本地DNS服务器的设置进行查询
记录类型:CNAME NSLOOKUP A
非转发模式
根DNS服务器收到请求后会判断这个域名(.com)是谁来授权管理，并会返回一个负责该顶级域名服务器的一个IP。
本地DNS服务器收到IP信息后，将会联系负责.com域的这台服务器。
这台负责.com域的服务器收到请求后，如果自己无法解析，它就会找一个管理.com域的下一级DNS服务器地址(http://qq.com)给本地DNS服务器。
当本地DNS服务器收到这个地址后，就会找http://qq.com域服务器，重复上面的动作，进行查询，直至找到www  . qq  .com主机。



[DNS解析过程详解](https://segmentfault.com/a/1190000003864982)
1.现在我有一台计算机，通过ISP接入了互联网，那么ISP就会给我分配一个DNS服务器，这个DNS服务器不是权威服务器，而是相当于一个代理的dns解析服务器，他会帮你迭代权威服务器返回的应答，然后把最终查到IP返回给你。
2.现在的我计算机要向这台**ISPDNS**发起请求查询www.cloudxns.net这个域名了，(经网友提醒：这里其实准确来说不是ISPDNS，而应该是用户自己电脑网络设置里的DNS，并不一定是ISPDNS。比如也有可能你手工设置了8.8.8.8)
3.ISPDNS拿到请求后，先检查一下自己的缓存中有没有这个地址，有的话就直接返回。这个时候拿到的ip地址，会被标记为非权威服务器的应答。
4.如果缓存中没有的话，ISPDNS会从配置文件里面读取13个根域名服务器的地址（这些地址是不变的，直接在BIND的配置文件中），
5.然后像其中一台发起请求。
6.根服务器拿到这个请求后，知道他是com.这个顶级域名下的，所以就会返回com域中的NS记录，一般来说是13台主机名和IP。
7.然后ISPDNS向其中一台再次发起请求，com域的服务器发现你这请求是cloudxns.com这个域的，我一查发现了这个域的NS，那我就返回给你，你再去查。
（目前百度有4台cloudxns的顶级域名服务器）。
8.ISPDNS不厌其烦的再次向cloudxns这个域的权威服务器发起请求，cloudxns收到之后，查了下有www的这台主机，就把这个IP返回给你了，
9.然后ISPDNS拿到了之后，将其返回给了客户端，并且把这个保存在高速缓存中。




以访问www.taobao.com为例，一次完整的域名解析流程包括：

终端向Local DNS发起域名解析请求；
Local DNS在获取到域名解析请求后首先从Root hints获取根域名服务器的地址（Root hints包含了互联网DNS根服务器的地址信息）；
获取了根域名服务器地址后Local DNS向根域名服务器发起DNS解析请求，根域名服务器返回com顶级域名服务器地址；
随后Local DNS向com域名服务器发起解析请求，并得到taobao.com二级域名服务器的地址；
Local DNS向taobao.com二级域名服务器发起解析请求，并最终获得了www.taobao.com的IP地址信息；
Local DNS将递归查询获得的IP地址信息缓存并返回给客户端；
Local DNS服务器包含缓存模块，在实际域名解析过程中Local DNS服务器会首先查询缓存，缓存命中且解析结果TTL未过期的情况下直接返回，否则才启动递归查询的流程。



zone文件

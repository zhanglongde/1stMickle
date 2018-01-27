shadowsocks作者:clowwindy抛弃node.js版本
shadowsocks-nodejs deprecated

没有能力驾驭
shadowsocks-libev

sock5协议
shadowsocks在客户端机器本地部署了一个socks5 server端，
用户使用一个支持sock5的客户端软件（最常见的如：浏览器）连接这个sock5 server发送数据。

这个sock5 server是shadowsocks按照socks5协议开发的，
它解密数据为明文后按照shadowsocks自定义的一种新的通讯协议（GFW没时间来分析这个协议）加密发送给在GFW外部署的shadowsocks server，
这个server按照shadowsocks协议解密数据为明文，并将明文发给墙外的目标机。



shadowsocks基本原理
shadowsocks + 一台海外 VPS + License:Chrome(SwitchyOmega)/Firefox(AutoProxy)







3种方式

GFW
利用境外服务器代理的方法来绕过 GFW 的过滤，其中包含了各种HTTP代理服务【http层】、Socks服务【TCP层】、VPN服务【IP层】… 其中以 ssh tunnel 的方法比较有代表性

SSH
1) 首先用户和境外服务器基于 ssh 建立起一条加密的通道
2-3) 用户通过建立起的隧道进行代理，通过 ssh server 向真实的服务发起请求
4-5) 服务通过 ssh server，再通过创建好的隧道返回给用户
由于 ssh 本身就是基于 RSA 加密技术，所以 GFW 无法从数据传输的过程中的加密数据内容进行关键词分析，避免了被重置链接的问题，
但由于创建隧道和数据传输的过程中，ssh 本身的特征是明显的，所以 GFW 一度通过分析连接的特征进行干扰，导致 ssh 存在被定向进行干扰的问题

VPN
一个是可以让世界上任意2台机器进入一个虚拟的局域网中（当然这个局域网的数据通讯是加密的，很安全，用起来和一个家庭局域网没有区别），一个是可以用来翻墙。
vpn比ss更加底层，它通过操作系统的接口直接虚拟出一张网卡，后续整个操作系统的网络通讯都将通过这张虚拟的网卡进行收发。
vpn在IP层工作，而ss在TCP层工作。


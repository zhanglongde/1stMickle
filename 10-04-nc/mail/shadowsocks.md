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


Shadowsocks(sock5代理)的工作模式
PAC模式 全局模式
Shadowsocks 的全局模式，是设置你的系统代理的代理服务器，使你的所有http/socks数据经过代理服务器的转发送出。而只有支持 socks 5或者使用系统代理的软件才能使用 Shadowsocks（一般的浏览器都是默认使用系统代理）。

而PAC模式就是会在你连接网站的时候读取PAC文件里的规则，来确定你访问的网站有没有被墙，如果符合，那就会使用代理服务器连接网站，而PAC列表一般都是从 GFWList 更新的。GFWList 定期会更新被墙的网站（不过一般挺慢的）。

简单地说，在全局模式下，所有网站默认走代理。而PAC模式是只有被墙的才会走代理，推荐PAC模式，如果PAC模式无法访问一些网站，就换全局模式试试，一般是因为PAC更新不及时（也可能是GFWList更新不及时）导致的。




















HTTP/2 服务器推送（Server Push）
http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html

传统的网页请求方式
一是至少需要两轮 HTTP 通信，
二是收到样式文件之前，网页都会显示一片空白


二、传统方式的改进
一种解决办法就是把外部资源合并在网页文件里面，减少 HTTP 请求。比如，把样式表的内容写在<style>标签之中，把图片改成 Base64 编码的 Data URL。

另一种方法就是资源的预加载（preload）。网页预先告诉浏览器，立即下载某些资源
如果前一个网页就使用这个命令，预加载后一个网页需要的资源，那么用户打开后一个网页时，就会感觉速度飞快。


三、服务器推送
还没有收到浏览器的请求，服务器就把各种资源推送给浏览器。

比如，浏览器只请求了index.html，但是服务器把index.html、style.css、example.png全部发送给浏览器。
这样的话，只需要一轮 HTTP 通信，浏览器就得到了全部资源，提高了性能。

nginx配置
location / {
  root   /usr/share/nginx/html;
  index  index.html index.htm;
  http2_push /style.css;
  http2_push /example.png;
}
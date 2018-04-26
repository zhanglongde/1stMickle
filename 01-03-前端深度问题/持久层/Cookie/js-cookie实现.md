https://blog.csdn.net/liuyong0818/article/details/4807473

Cookie结构
cookie是以键值对的形式保存的，即key=value的格式。各个cookie之间一般是以“;”分隔。

解析方式：正则匹配；字符串操作
js-cookie是字符串操作


键名
<cookie名>的限制与 javascript 的命名限制大同小异，少了“不能用 javascript 关键字”，多了“只能用可以用在 URL 编码中的字符”。
只能用可以用在URL编码中的字符：escape()
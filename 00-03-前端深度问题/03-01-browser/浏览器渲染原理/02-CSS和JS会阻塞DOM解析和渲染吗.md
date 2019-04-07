https://juejin.im/post/59c60691518825396f4f71a1?utm_source=gold_browser_extension

为什么尽量将CSS放头部，JS放底部，这样可以提高页面的性能
CSS
CSS不会阻塞DOM解析
CSS阻塞页面渲染

JS
JS阻塞DOM解析，但浏览器会"偷看"DOM，预先下载相关资源。
浏览器遇到script标签时，会触发页面渲染




CSS下载不会阻塞DOM树构建
但是，阻塞CSS渲染，JS执行
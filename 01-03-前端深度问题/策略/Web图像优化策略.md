https://juejin.im/entry/59f0026551882547c777876e?utm_source=gold_browser_extension
Web图像优化策略
1.使用Data URI编码代替图片
适用于图片大小小于2KB，页面上引用图片总数不多的情况
原理是将图片转换为base64编码字符串inline到页面或CSS中，可以减少HTTP请求
2.合并雪碧图
移动端多图情况下，可以将多图合并到一个图中，通过CSS定位背景图的姓氏来引用图片，
可以有效减少HTTP请求
3.使用CSS SVG canvas或者iconfont代替图片
适用于移动端或高级浏览器，而且绘制的图片比较简单
iconfont只支持单色
4.懒加载图片
5.使用CDN提供访问图片的入口

响应式图片
响应式结合懒加载

加载以及显示策略
渐进式加载
占位图
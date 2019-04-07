记录面试中一些回答不够好的题（Vue 居多）
## 1.flex布局与grid布局 ##
## 2.实现Vue SSR ##
## 3.从SPA使用最小成本迁移到SSR ##
## 4.实现方法：在数组里面找出ff数组。数组 [2, 3, 6, 7] ，指定元素 7，则 ff 数组是 [2, 2, 3]（2+2+3 = 7）和 [7]。若指定元素 6，则 ff 数组为 [2, 2, 2], [3, 3], 和 [6] ##
## 5.实现Promise.finally ##
finally本质上是then方法的特例
## 6.另一种方式实现VUe的响应式原理 ##
## 7.Vue组件data为什么必须是函数 ##
## 8.Vue computed实现 ##
## 9.diff算法实现 ##
## 10.Vue compiler实现 ##
解析：词法分析获得token 语法分析获得AST 语义分析获得优化后的AST
编译：获得代码

模板解析：将数据转化为一段HTML
最开始出现在后端，
MV*,模板解析交由前端处理，比如gulp 各种框架

Vue的模板编译将template转化成render函数
然后再instance中$mount到对象的DOM上
## 11.快排及其优化 ##
[快速排序的JavaScript实现](https://www.cnblogs.com/zichi/p/4788953.html)
定轴
动轴

递归
非递归

快排：一行代码实现

## 12.缓存算法实现及其优化（缓存算法简单模型：假设可以缓存三个数据，请求前三个数据时，直接进缓存列表，当请求第四个数据时，若命中缓存，将被缓存的数据放入缓存列表头部，否则把新加入的数据放入缓存列表头部，淘汰最后一个数据） ##
## 13.怎么快速定位哪个组件出现性能问题 ##
[timeline工具](https://juejin.im/post/5a6e78abf265da3e3f4cf085) 性能API
Vue专门工具：Vue Performance
## 14.HTTP状态码202，204 206 ##
202服务器已接收请求，但尚未处理
204：没有放回任何内容
206：partial Content
## 15.WebSocket ##
## 16.对electron的理解 ##



1.观察者模式
从vue源码看观察者模式 https://zhuanlan.zhihu.com/p/33373207
1.1响应式
Dep 主题对象 负责依赖收集 =>get函数
subs订阅者列表 watcher 订阅者 =>update函数
pub 发布者 =>set函数=>notify
一对多

1.2组件事件传递
$on $emit

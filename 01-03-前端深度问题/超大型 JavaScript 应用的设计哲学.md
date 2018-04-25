超大型 JavaScript 应用的设计哲学
Designing very large JavaScript applications

2个事情
一是如何构建高度复杂的 web 应用，以确保不论开发人员多少、不论应用逻辑和 UI 多么繁重，用户在交互时首屏加载与渲染负担都能维持在较好的水平；
二是如何保证应用在整个生命周期的轻量运行，即加载当前不需要的 JS 代码。

2个概念
懒惰装饰（lazy decoration）
异步依赖注入（asynchronous dependency injection）
模块系统的反向依赖关系（reverse dependencies）


改变开发应用的方式
引入redux
引入npm
日期选择器并不会




代码分离
bundle 加载时机 JSONP加载？
closure 编译器

基于路径的代码分离
组件层面延迟加载
React 组件静态依赖于它们的子元素

谁决定什么时候延迟加载？
静态 import 和动态 import
分割逻辑与渲染:根据渲染顺序以及应用逻辑来分割我们的组件
仅在渲染完成时加载逻辑

服务端渲染 hydration的过程：hydration 作用的方式是在服务器端渲染一些东西，然后在客户端再次渲染它

避免中心化配置
依赖关系树

基础 bundle


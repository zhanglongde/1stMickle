https://juejin.im/post/59522e57f265da6c3b27ab62?utm_source=gold_browser_extension

1.切割render()方法
  分别调用不同的无状态组件
2.模板化组件
  父组件类似一个模板，只专注于各种configurations
  子组件render方法中调用模板组件，通过prop属性实例化
3.高阶组件
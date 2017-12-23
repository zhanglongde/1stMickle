异常处理方案
1.可以抛出Error对象的异常
  Promise reject
  try catch throw finally  无法捕获语法错误、异步错误,例如setTimeout
2.window.onerror
  无法捕获语法错误
  冒泡阶段无法捕获网络错误例如img404
3.window.onunhandledrejection 作为promise的全局异常捕获事件
  window.rejectionhandled
4.axios 拦截器 interceptors
5.异常提示
展示给用户的异常，一般使用alert或toast poppup
展示给开发者的异常 console.error


错误类型
1.运行时错误 TypeError  ReferenceError
2.语法错误 编辑器就能察觉
3.异步错误 setTimeout
4.网络错误 404
5.promise错误
6.iframe错误


安全防范机制
1.typeof
2.函数非法参数检验
  函数类型 toString instanceof



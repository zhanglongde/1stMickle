axios与普通ajax、$.ajax、fetch相同点
基于XHR对象

axios与普通ajax、$.ajax、fetch区别？
axios对于原生js实现ajax的封装，解决了痛点问题
     支持异步模型Promise
     转换请求和相应数据：自动转json
     自动支持抵御CSRF
     拦截请求和响应
     axios 并发请求的接口 axios.all([])
     请求取消
     异常错误处理
ajax使用XHR对象做异步操作
fetch浏览器内置，类似于ajax的异步操作
$.ajax回调方式处理异步请求
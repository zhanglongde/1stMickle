APM
1.稳定性
1.1JSError：页面发生JS错误
1.2Crash：客户端或者浏览器Crash
1.3白屏：页面加载完成后仍然白屏
1.4资源异常：资源加载失败
1.5接口异常：接口调用失败
400 404 500 502等
1.6其他
console
框架异常

        稳定性采集
        1.onerror捕获JavaScript异常，对应跨域检测也有方案；
        2.addEventListener('error',handler,true)来捕获静态资源异常，包括js img css;
        3.资源API与性能API：Resource Timing API 和 Performance Timing API来进行性能检测和内存检测；
        4.扩展XHR原型，检测返回的状态码，来检测ajax请求失败、错误；
        try catch
        5、通过正则匹配等方式去检测DOM结构的合法性，如ID重复、文档类型未声明之类的；
        6、页面的死链接可以通过Nodejs的第三方模块，如request等，来检测。
        7.window.addEventListener("unhandlerejection")捕获没有设置catch的promise
        对于promise错误，window.onerror try-catch都无法捕获

2.性能
2.1页面加载
dns查询耗时
tcp建立连接事件
ttfb请求往返链路耗时
dom ready耗时
load
2.2页面渲染
first-paint首次渲染时间
first-contentful-paint首次内容渲染时间

性能采集
performance API
performance.time
performance.getEntriesByType('paint')

3.API
RT 接口报错
劫持XHR、fetch
XHR：复写XHR.prototype.open\XHR.prototype.send
        ajax-hook


4.流畅性
  卡顿：浏览器内核进程持续执行超过50ms
  滚动延时：从用户手指滑动到页面真正开始滚动的延时大于100ms
  响应延时：从用户操作到页面响应的延迟大于100ms
  动画掉帧：动画实际运行帧数小于期望运行帧数，通常为60fps
实现：
LongTaskAPI
new PerformanceObserver
5.链路追踪
  traceID
6.网络问题
返回错误码
业务逻辑错误：success=false
7.Node
服务端日志分析
V8 profiler
日志染色
alinode监控进程
docker监控宿主
洋葱模型监控middleware
8.测试
WebPageTest
  lighthouse
9.巡检






上报方式 =>不影响业务性能
1.通过ajax发送数据
2.通过动态创建img标签的形式
new Image()
https://doc.webpack-china.org/guides/hot-module-replacement
http://shepherdwind.com/2017/02/07/webpack-hmr-principle/
热加载实现主要分为几部分功能:
服务器构建、推送更新消息
浏览器模块更新
模块更新后页面渲染

代码与webpack_dev_server    通过中间件与webpack_dev_server的HMR插件联系起来    中间件通过node操作本地文件资源，获得差异描述
webpack_dev_server与浏览器  C/S模式，浏览器通过运行时更新
                           __webpack_hmr event_stream

1.启动本地服务
  启动本地服务器，处理本地资源请求
  服务器通过SSE下发？
2.中间件订阅编译更新
  webpack hot middleware订阅webpack的编译更新
  通过执行Webpack的HMR API将代码模块的更新推送给服务器端
3.运行时动态更新代码
  HMR runtime根据JSON描述动态更新相应代码

HMR runtime
   check 发送http请求，更新manifest
自包含 self-accepted
   accept函数返回true/false,具体实现取决于模块自身
   chunk内部有副作用/依赖，冒泡









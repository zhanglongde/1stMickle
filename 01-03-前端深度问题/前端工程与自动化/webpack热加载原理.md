1.启动本地服务器，处理本地资源请求
2.webpack hot middleware订阅webpack的编译更新
通过执行Webpack的HMR API将代码模块的更新推送给服务器端
3.HMR runtime根据JSON描述动态更新相应代码

HMR runtime
   check 发送http请求，更新manifest
自包含 self-accepted
   accept函数返回true/false,具体实现取决于模块自身
   chunk内部有副作用/依赖，冒泡
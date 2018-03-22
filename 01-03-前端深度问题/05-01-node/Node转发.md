Node中间层
为什么转发
1.第三方 API
2.权限验证 类似微信开发
3.API不合理:转发数据，串接服务；进而减少请求，优化首屏渲染
  存在嵌套调用
  node合并接口
  过滤脏数据
4.区分PC端 无线接口
5.CDN
6.数据直出，优化首屏渲染
  由于该中间层服务与具体server部署在相同的内网上，所以它们直接的数据交互是十分高效的
  Node直出理论与实践总结

如何转发
node-http-proxy
NodeJS转发Ajax请求 pipe https://github.com/zhongxia245/blog/issues/36

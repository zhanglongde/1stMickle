proxyTable
应用
代理转发，解决调试阶段跨域问题
后端请求如果明显带有区分性字段，直接使用正则区分开来;
如果没有，可以结合Vue.axios.defaults.baseURL = '/api'，请求时，强制加上区分性字段，
然后在proxy中被识别之后，替换掉，此时注意区分测试环境与生产环境


原理
代理转发
http-proxy-middleware from node-http-proxy
vue-loader
整合各个loader，替代Vue编译器？，与运行时共同发挥作用

vue-loader 是自动用 css-loader 和 Vue 组件编译器来处理样式和模板文件的
webpack通过vue-loader来解析*.vue文件，把template、js和style文件分离并让相应的loader去处理。


babel-loader处理script部分
style scoped通过postCSS实现
预处理器
style lang="sass"通过sass-loader和node-sass

URL处理
src url @import
编译规则
1.绝对路径
2.以.开头：相对模块依赖，并按照你的本地文件系统上的目录结构进行解析
3.以~开头，模块依赖，引用一个 node 依赖中的资源

热加载
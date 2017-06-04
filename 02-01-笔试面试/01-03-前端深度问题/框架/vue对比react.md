共同点
1. 虚拟DOM
2. 响应式与组件化
3. 配套路由与状态管理


不同点
1. Vue虚拟DOM fork自snabbdom
   React.createElement
2. Vue组件无需声明，实例化
3. 组件更新 
   React手动跟踪： react的一个组件的state发生变化，将触发从跟组件开始整个组件树的重新渲染
        为了避免不必要的重新渲染，必须到处安装shouldComponentUpdate和使用不可变数据结构
        conponentWillReceiveProps
   Vue组件渲染自动跟踪
4. redux比vuex复杂很多，当然可以使用mobx
5.事件系统
React合成事件
vue存在指令 react没有
6.组件库
React React-bootstrap material-ui ant-design
vue iView 饿了么 都不是很成熟
6.生态圈
关于React的资料明显多于vue
React强大的生态圈，国外用得比较多
Vue从今年的Vue Conference来看，使用的人应该不少
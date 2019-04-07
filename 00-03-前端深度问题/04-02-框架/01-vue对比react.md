共同点
1. 虚拟DOM
2. 响应式与组件化
3. 配套路由与状态管理
模板编译？？


不同点
1. Vue虚拟DOM fork自snabbdom
   React.createElement
2. Vue组件无需声明，实例化
3.组件控制强度、粒度
   React对组件的控制程度要强一些：可以对组件进行逻辑运算：JSX（JavaScript与元素的混合+render 高阶组件 无状态组件 组件的children属性(类似slot)
   vue对于组件的控制：slot 递归与嵌套，vue2中也有render
4. 组件更新
   React手动跟踪： react的一个组件的state发生变化，将触发从跟组件开始整个组件树的重新渲染
        为了避免不必要的重新渲染，必须到处安装shouldComponentUpdate和使用不可变数据结构
        componentWillReceiveProps
   Vue组件渲染自动跟踪
5.事件系统
    React合成事件，所有事件都有顶层元素统一处理
6. 元素
   React元素是一个普通对象模拟的
7. 状态管理与数据流
   redux比vuex复杂很多，当然可以使用mobx
   redux单向数据流 reducer修改state；React 利用状态提升来解决组件间的共用状态数据
   vuex数据流 MVVM,v-model双向绑定，Vue 中的.sync 用于实现 prop 双向绑定
             vuex并没有context
8.路由
9.组件库
    React React-bootstrap material-ui ant-design
    vue iView 饿了么 都不是很成熟
10.生态圈
    关于React的资料明显多于vue
    React强大的生态圈，国外用得比较多
    Vue从今年的Vue Conference来看，使用的人应该不少
11.语法差异
   vue存在指令 react没有

React API要少很多
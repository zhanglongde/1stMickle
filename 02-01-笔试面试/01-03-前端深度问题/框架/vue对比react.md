共同点
1. 虚拟DOM
2. 响应式与组件化
3. 配套路由与状态管理


不同点
1. Vue虚拟DOM fork自snabbdom
2. Vue组件没有声明，没有实例化
3. 组件更新 
        react的一个组件的state发生变化，将处罚从跟组件开始整个组简述的重新渲染
        为了避免不必要的重新渲染，必须到处是西安shouldComponentUpdate和使用不可变数据结构
        Vue组件渲染，自动跟踪
4. redux比vuex复杂很多
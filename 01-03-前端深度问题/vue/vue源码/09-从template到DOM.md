从new一个一个Vue对象开始
1.new一个Vue对象，内部究竟发生了什么？
2.Vue.js是如何将data中的数据渲染到真实的宿主环境中的？
3.如何通过“响应式”修改数据？
4.template是如何被编译成真实环境中可用的HTML的？
5.Vue指令是如何执行的？


Vue构造类
调用init函数
主要做了两件事
1.初始化options：包括生命周期、事件、render函数、state
2.$mount组件(挂在组件，应用真实DOM)

在生命钩子beforeCreate与created之间会初始化state,
在此过程中，会一次初始化props methods data computed与watch



双向绑定
observe通过defineReactive对data中的对象进行双向绑定，
最终通过Object.defineProperty对对象设置setter以及getter的方法
getter的方法主要用来进行依赖收集
setter方法会在对象被修改的时候出发，这时候setter会通知闭包中的Dep,
      Dep中有一些订阅了这个对象改变的Watcher观察对象，Dep会通知Watcher对象更新视图
重写数组方法


template编译
在$mount过程中，如果是独立构建，则会在此过程中将template编译成render function
parse
optimize
generate


watcher到视图
watcher对象会通过updateComponent方法达到更新视图的目的
watcher并不是实时更新视图的，
会将watcher对象存在一个队列中，在下一个tick时个能信视图。


VNode

patch

updateChildren

映射到真实DOM

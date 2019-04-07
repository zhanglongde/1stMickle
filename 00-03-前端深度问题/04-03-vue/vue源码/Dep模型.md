https://zhuanlan.zhihu.com/p/28498919
Dep
id subs
addSub removeSub
depend notify

1.Dep定义了发布者的模型，在整个应用中使用唯一的id对其实例进行标识。
2.Dep的订阅者独自形成一个订阅者队列subs。Dep通过addSub与removeSub方法添加和移除订阅者。
3.Dep通过notify通知订阅者数据更新。这个更新对于对象来说是通过setter完成，
  对于数组，因为其length属性不可configurable并且不可enumerable 以及 writable。因此Vue使用变异方法更新数据以确保能正常notify。
4.当数据的getter触发后，会收集依赖，但也不是所有的触发方式都会收集依赖，
  只有通过watcher触发的getter会收集依赖，而所谓的被收集的依赖就是当前watcher，DOM中的数据必须通过watcher来绑定，只通过watcher来读取。

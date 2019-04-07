Node的特点是事件驱动
事件被分门别类归到对应事件观察者上，nextTick三个优化与idle观察者，setImmediate属性check观察者
   idle观察者优先于I/O观察者，I/O观察者优先于check观察者
事件每次循环称为Tick,每次Tick按照先后顺序从时间观察者中取出事件进行处理


实现原理
调用setTimeout()或setInterval()时创建的计时器会被放入定时器观察者内部的红黑树中，每次Tick时，会从该红黑树中检查定时器是否超过定时时间，超过的话，就立即执行对应的回调函数。
使用process.nextTick()所设置的所有回调函数都会放置在数组中，会在下一次Tick时所有的都立即被执行，该操作较为轻量，时间精度高。

执行setTimeout(fn, 0)其实就是在执行setTimeout(fn, 1)




结论
优先级顺序：process.nextTick > setTimeout/setInterval > setImmediate
setTimeout需要使用红黑树，且after设置为0，其实会被node强制转换为1，存在性能上的问题，建议替换为setImmediate
process.nextTick有一些比较难懂的问题和隐患，从0.8版本开始加入setImmediate，使用时，建议使用setImmediate

setTimeout(fn, 0)其实就是在执行setTimeout(fn, 1)

[Vue 中如何使用 MutationObserver 做批量处理？](https://www.zhihu.com/question/55364497)
[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
JS 的 event loop 执行时会区分 task 和 microtask，引擎在每个 task 执行完毕，从队列中取下一个 task 来执行之前，会先执行完所有 microtask 队列中的 microtask。

优先级
setTimeout 回调会被分配到一个新的 task 中执行，而 Promise 的 resolver、MutationObserver 的回调都会被安排到一个新的 microtask 中执行，会比 setTimeout 产生的 task 先执行。
要创建一个新的 microtask，优先使用 Promise，如果浏览器不支持，再尝试 MutationObserver。实在不行，只能用 setTimeout 创建 task 了


为什么microtask?
task:UI更新
microtask:数据更新
根据HTML Standard，在每个 task 运行完以后，UI 都会重渲染，那么在 microtask 中就完成数据更新，当前 task 结束就可以得到最新的 UI 了。
反之如果新建一个 task 来做数据更新，那么渲染就会进行两次。
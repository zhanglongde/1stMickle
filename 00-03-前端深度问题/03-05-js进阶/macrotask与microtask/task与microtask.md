从一道题浅说 JavaScript 的事件循环 https://github.com/dwqs/blog/issues/61

微任务 相当于协程  microtask queue
宏任务            macrotask queue

微任务：Promise  MutationObserver
宏任务：script(整体代码) setTimeout setInterval MessageChannel postMessage I/O、UI交互事件
requestAnimationFrame 既不属于 macrotask, 也不属于 microtask
async/await 基本规则：
async表示这是一个async函数,await只能用在这个函数里面。
await 表示在这里等待promise返回结果了，再继续执行。
await 后面跟着的应该是一个promise对象。
await等待的虽然是promise对象，但不必写.then()，直接可以得到返回值。


如何进行for循环


promise外面套一层async函数可以处理promise


为何要用async / await 替代Promise?
https://blog.fundebug.com/2017/04/04/nodejs-async-await/
https://github.com/xingbofeng/xingbofeng.github.io/issues/16


在async/await中捕获异常

[JavaScript 运行原理解析](https://juejin.im/post/5a5d64fbf265da3e243b831f#heading-1)
[理解JavaScript的编译过程与运行机制](https://blog.csdn.net/celte/article/details/39412683)
[Javascript 工作原理](https://cnodejs.org/topic/579e341885dba6b12ac58583)
编译：核心的JIT编译器将源码编译成机器码运行
     词法分析 语法分析
     使用翻译器（translator），将代码转为字节码（bytecode）
     使用字节码解释器（bytecode interpreter），将字节码转为机器码
预处理
执行：



JS Engine
   JS引擎主要是对JS代码进行词法、语法等分析，通过编译器将代码编译成可执行的机器码让计算机去执行
   内存管理 堆、栈
   内存泄漏
   回收机制
   数据类型
   原型 原型链
   作用域 作用域链
Runtime 运行上下文
Call Stack 调用栈
Event Loop 事件循环：负责监听Call Stack和Callback Queue
Event Queue 事件队列
Callback 回调

1.JS引擎主要负责把JS代码转为机器能执行的机器码，而JS代码中调用的一些Web API则由其运行环境提供，这里指的是浏览器
2.JS是单线程运行，每次都从调用栈中取出代码进行调用。
  如果当前代码非常好使，则会阻塞当前线程导致浏览器卡顿
3.回调函数是通过加入到事件队列中，等待EventLoop拿出并放到调用栈进行调用
  只有EventLoop监听到调用栈为空时，才会从事件队列队头拿出回调函数放进调用栈里
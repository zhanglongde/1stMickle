http://lib.csdn.net/article/javascript/8557


js引擎线程
界面渲染线程
事件触发线程
http请求线程
定时触发线程


async await 并非异步


https://www.zhihu.com/question/20866267
JavaScript 既是单线程又是异步的，请问这二者是否冲突，以及有什么区别？
JS的单线程是指一个浏览器进程中只有一个JS的执行线程，同一时刻内只会有一段代码在执行
（你可以使用IE的标签式浏览试试看效果，这时打开的多个页面使用的都是同一个JS执行线程，
如果其中一个页面在执行一个运算量较大的function时，其他窗口的JS就会停止工作）。

而异步机制是浏览器的两个或以上常驻线程共同完成的，

例如异步请求是由两个常驻线程：
JS执行线程和事件触发线程共同完成的，JS的执行线程发起异步请求（这时浏览器会开一条新的HTTP请求线程来执行请求，
这时JS的任务已完成，继续执行线程队列中剩下的其他任务），
然后在未来的某一时刻事件触发线程监视到之前的发起的HTTP请求已完成，
它就会把完成事件插入到JS执行队列的尾部等待JS处理。

又例如定时触发（settimeout和setinterval）是由浏览器的定时器线程执行的定时计数，
然后在定时时间把定时处理函数的执行请求插入到JS执行队列的尾端（所以用这两个函数的时候，实际的执行时间是大于或等于指定时间的，不保证能准确定时的）。

所以，所谓的JS的单线程和异步更多的应该是属于浏览器的行为，他们之间没有冲突，更不是同一种事物，没有什么区别不区别的。

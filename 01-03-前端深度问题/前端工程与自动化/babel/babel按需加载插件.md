antd，element专门开发了babel插件，使得用户能以import { Button, Message } form 'antd'这样的方式去按需加载。本质上就是通过插件将上一句的代码又转化成如下：
import Button from 'antd/lib/button';
import Message from 'antd/lib/button';
这样似乎是最完美的变相tree-shaking方案


babel-plugin-import 按需加载
https://www.jianshu.com/p/8eb127aa7944



使用ES6 Module如何处理模块按需加载 (lazyload)？
ES6 module（import/export 语句）是静态的，所以无法用于按需加载。
let xx = require('xx').default

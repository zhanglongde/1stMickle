## 内存泄漏 ##
无法被GC回收
### 内存泄漏的6种情况 ###
1. 意外的全局变量
  没有用var let声明
  变量挂在window对象上
2. 没有及时清理计时器或者回调函数
回调中声明了对于某个变量的依赖
```
  var someResource = getData();
  setInterval(function handler() {
    var node = document.getElementById('Node');
    if(node) {
        // Do stuff with node and someResource.
        node.innerHTML = JSON.stringify(someResource));
    }
  }, 1000);
  ```
定时器保有对于 serverData 变量的引用，如果我们不手动清除定时器话，那么该变量也就会一直可达，不被回收
3. 脱离DOM引用以及监听器
DOM 元素存在了两个引用，分别在 DOM 树与 JavaScript 数组中
```
    var elements = {
        button: document.getElementById('button'),
        image: document.getElementById('image'),
        text: document.getElementById('text')
    };
    function removeButton() {
        // 按钮是 body 的后代元素
        document.body.removeChild(document.getElementById('button'));
        // 此时，仍旧存在一个全局的 #button 的引用
        // elements 字典。button 元素仍旧在内存中，不能被 GC 回收。
    }
    ```
此时我们就需要将 DOM 树与 JavaScript 数组中的引用皆删除，才能真实地清除该对象

老的浏览器需要手动移除监听事件
4. 闭包【私有作用域无法销毁】
```
    var theThing = null;
    var replaceThing = function () {
      var originalThing = theThing;
      var unused = function () {
        if (originalThing)
          console.log("hi");
      };
      theThing = {
        longStr: new Array(1000000).join('*'),
        someMethod: function () {
          console.log(someMessage);
        }
      };
    };
    setInterval(replaceThing, 1000);
```
5.[iframe](https://juejin.im/post/59fbdb46f265da4321536565?utm_source=gold_browser_extension)
在父界面或者子界面中添加了对于父界面某对象的引用 
6.WebWorker
主线程与工作线程之间传递数据

https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/
https://github.com/creeperyang/blog/issues/15


## js垃圾回收机制 ##
    js通过GC自动回收内存
Garbage Collector 即是负责追踪内存分配情况、判断某个被分配的内存是否有用，并且自动回收无用的内存
    1. 标记
    2. 计数


## [Javascript内存释放](http://www.jianshu.com/p/3b7946c4b118) ##
### 1.堆内存的释放 ###
    如果堆地址被引用，就说这个内存被占用，不能被销毁
    var obj1 = {name:'Jack'}
    var obj2 = obj1
    只有把obj1和obj2都置为null，才会被释放

### 2.栈内存释放 ###
函数执行
#### 2.1全局作用域 ####
页面关闭，全局作用域才会被销毁
#### 2.2私有作用域 ####
    一般情况下，当私有作用域中的代码执行完成后，当前作用域就会主动进行释放和销毁
    但是，作用域内的部分内容被作用域以外占用，当前作用域就不能销毁了，比如：
    1)闭包
    2)给DOM元素绑定方法
    var btn = document.getElementById('btn1');
    ~function () {
    btn.onclick = function () {
    }
    }();
    3)“不立即销毁”
    function fn() {
    var num = 100;
    return function () {
    }
    }
    fn()(); // 首先执行fn，返回一个小函数对应的内存地址，然后紧接着让返回的小函数再执行
https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/
https://github.com/creeperyang/blog/issues/15
>js垃圾回收机制
js通过GC自动回收内存
1. 标记
2. 计数

>内存泄漏的四中情况
1. 意外的全局变量
  没有用var let声明
2. 没有及时清理计时器或者回调函数
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
3. 脱离DOM引用
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
4. 闭包
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
>谷歌浏览器查看内存使用
shift+esc

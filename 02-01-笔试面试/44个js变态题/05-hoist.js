/**
 * Created by zhanglongde on 2016/7/31.
 */
//JavaScript 将会把 var 表达式和 function 声明提升到当前作用域的顶部

   //window对象自带name属性
//window name 属性：设置或得到窗口的名称
    console.log(name);
var name = 'World!'; //变量声明提升（Hoisting）

//立即执行函数的声明，提升
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();

//Test();
//name = 'World!';
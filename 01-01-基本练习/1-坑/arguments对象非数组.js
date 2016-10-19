/**
 * Created by zhanglongde on 2016/7/13.
 */

function m1(fn) {
    //arguments 变量不是一个数组（Array）。
    //尽管在语法上它有数组相关的属性 length，但它不从 Array.prototype 继承，
    //实际上它是一个对象（Object）。
    console.log(typeof arguments);//基本类型
    console.log(arguments instanceof Array);//引用类型
    console.log(arguments instanceof String);//引用类型
    console.log(arguments instanceof Object);//引用类型
}

m1();

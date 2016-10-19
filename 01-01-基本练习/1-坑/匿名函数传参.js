/**
 * Created by zhanglongde on 2016/7/12.
 */

var as = 33;
function mtest(as){
    console.log(as);
    console.log("mtest");
}
function m1(fn) {
    //借用Arrayslice函数用
    //console.log(Array.prototype.slice.call(arguments,1));
    fn(Array.prototype.slice.call(arguments,1));


    //arguments 变量不是一个数组（Array）。
    //尽管在语法上它有数组相关的属性 length，但它不从 Array.prototype 继承，
    //实际上它是一个对象（Object）。
    console.log(typeof arguments);//基本类型
    console.log(arguments instanceof Array);//引用类型
    console.log(arguments instanceof String);//引用类型
}

m1(mtest,123);
//m1.prototype.abc = 345678;
m1(function(abc){
    console.log(abc);
    console.log("inner");
},34567,7890);

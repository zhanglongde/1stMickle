/**
 * Created by zhanglongde on 2016/8/5.
 */

(function(){
    // 原始string
    var greet = "Hello there";
// 使用split()方法分割
    greet.split(' ')[0]; // "Hello"
// 给原始类型添加新属性不会报错
    greet.smile = true;
// 单没法获取这个值（18章ECMAScript实现里我们讲了为什么）
    console.log(typeof greet);//string
    console.log(typeof greet.smile); // "undefined"
    console.log(greet.smile); // "undefined"



// 原始string
    var greet = new String("Hello there");
// 使用split()方法分割
    greet.split(' ')[0]; // "Hello"
// 给包装函数类型添加新属性不会报错
    greet.smile = true;
// 可以正常访问新属性
    console.log(typeof greet);//object
    console.log(typeof greet.smile); // "boolean"
    console.log(greet.smile); // "true"


    console.log(String.prototype);
})();

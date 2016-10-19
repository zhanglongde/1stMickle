/**
 * Created by zhanglongde on 2016/8/3.
 */

//在两个函数里, a作为参数其实已经声明了, 所以 var a; var a = 'bye' 其实就是 a; a ='bye'

(function(){
    function foo(a) {
        var a;
        return a;
    }
    function bar(a) {
        var a = 'bye';
        return a;
    }
    console.log([foo('hello'), bar('hello')]);


    var t =12;
    var t =16;   //其实仅仅做了赋值操作
    console.log(t);


    var m = 'hello';
    var m;     //重复定义无效
    console.log(m);
})();

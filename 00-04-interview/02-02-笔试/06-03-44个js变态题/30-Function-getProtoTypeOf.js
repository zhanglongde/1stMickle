/**
 * Created by zhanglongde on 2016/8/3.
 */

(function(){

    function f() {}
    var a = f.prototype, b = Object.getPrototypeOf(f);
    console.log(a === b);


    console.log(a === Object.getPrototypeOf(new f())) // true
    console.log(b === Function.prototype) // true
    //用function关键字定义出来的，是挂在Function.prototype上

    console.log(Function.prototype);
    console.log(f.prototype);
})();


//(function(){
//    Function.prototype.Hello = function(){
//        console.log("Hello")
//    }
//
//    var h = new Hello();
//
//    h();
//})();
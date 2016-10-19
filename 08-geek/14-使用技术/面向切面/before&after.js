/**
 * Created by zhanglongde on 2016/7/12.
 */

Function.prototype.before = function(fn){
    var __self = this;
    return function(){
        if(!fn.apply(this,arguments)){
            return false;
        }
        return __self.apply(this,arguments);
    }
};


Function.prototype.after = function(fn){
    var __self = this;
    return function(){
        var ret = __self.apply(this,arguments);
        console.log(ret);  ///window.onload异步，所以undefined
        if(ret === false){
            return false;
        }
        fn.apply(this,arguments);
        return ret;
    }
};


//window.onload = function(){
//    var test2 = function (args){
//        console.log(args);
//        return "my test";
//    };
//    //var test1 =function (args){
//    //    console.log(args);
//    //};
//    //var test3 = function(args){
//    //    console.log(args);
//    //};
//
//    var ag = 55;
//    var vv = test2.before(function (ag){
//        console.log(ag);
//        console.log(1);
//        return true;
//    }).after(function(){
//        console.log(3);
//    })(5);
//
//    console.log(vv);
//};
var wv = window.onload= function(){
    console.log(1);
};
window.onload = (window.onload || function(){}).after(function(){
    console.log("after");
    return true;
});

console.log(wv);

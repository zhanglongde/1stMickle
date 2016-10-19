/**
 * Created by zhanglongde on 2016/8/5.
 */

(function(){
    for(var i = 0; i < 5; ++i){
        setTimeout(function(){
            console.log(i+' ');
        },100);
    }

//javascript运行环境为单线
//    程，setTimeout注册的函数需要等待线程空闲才能执行，此时for循环已经结束，i值为5.五个定时输出都是5
//    修改方法：将setTimeout放在函数立即调用表达式中，将i值作为参数传递给包裹函数，创建新闭包
    for(var i = 0; i < 5; ++i){
        (function(i){
            setTimeout(function(){
                console.log(i+'');
            },100)
        }(i));
    }

}());

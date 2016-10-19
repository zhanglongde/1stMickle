/**
 * Created by zhanglongde on 2016/8/3.
 */

//我们知道一个function(Function 的实例)的 length 属性就是函数签名的参数个数, 所以 b.length == 0.
//
//另外 Function.length 定义为1……
(function(){

    var a = Function.length,
        b = new Function().length

    console.log(a === b);
    console.log(a);
    console.log(b);
})();

/**
 * Created by zhanglongde on 2016/8/3.
 */

//如果不传参数等价于当前时间.
//如果是函数调用 返回一个字符串.
(function(){
    var a = Date(0);
    var b = new Date(0);
    var c = new Date();
    console.log([a === b, b === c, a === c]);
    console.log(a);
    console.log(b);
    console.log(c);
})();

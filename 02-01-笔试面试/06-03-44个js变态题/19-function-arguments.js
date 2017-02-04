/**
 * Created by zhanglongde on 2016/8/1.
 */

//The arguments object is an Array-like object corresponding to the arguments passed to a function.
//
//也就是说 arguments 是一个 object, c 就是 arguments[2], 所以对于 c 的修改就是对 arguments[2] 的修改
(function(){
    function sidEffecting(ary) {
        ary[0] = ary[2];
    }
    function bar(a,b,c) {
        c = 10
        sidEffecting(arguments);
        return a + b + c;
    }
    var re = bar(1,1,1)
    console.log(re);
})();

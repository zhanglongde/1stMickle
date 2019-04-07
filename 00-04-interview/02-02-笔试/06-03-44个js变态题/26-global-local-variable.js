/**
 * Created by zhanglongde on 2016/8/1.
 */

(function(){
    (function(){
        var x = y = 1;
    })();
    console.log(y);
    console.log(x);   //26-global-local-variable.js:10 Uncaught ReferenceError: x is not defined
})();

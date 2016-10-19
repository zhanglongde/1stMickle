/**
 * Created by zhanglongde on 2016/8/3.
 */

//里明白 parent === Function.prototype 就好了
//IE9全是undefined
(function(){
    function f() {}
    var parent = Object.getPrototypeOf(f);
    console.log(f.name); // ?
    console.log(parent.name); // ?
    console.log(typeof eval(f.name)); // ?
    console.log(typeof eval(parent.name)); //  ?
})();

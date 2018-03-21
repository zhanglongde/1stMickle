/**
 * Created by zhanglongde on 2016/8/2.
 */

//只有 Function 拥有一个 prototype 的属性. 所以 a.prototype 为 undefined.
//
//    而 Object.getPrototypeOf(obj) 返回一个具体对象的原型(该对象的内部[[prototype]]值)
(function(){
    var a = {}, b = Object.prototype;
    var arr = [a.prototype === b, Object.getPrototypeOf(a) === b,a.__proto__ === b];

    console.dir(arr)
    console.log(a.prototype)
    console.log(Object.getPrototypeOf(a))
    console.log(b)
})();

//__proto__为非标准属性，ie8不兼容

(function(){
    console.log("-----------------------------------------------------------\n");
    function Test(){
        this.a = 1;
    }
    Test.prototype.b=2;
    var t = new Test();

    console.log(t.__proto__);
    console.log(Function.prototype);
    console.log(Test.prototype);
    console.log(Test.prototype.constructor)
})();

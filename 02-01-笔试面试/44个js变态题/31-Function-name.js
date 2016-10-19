/**
 * Created by zhanglongde on 2016/8/3.
 */
//函数的名字不可变.
(function(){
    function foo() { }
    var oldName = foo.name;
    foo.name = "bar";
    console.log([oldName, foo.name]);
})();

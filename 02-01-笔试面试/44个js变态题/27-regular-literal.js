/**
 * Created by zhanglongde on 2016/8/1.
 */

//即使正则的字面量一致, 他们也不相等.
(function(){
    var a = /123/,
        b = /123/;
    console.log(a == b);
    console.log(a === b);

    console.log(a+b);
})();

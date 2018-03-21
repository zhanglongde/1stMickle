/**
 * Created by zhanglongde on 2016/8/2.
 */

//字面量相等的数组也不相等.
//数组在比较大小的时候按照字典序比较
(function () {
    var a = [1, 2, 3],
        b = [1, 2, 3],
        c = [1, 2, 4];
    console.log(a == b);
    console.log(a === b);
    console.log(b > c);
    console.log(b < c);
})();

/**
 * Created by zhanglongde on 2016/8/3.
 */

//String.prototype.match 接受一个正则, 如果不是, 按照 new RegExp(obj) 转化. 所以 . 并不会转义
//那么 /gif 就匹配了 /.gif/
(function(){
    if ('http://giftwrapped.com/picture.jpg'.match('.gif')) {
        console.log('a gif file');
    } else {
        console.log('not a gif file');
    }
})();


(function(){
    var r = new RegExp('http://giftwrapped.com/picture.jpg');
    console.log(r);

    console.log(new RegExp('.gif'));
})();

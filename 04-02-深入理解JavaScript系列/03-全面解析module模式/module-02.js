/**
 * Created by zhanglongde on 2016/7/26.
 */

//    对模块进行扩展
var blogModule = (function (my) {
    my.AddPhoto = function () {
        //添加内部代码
        console.log('add a new photo!');
    };
    return my;
} (blogModule||{}));

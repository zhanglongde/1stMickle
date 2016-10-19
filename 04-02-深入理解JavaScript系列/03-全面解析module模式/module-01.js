/**
 * Created by zhanglongde on 2016/7/26.
 */

//    通过传入全局模块来扩展全局模块
var blogModule = (function(my){
    var privateName = '博客园';

    function privateAddTopic(data){
        console.log(privateName);
        console.log(data);
    }

    my.Name = privateName;
    my.AddTopic = function(data){
        privateAddTopic(data);
    };

    return my;  //返回对象，讲共有方法和属性统一打包对外
}(blogModule||{}));

/**
 * Created by zhanglongde on 2016/8/4.
 */

(function(){
    function Universe(a) {

        // 缓存的实例
        var instance = this;

        // 其它内容
        this.start_time = 0;
        this.bang = "Big";

        // 重写构造函数
        Universe = function () {
            console.log("reconstrutor:"+a);
            return instance;
        };
    }

// 测试
    var uni = new Universe(2);
    var uni2 = new Universe();
    uni.bang = "123";
    console.log(uni);
    console.log(uni === uni2); // true
    console.log(uni2.bang); // 123
})();

/**
 * Created by zhanglongde on 2016/8/4.
 */

(function(){
    function Universe() {
       var h = 'hhhh';
        // 判断是否存在实例
        if (typeof Universe.instance === 'object') {
            return Universe.instance;
        }

        // 其它内容
        this.start_time = 0;
        this.bang = "Big";

        // 缓存
        Universe.instance = this;

        // 隐式返回this
    }

// 测试
    var uni = new Universe();
    var uni2 = new Universe();
    console.log(uni === uni2); // true
    console.log(uni);

    console.log(uni2);

    console.log(Universe().bang);  //函数调用的方式
    console.log(Universe().h);    //只能使用闭包方式调用

})();

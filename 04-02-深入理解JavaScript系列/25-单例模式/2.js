/**
 * Created by zhanglongde on 2016/8/4.
 */

(function(){
    var SingletonTester = (function () {

        //参数：传递给单例的一个参数集合
        function Singleton(args) {

            //设置args变量为接收的参数或者为空（如果没有提供的话）
            var args = args || {};
            //设置name参数
            this.name = 'SingletonTester';
            //设置pointX的值
            this.pointX = args.pointX || 6; //从接收的参数里获取，或者设置为默认值
            //设置pointY的值
            this.pointY = args.pointY || 10;

        }

        //实例容器
        var instance;

        var _static = {
            name: 'SingletonTester',

            //获取实例的方法
            //返回Singleton的实例
            getInstance: function (args) {
                if (instance === undefined) {
                    instance = new Singleton(args);
                }
                return instance;
            }
        };
        return _static;
    })();

    var singletonTest = SingletonTester.getInstance({ pointX: 5 });
    console.log(singletonTest.pointX); // 输出 5
})();

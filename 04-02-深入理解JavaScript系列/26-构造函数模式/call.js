/**
 * Created by zhanglongde on 2016/8/4.
 */

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    // 自定义一个output输出内容
    this.output = function () {
        return this.model + "走了" + this.miles + "公里";
    }
}

//方法1：作为函数调用
//Car("大叔", 2009, 20000);  //添加到window对象上
//console.log(window.output());

//方法2：在另外一个对象的作用域内调用
var o = new Object();
Car.call(o, "Dudu", 2010, 5000);
Car.apply(o, ["Dudu", 2010, 5000]); //apply的第二个参数只能是数组或arguments

//var f = Car.bind(o, "Dudu", 2010, 5000); //后执行
console.log(f());
console.log(o.output());



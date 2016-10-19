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
Car("大叔", 2009, 20000);  //添加到window对象上
console.log(window.output());

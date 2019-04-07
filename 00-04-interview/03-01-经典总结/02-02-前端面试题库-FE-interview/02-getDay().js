/**
 * Created by zhanglongde on 2016/8/5.
 */

//请用代码写出(今天是星期x)其中x表示当天是星期几,如果当天是星期一,输
//出应该是"今天是星期一"

var days = ['日','一','二','三','四','五','六'];

var date = new Date();

console.log(days[date.getDay()]);

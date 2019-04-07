/**
 * Created by zhanglongde on 2016/8/3.
 */

//getDate是星期几
(function(){


    var a = new Date("2014-03-19"),
        b = new Date(2014, 03, 19);
    console.log([a.getDay() === b.getDay(), a.getMonth() === b.getMonth()]);

    console.log(a);
    console.log(b);

    console.log(a.getDate())
    console.log(b.getDate())
})();

//JavaScript inherits 40 years old design from C:
//    days are 1-indexed in C’s struct tm, but months are 0 indexed.
//    In addition to that, getDay returns the 0-indexed day of the week, to get
//the 1-indexed day of the month you have to use getDate, which doesn’t return a Date object.

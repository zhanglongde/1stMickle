/**
 * Created by Administrator on 2017/6/28.
 */
// require('date-utils');
var xlsx = require('node-xlsx');

// var name = 'hello'
// var buffer = xlsx.build([{name: name}]);
// console.log(buffer)
// var buffer = xlsx.build([{name: name, data: datalist}]);

//读取某个excel文件
var chatExcel = xlsx.parse('./my.xlsx');

//获取需要excel某个表中的数据
var tableData = excelFunc.getDataContent('历史记录', chatExcel);

//获取当前表中获取第一行数据，通常在excel中这一行就是每一列的title
var tableTitle = tableData[0];

console.log(tableTitle)
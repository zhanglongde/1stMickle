/**
 * Created by Administrator on 2017/9/19.
 */
var XLSX = require('xlsx')

const workbook = XLSX.readFile('./my.xlsx');

// var json = XLSX.utils.sheet_to_json('./my.xlsx')
// console.log(json)

// 获取 Excel 中所有表名
const sheetNames = workbook.SheetNames; // 返回 ['sheet1', 'sheet2']
// 根据表名获取对应某张表
const worksheet = workbook.Sheets[sheetNames[0]];
// console.log(worksheet)
console.log('-----------------------------------------------------------')
console.log(worksheet['A1'].v)
console.log(worksheet['B1'].v)
console.log(worksheet['C1'].v)

console.log('-----------------------------------------------------------')
const worksheet2 = workbook.Sheets[sheetNames[1]];
console.log(worksheet2['A1'].v)
console.log(worksheet2['B1'].v)
console.log(worksheet2['C1'].v)

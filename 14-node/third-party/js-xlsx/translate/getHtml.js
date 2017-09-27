/**
 * Created by Administrator on 2017/9/27.
 */

var XLSX = require('xlsx')
var fs = require('fs')

const workbook = XLSX.readFile('./Nextcont 官网 中 英 日三语言版本翻译.xlsx');
// const workbook = XLSX.readFile('../my.xlsx');

// var json = XLSX.utils.sheet_to_json('./my.xlsx')
// console.log(json)

// 获取 Excel 中所有表名
const sheetNames = workbook.SheetNames;
console.log('-----------------------------------------------------------')
console.log(sheetNames)
console.log('-----------------------------------------------------------')
for(let i = 0, LEN=sheetNames.length; i< LEN; i++){
 let worksheet = workbook.Sheets[sheetNames[i]]
 let html = XLSX.utils.sheet_to_html(worksheet)
//   console.log(json)
  fs.writeFile(`html${i}.html`,html,function (err) {
    if (err) {
      throw err;
    }
    console.log('File Saved')
  })
}
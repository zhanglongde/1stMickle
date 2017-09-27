/**
 * Created by Administrator on 2017/9/27.
 */

var XLSX = require('xlsx')
var fs = require('fs')

const workbook = XLSX.readFile('./Nextcont 官网 中 英 日三语言版本翻译.xlsx');

// 获取 Excel 中所有表名
const sheetNames = workbook.SheetNames;
console.log('-----------------------------------------------------------')
console.log(sheetNames)
console.log('-----------------------------------------------------------')
for(let i = 0, LEN=sheetNames.length; i< LEN; i++){
 let worksheet = workbook.Sheets[sheetNames[i]]
//  worksheet['!ref'] = "A3:D47" // change the sheet range
 worksheet['!ref'] = "A3:B47" // change the sheet range
//  let json = XLSX.utils.sheet_to_json(worksheet, {header:1})
 let json = XLSX.utils.sheet_to_json(worksheet, {header:['A','B']}, {range:1})
//  let json = XLSX.utils.sheet_to_json(worksheet, {header:"A"})
//   console.log(json)
  fs.writeFile(`json${i+1}.js`,JSON.stringify(json),function (err) {
    if (err) {
      throw err;
    }
    console.log('File Saved')
  })
}
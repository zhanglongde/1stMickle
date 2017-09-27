var XLSX = require('xlsx')
var fs = require('fs')

const workbook = XLSX.readFile('../my.xlsx');

// 获取 Excel 中所有表名
const sheetNames = workbook.SheetNames;

console.log(workbook)

console.log('-----------------------------------------------------------')
console.log(sheetNames)
console.log('-----------------------------------------------------------')
let s1 = workbook.Sheets[sheetNames[0]]
let s2 = workbook.Sheets[sheetNames[1]]
let sheet1 = XLSX.utils.sheet_to_json(s1);
let sheet2 = XLSX.utils.sheet_to_json(s2);
console.log(s1, s2, sheet1, sheet2)
fs.writeFile('s1.txt',s1,function (err) {
  if (err) {
    throw err;
  }
  console.log('File Saved')
})
// 先合并 sheet1 和 sheet2，再对统一处理
const result = sheet1.concat(sheet2).reduce((prev, next) => {
  let index = prev.findIndex((elem, i) => elem.id === next.id);
  if (index === -1) {
    return prev.concat(next);
  } else {
    prev[index] = Object.assign({}, prev[index], next);
    return prev;
  }
}, []);
console.log(result);


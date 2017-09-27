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
for(let i = 0, LEN=sheetNames.length; i < LEN; i++){
 let worksheet = workbook.Sheets[sheetNames[i]]
//  worksheet['!ref'] = "A3:D41" // change the sheet range
  function getHeaders() {
    worksheet['!ref'] = "A3:A41"
    let json = XLSX.utils.sheet_to_json(worksheet, {header:1})
    return json.map(x => x[0])
  }
  let headers = getHeaders()
  worksheet['!ref'] = "B3:B41" // change the sheet range
//   let json = XLSX.utils.sheet_to_json(worksheet, {header:headers})
   let json = XLSX.utils.sheet_to_json(worksheet, {header:1})
   let arrValues = json.map(x => x[0])
   let newJson = arrValues.map((x,i) => {
     let o = {}
     o[headers[i]] = x
     return o
   })

  fs.writeFile(`json${i+1}.js`,JSON.stringify(newJson),function (err) {
    if (err) {
      throw err;
    }
    console.log('File Saved')
  })
}
/**
 * Created by Administrator on 2017/9/27.
 */

var XLSX = require('xlsx')

let workbook = {
  SheetNames: ['mySheet'],
  Sheets: {
    'mySheet': {
       '!ref':'A1:E4',
       A1:{v:'id'},
       A2:{v:'name'},
       A3:{v:'age'},
       A4:{v:'gender'},
       B1:{v:'002'},
       B2:{v:'zlb'},
       B3:{v:'27'},
       B4:{v:'M'},
       C1:{v:'003'},
       C2:{v:'zlc'},
       C3:{v:'27'},
       C4:{v:'M'},
       D1:{v:'004'},
       D2:{v:'zdd'},
       D3:{v:'30'},
       D4:{v:'W'},
       E1:{v:'005'},
       E2:{v:'zyy'},
       E3:{v:'28'},
       E4:{v:'W'}
    }
  }
}


let wb2 = {
  SheetNames: ['test', 'testB'],
  Sheets: {
  'test':{ '!ref': 'A1:C1',
    A1:
      { t: 's',
        v: 'zhanglongde',
        r: '<t>zhanglongde</t><phoneticPr fontId="1" type="noConversion"/>',
        h: 'zhanglongde',
        w: 'zhanglongde' },
    B1:
      { t: 's',
        v: 'Man',
        r: '<t>Man</t><phoneticPr fontId="1" type="noConversion"/>',
        h: 'Man',
        w: 'Man' },
    C1: { t: 'n', v: 27, w: '27' },
    '!margins':
      { left: 0.7,
        right: 0.7,
        top: 0.75,
        bottom: 0.75,
        header: 0.3,
        footer: 0.3 } },
  'testB':{ '!ref': 'A1:C1',
     A1:
       { t: 's',
         v: 'zld',
         r: '<t>zld</t><phoneticPr fontId="1" type="noConversion"/>',
         h: 'zld',
         w: 'zld' },
     B1:
       { t: 's',
         v: 'M',
         r: '<t>M</t><phoneticPr fontId="1" type="noConversion"/>',
         h: 'M',
         w: 'M' },
     C1:
       { t: 's',
         v: '27岁',
         r: '<r><t>27</t></r><r><rPr><sz val="11"/><color theme="1"/><rFont val="宋体"/><family val="3"/><charset val="134"/></rPr><t>岁</t></r><phoneticPr fontId="1" type="noConversion"/>',
         h: '27<span style="font-size:11px;">岁</span>',
         w: '27岁' },
     '!margins':
       { left: 0.7,
         right: 0.7,
         top: 0.75,
         bottom: 0.75,
         header: 0.3,
         footer: 0.3 } }
  }
}

XLSX.writeFile(workbook, 'myWorkbook.xlsx')
XLSX.writeFile(wb2, 'myWorkbook2.xlsx')

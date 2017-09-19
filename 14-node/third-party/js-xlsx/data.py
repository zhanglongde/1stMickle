import sys
import xlrd
import json

file =sys.argv[1]
data = xlrd.open_workbook(file)
table=data.sheets()[0]

def haveNoIndex(table):
    returnData=[]
    keyMap=table.row_values(0)
    for i in range(table.nrows):#row
        tmpmp={}
        tmpInd=0
        for k in table.row_values(i):
            tmpmp[keyMap[tmpInd]]=k
            tmpInd=tmpInd+1
        returnData.append(tmpmp);
    return json.dumps(returnData,ensure_ascii=False,indent=2)

returnJson= haveNoIndex(table)
fp = open(file+".json","w",encoding='utf-8')
fp.write(returnJson)
fp.close()
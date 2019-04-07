默认文件名
控制用户请求所得的内容存为一个文件的时候提供一个默认的文件名，文件直接在浏览器上显示或者在访问时弹出文件下载对话框

Response.AppendHeader("Content-Disposition","attachment;filename=FileName.txt");
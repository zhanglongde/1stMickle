DTD
1.文档类型


html4
html5为什么只需要写<!DOCTYPE HTML>
html4基于SGML，需要对DTD进行引用，才能告知浏览器文档所使用的文档类型
html5不是基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为


如果不写文档类型，会有什么效果？
DOCTYPE不存在或者格式不正确会导致文档以兼容模式(怪异模式)显示




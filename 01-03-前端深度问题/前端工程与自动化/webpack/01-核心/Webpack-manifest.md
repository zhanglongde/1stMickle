# Webpack manifest文件 #
    webpack 的 runtime 和 manifest，管理所有模块的交互。
    在浏览器运行时，webpack 用来连接模块化的应用程序的所有代码

## runtime ##
在模块交互时，连接模块所需的加载和解析逻辑

## manifest ##
当编译器(compiler)开始执行、解析和映射应用程序时，它会保留**所有模块的详细要点**，这个**数据集合**称为 "Manifest"。
当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。
无论你选择哪种模块语法，那些 import 或 require 语句现在都已经转换为** __webpack_require__ **方法，此方法指向模块标识符(module identifier)。
通过使用 manifest 中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块。
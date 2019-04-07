基础
首先，template被编译成AST
AST经过generate得到render函数
render返回VNode



createCompiler
compileToFunctions
functionCompileCache 缓存
baseCompile



编译结束产生两个结果
VNode
实例化，及new Vue()



数据驱动视图的灵魂
状态更新触发模板编译，应用到真实的DOM
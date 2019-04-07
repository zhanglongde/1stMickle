
http://octman.com/blog/2016-08-27-babel-notes/
词法1.解析:使用 babylon 解析器对输入的源代码字符串进行解析并生成初始 AST（File.prototype.parse）
语法2.转换-traverse:利用 babel-traverse 这个独立的包对 AST 进行遍历，并解析出整个树的 path，通过挂载的 metadataVisitor 读取对应的元信息
语义3.转换-transform：遍历 AST 树并应用各 transformers（plugin） 生成变换后的 AST 树
4.生成：利用 babel-generator 将 AST 树输出为转码后的代码字符串


babel的AST生成是直接使用babylon这个单独的AST解析器包
基本的树的遍历分为DFS和BFS。AST树的遍历使用DFS


复杂的语法generator,使用CEK




babel基本使用
http://www.ruanyifeng.com/blog/2016/01/babel.html
配置文件.babellrc
安全全局babel npm install --global babel-cli
执行babel 文件名

webpack插件
babel-preset-2015



https://segmentfault.com/a/1190000010309799
JS语法树与代码转化
Code=>parse=>transform=>generate=>code


一、解释
词法分析
获得记号流

语法分析
babel-core 获得AST

语义分析
babel-traverse 最复杂的过程，获得优化后的AST

1.使用preset-react等将jsx代码转化为ES6代码
2.使用(babel dce 插件)对ES6进行N轮DCE（数据流分析）
  tree-shaking
3.使用preset-es2015/babel-runtime转码为es5
4.使用uglify对es5代码进行DCE
  uglifyJsPlugin compress选项


二、编译
babel-generator获得代码字符串
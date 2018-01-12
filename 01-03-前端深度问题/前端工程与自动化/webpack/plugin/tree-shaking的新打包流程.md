babel-core 获得AST
babel-traverse 最复杂的过程

1.使用preset-react等将jsx代码转化为ES6代码
2.使用(babel dce 插件)对ES6进行N轮DCE（数据流分析）
3.使用preset-es2015/babel-runtime转码为es5
4.使用uglify对es5代码进行DCE
  uglifyJsPlugin compress选项

babel-generator获得代码字符串
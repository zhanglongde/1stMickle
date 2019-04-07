tree-shaking作用
减小打包后的资源体积
tree-shaking是uglifyJs的一个步骤

DCE(dead code elimination)
DCE是去除死代码，而tree-shaking是保留或代码，是实现DCE的一种方式


打包用到的方法的基本原理
借助数据流，在静态分析阶段判断哪些代码不会被执行到，
tree-shaking借助ES6模块机制，通过import/export等关键字定义输入输出的方法
重命名只能通过关键字as,
模块一旦被import进来，就是只读的，根据名字，就可以从入口文件一路溯源到模块定义处，只把用到的方法打包进来


tree-shaking实现
拿到AST之后，webpack2会统计每个模块export的方法被使用的次数，并把没有用到的export语句删掉。
至于没有被export的定义，则要在后续的DCE（uglifyJS）过程中消除。
export/import之外的ES6代码，需要使用Babel进行转码，因为acorn只有解析功能，没有转换功能


tree-shaking打包表现
经过webpack2打包之后，未使用的export方法被标记为unused harmony export xxx
然后再经过uglify,未被export的定义被删除


.babelrc配置
babel-preset-es2015
modules:false





你的Tree-Shaking并没什么卵用
webpack uglifyJs的tree-shaking对于babel过的第三方工具库、组件库没有作用

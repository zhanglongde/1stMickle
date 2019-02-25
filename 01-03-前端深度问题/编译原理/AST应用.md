
### [AST in Modern JavaScript](https://juejin.im/entry/5a3cb739f265da43070375a6) ###
- webpack=>acorn
   vue-loader 模板编译

- babel=>babylon
Babel是如何读懂JS代码的

- Vue=>new Function
- eslint espree babel-eslint
- jscodeshiftCodemod

后处理器 POSTCSS
postcss 是一个css后处理器的框架，可以用来分析css规则，并给出AST(抽象语法树)，可以很方便的用JS来修改CSS
可以在后处理环节上代替预处理器的功能，让你在书写css的过程中，不需要去使用预处理器的奇怪的语法。
①sass(or less) --> ②css(dev) --> ③css(production)
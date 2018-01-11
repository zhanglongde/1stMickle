Knockout, Vue 和 AvalonJS 等 MVVM 框架实现中是否用到 eval 或 Function?

Vue 和 Knockout 都用了 new Function()，avalon 应该也是。和 eval 本质上差不多。不想用 eval 就得自己写一个 js parser 解析表达式到 AST，然后对 AST 求值，Angular 就是这么做的。
https://www.zhihu.com/question/29743491

http://www.ruanyifeng.com/blog/2015/05/thunk.html
http://es6.ruanyifeng.com/#docs/generator-async#Thunk-函数
Thunk
是一种参数的求值策略，即函数的参数到底应该何时求值
多参数函数，将其转换成单参数的版本，且只接受回调函数作为参数。
区别于惰性求值，惰性求值是先传入回调函数，再传入值

任何函数，只要参数有回调函数，就能写成Thunk函数的形式
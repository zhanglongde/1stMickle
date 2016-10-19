
安装es2015 preset
将.babelrc文件拷贝到当前目录
执行命令babel generator.es5.js > generator.es6.js



利用webpack对ES6进行转码
webpack --progress --colors --watch



npm install babel-loader --save-dev
npm install babel-preset-es2015 --save-dev
首次安装好之后，可以直接npm install
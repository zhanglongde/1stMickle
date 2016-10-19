/**
 * Created by zhanglongde on 2016/9/4.
 */

var path = require('path');

//var entry_file = './06-数值的扩展/8-指数运算符/main.js';
//var outpu_file = './06-数值的扩展/8-指数运算符/bundle.js';
// var entry_file = './07-数组的扩展/es6/main.js';
//var outpu_file = '07-数组的扩展/bundle.js';
var entry_file = './18-class/es6/main.js';
var outpu_file = 'bundle.js';

module.exports = {
    entry: entry_file,
    output: {
        path: __dirname,
        filename: outpu_file
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}

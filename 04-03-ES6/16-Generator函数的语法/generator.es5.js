/**
 * Created by zhanglongde on 2016/8/30.
 */
require('babelify/polyfill');

function * helloWorldGenerator(){
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
hw.next();
hw.next();
hw.next();
hw.next();
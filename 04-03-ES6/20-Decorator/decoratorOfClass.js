/**
 * Created by zhanglongde on 2016/7/27.
 */

function testable(target) {
    target.isTestable = true;
}

@testable
class MyTestableClass{}

console.log(MyTestableClass.isTestable)

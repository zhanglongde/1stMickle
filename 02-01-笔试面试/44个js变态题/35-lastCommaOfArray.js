/**
 * Created by zhanglongde on 2016/8/3.
 */

//因为javascript 在定义数组的时候允许最后一个元素后跟一个,,
//    所以这是个长度为三的稀疏数组(这是长度为三, 并没有 0, 1, 2三个属性哦)

(function(){
    console.log([,,,].join(", "));
})();

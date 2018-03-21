/**
 * Created by zhanglongde on 2016/8/3.
 */

(function(){
    function captureOne(re, str) {
        var match = re.exec(str);
        return match && match[1];
    }
    var numRe  = /num=(\d+)/ig,
        wordRe = /word=(\w+)/i,
        a1 = captureOne(numRe,  "num=1"),
        a2 = captureOne(wordRe, "word=1"),
        a3 = captureOne(numRe,  "NUM=2"),
        a4 = captureOne(wordRe,  "WORD=2");
    console.log([a1 === a2, a3 === a4]);
})();


(function(){
    }
)();


//因为第一个正则有一个 g 选项 它会‘记忆’他所匹配的内容,
//    等匹配后他会从上次匹配的索引继续, 而第二个正则不会

//正则g选项
;(function(){
    var myRe = /ab*/g;
    var str = 'abbcdefabh';
    var myArray;
    while ((myArray = myRe.exec(str)) !== null) {
        var msg = 'Found ' + myArray[0] + '. ';
        msg += 'Next match starts at ' + myRe.lastIndex;
        console.log(myRe)
        console.log(msg);
    }
})();
// Found abb. Next match starts at 3
// Found ab. Next match starts at 9

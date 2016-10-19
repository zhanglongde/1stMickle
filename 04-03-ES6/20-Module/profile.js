/**
 * Created by zhanglongde on 2016/7/27.
 */

// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};



export function multiply(x,y){
    return x*y;
}

function v1(){}
function v2(){}

export {
v1 as stream1,
v2 as stream2,
v2 as steamLatestVersion
}


export var foo = 'bar';
setTimeout(()=>foo='baz',500);
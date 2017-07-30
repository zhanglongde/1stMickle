http://www.alloyteam.com/2016/05/javascript-timer/

setImmediate是setTimeout0的替代品，会有延迟
promise也是会有延迟的，Promise的延迟比setImmediate更低

requestAnimationFrame跟屏幕刷新同步，
大多数屏幕的刷新频率都是60Hz，
对应的requestAnimationFrame大概每隔16.7ms触发一次，
如果屏幕刷新频率更高，requestAnimationFrame也会更快触发。
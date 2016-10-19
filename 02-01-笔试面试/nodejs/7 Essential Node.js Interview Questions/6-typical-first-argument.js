/**
 * Created by zhanglongde on 2016/8/28.
 */

//Node.js core modules, as well as most of the community-published ones, follow a pattern
//whereby the first argument to any callback handler is an optional error object.
//    If there is no error, the argument will be null or undefined.

function callback(err, results) {
    // usually we'll check for the error before handling results
    if(err) {
        // handle error somehow and return
    }
    // no error, perform standard callback handling
}

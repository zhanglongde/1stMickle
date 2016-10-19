/**
 * Created by zhanglongde on 2016/8/28.
 */
//Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler
// for uncaughtException even
process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});


//The preferred way is to add another layer between your application
//and the Node.js process which is called the domain.
//
//    Domains provide a way to handle multiple different I/O operations as a single group.
//    So, by having your application, or part of it, running in a separate domain,
//    you can safely handle exceptions at the domain level, before they reach the Process level.

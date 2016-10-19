/**
 * Created by zhanglongde on 2016/8/28.
 */

{
    console.time("loop");
    for (var i = 0; i < 1000000; i += 1){
        // Do nothing
    }
    console.timeEnd("loop");
}

//The time required to run this code in Google Chrome is
//considerably more than the time required to run it in Node.js.
//Explain why this is so, even though both use the v8 JavaScript Engine.



//Within a web browser such as Chrome, declaring the variable i
//outside of any function’s scope makes it global
//and therefore binds it as a property of the window object.
//As a result, running this code in a web browser
//requires repeatedly resolving the property i
//within the heavily populated window namespace in each iteration of the for loop.
//
//                                                                                                                                                                                                                                                                                                                                                     In Node.js, however, declaring any variable outside of any function’s scope binds it only to the module’s own scope (not the window object)
//which therefore makes it much easier and faster to resolve.
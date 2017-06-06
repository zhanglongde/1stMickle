/**
 * Created by JUEXINPC-008 on 2017/6/6.
 */
const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('发生了一个事件!')
})

myEmitter.emit('event');
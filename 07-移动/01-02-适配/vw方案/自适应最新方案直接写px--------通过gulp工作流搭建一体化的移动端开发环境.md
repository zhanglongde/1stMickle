自适应最新方案直接写px--------通过gulp工作流搭建一体化的移动端开发环境

https://juejin.im/post/5a7c03da5188257a624cb880?utm_source=gold_browser_extension

px2vm
// UI设计稿750px宽，那么100vw = 750px，即1vw = 7.5px
var pxtoviewport = require('postcss-px-to-viewport'); // 代码中写px编译后转化成vm

var processors = [
    pxtoviewport({
        viewportWidth: 750,
        viewportHeight: 1334,
        unitPrecision: 5,
        viewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false
    })
];

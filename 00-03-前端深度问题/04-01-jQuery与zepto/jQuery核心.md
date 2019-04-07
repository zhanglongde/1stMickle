高兼DOM动封插件

高级选择器

浏览器兼容新
事件绑定 on
$().css()

DOM操作
创建元素 $()
插入 插入到内部:append/prepend 插入到外部:before/after insertAfter/insertBefore
删除 remove
包裹 wrap
closest() parent() parents()
finds()


js动画
$().animate(键值对，时间，曲线函数，回调)

封装
ready
$.extend
$.param
ajax get post

插件
(function($){
  $.fn.alert = function() {
    alert(this.)
  }
})(jQuery)
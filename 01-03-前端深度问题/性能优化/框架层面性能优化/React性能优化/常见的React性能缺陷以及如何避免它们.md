How to greatly improve your React app performance

1.明智地使用shouldComponentUpdate
  属性深比较

2.控制对DOM所做的修改
  Fastdom:eliminates layout thrashing by batching DOM read/write operations
3.通过debounce/throttle将回调延迟
  input的onchange事件
  window的resize事件
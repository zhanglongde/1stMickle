1.焦点元素
  默认情况下，只有变淡元素才可以获得焦点，因为只有表单元素才可以交互
  
2.让非表单元素获得焦点：现将tabindex设置为-1，再调用focus方法
  
  
3.document.activeElement
  管理DOM焦点，保存当前获得焦点的元素
  该属性IE不支持
  
4.获得焦点的方式
  页面载入
  用户输入（tab键）
  focus方法
  autofocus属性
  
5.document.hasFocus  
 表示当前文档是否有元素被激活或者或者获得焦点
 
6.失去焦点
  blur
7. 焦点事件
  不会冒泡：blur focus
  触发冒泡：focusin focusout
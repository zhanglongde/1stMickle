1.文本截断
.text_truncate{
    overflow:hidden
    text-overflow:ellipsis
    white-space:nowrap
}

@mixin text_truncate (){
    overflow:hidden
    text-overflow:ellipsis
    white-space:nowrap
}

2.清除浮动
@minxin clearFix() {
  &:after{
    content:'';
    display:block;
    clear:both
  }
}
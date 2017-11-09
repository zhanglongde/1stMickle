1.业务
  干什么用？
2.技术栈与组件库
  为什么选用Vue.js
  为什么组件库？如何维护？
3.布局
  左右布局
  右边：工具栏与主体，上下
  主体：列表与详情，左右或者上下
  详情：按邮件（Message）依次
  Message:折叠与展开
  展开：头部 主体 附件 草稿
  草稿：头部 主体 附件 工具栏
4.数据结构
  setting
  profile emailAddress
  label 拍平与嵌套
  thread id historyId messages labelIds
         除id外，labelIds等属性由messages属性计算而来
  message id historyId labelIds
          只有labelIds isFlagged属性会变化，其他属性一旦形成，不在变化了
          注意组件内部数据：
          其draft属性由计算而来，属于组件内部显示数据
          md5属性也是组件数据
  draft draftId不变
  attachments
5.数据流
                    (部分组件数据如ajax，md5等用于显示，数据封闭在组件内部)
  store(state)=>getter=>view=>
                                  =>
       (commit)<=action(dispatch) <= indexedDB
                  ^
                  ||(notification/ajax:get)
              server<=(ajax:post delete put)
6.难点
列表 初始化：列表分标签初始化，如何处理标签交叉问题=>通过labelIds关联，historyId标记版本，用一个内存缓存队列保证数据唯一性
            整页拉取id-historyId,分片拉取详情列表，分片大小由首屏所能够容纳的数量决定，与DB数据对比historyId，将版本更新的邮件合并成一片
     同步：WebSocket通知，historyList处理
          通知延迟队列处理
     缓存：持久化缓存与内存缓存
          内存数据来源:标签初始化加载到内存中/通知加到内存中/本地直接修改内存
标签 排序 数量统计 同步 树形
业务 会话模式与非会话模式 搜索 未读优先
     列表与详情同步问题
邮件详情 内联图片加载:会话模式懒执行 CID替换与懒加载
        图片缓存:indexedDB对比CEF
        回复折叠:DOM diff
        数据同步问题：分离列表数据与详情数据还是两者共享一份
                     涉及到草稿数据的本地修改与通知数据：草稿新建之后未保存之前，不进行服务器保存
发邮件 附件与内联图片的处理
      网盘附件的权限问题
草稿 自动保存:防抖动 定时保存与通知冲突 保存延迟队列处理
     客户端同步
     离线缓存
编辑器 兼容性 与非编辑器部分交互 原生js处理DOM
      图片粘贴 base64
      execCommand selection range
7.有意思的点
转发 node-http-proxy
国际化 node-xlsx js-xlsx
字体 字体包还是font-family
8.失败点
8.1旧的列表同步策略
404失效，导致：1）很长时间没有打开，首次加载巨慢 2）虽然近期打开过，但是由于客户邮件量巨大，无法destroy
向上向下
8.2旧的持久化缓存策略
vuex 插件钩子
9.性能考虑
内存缓存的阈值
indexDB阈值，超出阈值对indexDB的利用
改成无限滚动，如何回收DOM
首屏加载效率：取决于持久化缓存的数据量，对于变化较大的邮箱退化为请求接口数据
            增加标签首次初始化拉列表大概200ms的迟延
1.业务
2.技术栈与组件库
  为什么组件库？如何维护？
3.布局
4.数据结构
  setting
  profile emailAddress
  label 拍平与嵌套
  thread id historyId messages labelIds
  message id historyId labelIds
  draft draftId不变
  attachments
5.难点
列表加载 初始化：historyId 缓存：持久化缓存与内存缓存 同步：WebSocket与historyList
标签 排序 数量统计 同步 树形
业务 会话模式与非会话模式
     列表与详情同步问题
邮件详情 内联图片加载:CID替换与懒加载 图片缓存 重复内部分折叠:DOM diff
发邮件 附件与内联图片的处理
      网盘附件的权限问题
草稿及多客户端同步 定时保存与通知冲突
编辑器 兼容性 与非编辑器部分交互
       图片粘贴 base64
6.有意思的点
转发
国际化
7.性能考虑
内存缓存的阈值
indexDB阈值，超出阈值对indexDB的利用
改成无限滚动，如何回收DOM
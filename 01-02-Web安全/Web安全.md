1.XSS跨站脚本攻击
1.1定义
通过HTML注入，篡改页面，插入恶意脚本，从而在用户浏览网页时，控制用户浏览器的一种攻击
1.2分类
1)反射型XSS（非持久型XSS）
  简单地把用户输入的数据“反射”给浏览器
  黑客往往需要诱使用户“点击”一个恶意链接，或者出现在搜索页面
2）存储型XSS（持久型XSS）
   会把用户输入的数据“存储”在服务器端
   例如，在个人信息或发表文章等地方，加入代码，如果没有过滤或过滤不严，
        那么这些代码将存储到服务器中，用户访问该页面的时候出发代码执行
   比较危险，容易造成蠕虫，盗窃cookie
3）DOM-based XSS
   通过修改页面的DOM节点形成XSS
1.3原理
   破坏html css js构造
1.4防御
    1）http only,js无法读取cookie
    2）输入输出检查转义
       html编码
       style CSS编码
       script JavaScript编码
    3）输入输出过滤XSS-filter  需要过滤哪些字符：没有闭合的标签
       自定义白名单
    4）CSP 内容安全策略 白名单


2.CSRF
2.1定义
攻击者利用用户身份操作用户账户的一种攻击方式
2.2分类
2.3原理
    1）预测身份：Session Cookie在浏览器打开另一个Tab也是有效的，诱使用户访问目标站点，使得Session Cookie有效
    再试试CSRF攻击
    2）预测出URL的所有参数与参数值，才能成功构造构造一个伪造请求
2.4防御
1）验证码
   导致用户体验不佳
2）Referer Check
   document.referer:刚刚访问过的网页的URL。例如，提交发帖表单时，Referer值必然是发帖表单所在的页面
   防止图片盗链
   检查请求是否来自合法的“源”
   缺点：
   通过检查Referer是否合法合法来判断用户是否被CSRF攻击，只是充分条件
   服务器并非什么时候都能取到Referer
3)Anti CSRF Token
  加密参数
  Token需要同时放在表单和Session中。在提交请求时，服务器只需验证表单中的token与用户Session（cookie）中的Token是否一致；如果一致，认为是合法请求

3.点击劫持 clickJacking
3.1定义
点击劫持是一种视觉上的欺骗手段
攻击者使用一个透明的、不可见的iframe,覆盖在网页上，诱使用户在该网页上进行操作，
用户在不知情的情况下点击透明iframe页面
3.2分类
    1）iframe
    2）图片覆盖攻击 XSIO
    3）拖拽劫持与数据攻击
    4）触屏劫持
3.3原理
3.4防御
    1）frame busting
       通过js代码禁止iframe的嵌套
    2)X-Frame-Options
      HTTP header,值为DENY时，浏览器拒绝当前页加载任何frame页面

4.控制台攻击

5.中间人攻击

6.DNS劫持

7.http劫持
运营商在页面的HTML代码中，插入弹窗、广告等HTML代码

8.盗链

构建Native与Web之间双向通信的通道。

注入 在window对象上挂载方法或者对象
映射 通过约定协议
通信 打开URL:window.location.href/window.open
     添加iframe iframe更为保险
调用 类似JSONP调用流程

# Webview #
## iOS ##
UIWebview 
## WKWebView iOS8 ##
[自己动手打造基于 WKWebView 的混合开发框架](https://lvwenhan.com/ios/460.html)
### 优势 ###
js 可以直接使用已经事先注入 js runtime 的 js 接口给 Native 层传值，不必再通过苦逼的 iframe 制造页面刷新再解析自定义协议的奇怪方式。
支持高达 60 fps 的滚动刷新率，内置了手势探测。
### 苹果的runtime ###
苹果在 WKWebView 中的 js runtime 里事先注入了一个 window.webkit.messageHandlers.OOXX.postMessage() 方法
## Android:webview ##
## Safari ##
## Chrome ##

# JS Context #
window对象

# [JSBridge的原理](https://juejin.im/post/5abca877f265da238155b6bc) #
## JavaScript调用Native ##
JavaScript调用Native的方式有2种：1.注入API 2.拦截URL SCHEME
### 注入API ###
注入API原理：通过WebView提供的接口，向JavaScript的Context（window）中**注入对象或者方法**，
            让JavaScript调用时，直接执行相应的Native逻辑
iOS window.webkit.messageHandlers.nativeBridge.postMessage(message);
Android window.nativeBridge.postMessage(message);
### 拦截URL SCHEME ###
#### URL SCHEME ####
URL SCHEME是一种类似于url的链接，是为了方便app直接互相调用设计的，形式和普通的 url 近似，主要区别是 protocol 和 host 一般是自定义的
#### 拦截流程 ####
Web端通过某种方式发送URL SCHEME请求之后，Native拦截到请求，并根据URL SCHEME进行相关操作

iframe.src方式发送URL
缺点：
使用 iframe.src 发送 URL SCHEME 会有 url 长度的隐患。
创建请求，需要一定的耗时，比注入 API 的方式调用同样的功能，耗时会较长。
优点：
支持 iOS6。而现在的大环境下，iOS6 占比很小，基本上可以忽略，所以并不推荐为了 iOS6 使用这种 并不优雅 的方式。

locaiton.href
locaiton.href**连续调用**Native容易丢失一些调用

Ajax请求
有些方案为了规避 url 长度隐患的缺陷，在 iOS 上采用了使用 Ajax 发送同域请求的方式，并将参数放到 head 或 body 里。这样，虽然规避了 url 长度的隐患，但是 WKWebView 并不支持这样的方式。

## Native调用JavaScript ##
JavaScript方法挂在全局的window上

## JSBridge 如何引用 ##
### 由 Native 端进行注入 ###
注入方式和 Native 调用 JavaScript 类似，直接执行桥的全部代码。
### 由 JavaScript 端引用 ###
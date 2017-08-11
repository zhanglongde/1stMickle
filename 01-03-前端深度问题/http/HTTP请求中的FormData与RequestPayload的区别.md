https://blog.kaolafed.com/2017/08/10/HTTP%E8%AF%B7%E6%B1%82%E4%B8%AD%E7%9A%84Form%20Data%E4%B8%8ERequest%20Payload%E7%9A%84%E5%8C%BA%E5%88%AB/


Form Data 和 Request Payload 区别

如果请求头里设置Content-Type: application/x-www-form-urlencoded，那么这个请求被认为是表单请求，参数出现在Form Data里，格式为key=value&key=value&key=value…

原生的AJAX请求头里设置Content-Type:application/json，或者使用默认的请求头Content-Type:text/plain;参数会显示在Request payload块里提交。
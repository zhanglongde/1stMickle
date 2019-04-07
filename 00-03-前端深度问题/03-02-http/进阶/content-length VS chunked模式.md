https://imququ.com/post/transfer-encoding-header-in-http.html

Content-Length
计算实体长度，并通过头部告诉对方


Transfer-Encoding: chunked
不依赖头部的长度信息，也能知道实体的边界。
最新的 HTTP 规范里，只定义了一种传输编码：分块编码（chunked）。
分块编码相当简单，在头部加入 Transfer-Encoding: chunked 之后，就代表这个报文采用了分块编码。
这时，报文中的实体需要改为用一系列分块来传输。每个分块包含十六进制的长度值和数据，长度值独占一行，长度不包括它结尾的 CRLF（\r\n），
也不包括分块数据结尾的 CRLF。最后一个分块长度值必须为 0，对应的分块数据没有内容，表示实体结束。



Content-Encoding 和 Transfer-Encoding 二者经常会结合来用，其实就是针对进行了内容编码（压缩）的内容再进行传输编码（分块）
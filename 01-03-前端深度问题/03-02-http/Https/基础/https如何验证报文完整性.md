HTTP+MAC
MAC(Message Authentication Code)，是一个数字签名，用来验证数据的完整性，可以检测到数据是否被串改。



客户端用HASH key 生成一个MAC（ Message Authentication Code），附在HTTP报文的后面，然后用session key 加密所有数据（HTTP + MAC），然后发送出去

服务器先用session key 解密数据，得到HTTP + MAC，然后自己用相同的算法计算自己的MAC，如果两个MAC相等，则数据没有被篡改。
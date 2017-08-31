pre master key
master key 主密值
session key 可以由master推到

master key
由于服务端和客户端都有一份相同的PreMaster secret和随机数，这个随机数将作为后面产生Master secret的种子，
结合PreMaster secret，客户端和服务端将计算出同样的Master secret。


其中，write MAC key，就是session secret或者说是session key。
Client write MAC key是客户端发数据的session secret，Server write MAC secret是服务端发送数据的session key。
http://www.jianshu.com/p/c6257cbef1b1
1.不能直接修改state
使用setState
this.setState({title:'React'})
2.state的更新是异步的
this.setState((preState, props) => {
  counter: preState.quantity + 1;
})
3.state的更新是一个浅合并shadow merge的过程
4.state与immutable
5.state可变 props不可变
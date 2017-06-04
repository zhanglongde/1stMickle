/**
 * Created by Administrator on 2017/6/3.
 */
import React,{Component} from 'react'

class ActionLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 1
    }
    this.btnCls = {
      backgroundColor:'#58a',
      color:'#fff',
      display:'block',
      width:'200px',
      height:'30px',
      lineHeight:'30px',
      textDecoration:'none'
    }
  }

  handleClick(e) {
//     不能使用返回false的方式组织默认行为
    e.preventDefault();
    // redux中才有store.getState
    let count = this.state.count
    e.target.innerText = count
//     方法1：一般形式
//     this.setState({
//       count:++count
//     })

//     方法2：回调形式
    this.setState(prevState => ({
      count:++count
    }))
  }

  render () {
    return (
      <div>
        <a href="#" onClick={this.handleClick.bind(this)} style={this.btnCls}>Click me</a>

        {/*处于草案阶段*/}
        {/*<a href="#" onClick={::this.handleClick} style={this.btnCls}>双冒号语法，只绑定不传参</a>*/}

        {/*箭头函数*/}
        <a href="#" onClick={(e) => {this.handleClick(e)}} style={this.btnCls}>Click me</a>
      </div>
      )
  }
}

export default ActionLink;
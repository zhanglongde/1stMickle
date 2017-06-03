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
    this.setState({
      count:++count
    })
  }

  render () {
    return (
        <a href="#" onClick={this.handleClick.bind(this)} style={this.btnCls}>Click me</a>
      )
  }
}

export default ActionLink;
/**
 * Created by Administrator on 2017/6/3.
 */
import React,{Component} from 'react'
import * as Cls from './utils'

// 定义两个无状态组件
function LoginButton(props) {
  return (
    <button style={props.style} onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button style={props.style} onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.state = {isLoggedIn: false};

  }

  handleLoginClick() {
    this.setState({isLoggedIn:true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn:false})
  }

  render() {
    let button = null
    if (this.state.isLoggedIn) {
      button = <LoginButton style={Cls.btnCls} onClick={this.handleLogoutClick}/>
    } else {
      button = <LogoutButton style={Cls.btnCls} onClick={this.handleLoginClick}/>
    }

    let isLoggedIn = this.state.isLoggedIn
    return (
      <div>
        {button}

        <br/>
        {/*if条件语句无法识别*/}
          if (this.state.isLoggedIn) {
            <LoginButton style={Cls.btnCls} onClick={this.handleLogoutClick}/>
          } else {
            <LogoutButton style={Cls.btnCls} onClick={this.handleLoginClick}/>
          }

        <div>
          三目运算符
          {
            isLoggedIn?(<LoginButton style={Cls.btnCls} onClick={this.handleLogoutClick}/>):(<LogoutButton style={Cls.btnCls} onClick={this.handleLoginClick}/>)
          }
        </div>
      </div>
    )
  }
}

export default LoginControl;
/**
 * Created by Administrator on 2017/6/3.
 */
import React from 'react'
import * as Cls from './utils'

function WarningBanner(props) {
  if (!props.warn) {
    // 阻止渲染，隐藏组件
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

class Page extends React.Component {
  constructor(props){
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }

  render() {
    return (
      <div className="page">
        <WarningBanner warn={this.state.showWarning}/>
        <button style={Cls.btnCls} onClick={this.handleToggleClick}>
          {this.state.showWarning?'Hide':'Show'}
        </button>
      </div>
    )
  }
}

export default Page;
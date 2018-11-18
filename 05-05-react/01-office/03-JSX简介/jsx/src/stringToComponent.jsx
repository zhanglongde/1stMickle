import React, { Component } from 'react';

// import Button from './com/Button';
// const {Tab} = require('./com')
const _antd = require("./com");

const _interopRequireDefault = obj => {
  return obj && obj.__esModule ? obj : { default: obj };
};

const _antd2 = _interopRequireDefault(_antd);

const arr = ['Button', 'Tab'];

export default class MyComp extends Component {
  renderComp = arr => {
    return arr.map(v => {
      return React.createElement(_antd2[v], null, 123);
      //<Input /> 设置children为字符串会报 xss错误 所以改成两个<Button />了
    })
  }
  render(){
    return(
      <div>
        {/*<Button></Button>*/}
        {/*<Tab></Tab>*/}
        {this.renderComp(arr)}
      </div>
    )
  };
}
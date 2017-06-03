import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const numbers = [1,2,3,4,5]
// 声明一个listItems的片段，注意没有根元素，也没有return
const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>)

// 无论是函数声明还是函数表达式，首字母都必须大写
const UlEle = function () {
  let arr = Array.from(new Array(7),(value,index)=>index)
  return (
    <ul>
      {arr.map(number => <li key={number.toString()}>{number}</li>)}
    </ul>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {listItems}
        </ul>

        <hr/>
        <UlEle/>
      </div>
    );
  }
}

export default App;

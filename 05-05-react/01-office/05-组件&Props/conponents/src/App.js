import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// es6组件
import Test from './Test'

// es5组件
function Welcome(props) {
  return <h1>hello,{props.name}</h1>
}

// 组合组件
class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Test num="27"/>
        <Test num="21"/>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Jack" />
      </div>
    );
  }
}

export default App;

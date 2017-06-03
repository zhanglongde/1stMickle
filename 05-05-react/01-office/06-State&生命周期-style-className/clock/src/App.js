import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
}

export default App;

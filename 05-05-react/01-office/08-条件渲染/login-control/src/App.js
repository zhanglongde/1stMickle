import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginControl from './LoginContol'
import Page from './Page'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginControl/>
        <Page/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActionLink from './ActionLink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <ActionLink />
      </div>
    );
  }
}

export default App;

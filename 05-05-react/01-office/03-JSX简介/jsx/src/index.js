import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello,{formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}

const element = (
  <h1>
    {/*Hello,{getGreeting(user)}*/}
   <App></App>
  </h1>
)

{/*const element = <img alt="占位"/>*/}

// const element = React.createElement(
//   'h1',
//   {className:'greeting'},
//   'Hello,world!'
// )



{/*ReactDOM.render(<App />, document.getElementById('root'));*/}
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();

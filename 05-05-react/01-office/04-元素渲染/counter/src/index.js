import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function tick() {
  const element = (
    <div>
      <h1>Hello,world!</h1>
      <h2>Its is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}

setInterval(tick,1000)

/*ReactDOM.render(<App />, document.getElementById('root'));*/
registerServiceWorker();

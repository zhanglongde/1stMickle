const React = require('react')
const ReactDOM = require('react-dom')
const Provider = require('react-redux').Provider
const App = require('./app.jsx')
const store = require('./store')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

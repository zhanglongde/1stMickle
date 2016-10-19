const React = require('react')
const ReactDOM = require('react-dom')
const actions = require('./action')
const connect = require('react-redux').connect

class App extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={this.addItem.bind(this)}>
                    Add item
                </button>
                <ul>
                    {this.props.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }

    addItem() {
        var input = ReactDOM.findDOMNode(this.refs.input)
        var action = actions.addItem(input.value.trim())
        this.props.dispatch(action)
        input.value = ''
    }
}

function selectItems(state) {
    return {
        items: state.items
    }
}

module.exports = connect(selectItems)(App)

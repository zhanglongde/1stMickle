const combineReducers = require('redux').combineReducers

function items(state = [], action) {
    switch (action.type) {
        case 'add':
            return [...state, action.text]
        default:
            return state
    }
}

module.exports = combineReducers({
    items
})

webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	var Provider = __webpack_require__(159).Provider;
	var App = __webpack_require__(181);
	var store = __webpack_require__(183);

	ReactDOM.render(React.createElement(
	    Provider,
	    { store: store },
	    React.createElement(App, null)
	), document.getElementById('app'));

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	var actions = __webpack_require__(182);
	var connect = __webpack_require__(159).connect;

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement('input', { type: 'text', ref: 'input' }),
	                React.createElement(
	                    'button',
	                    { onClick: this.addItem.bind(this) },
	                    'Add item'
	                ),
	                React.createElement(
	                    'ul',
	                    null,
	                    this.props.items.map(function (item, i) {
	                        return React.createElement(
	                            'li',
	                            { key: i },
	                            item
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'addItem',
	        value: function addItem() {
	            var input = ReactDOM.findDOMNode(this.refs.input);
	            var action = actions.addItem(input.value.trim());
	            this.props.dispatch(action);
	            input.value = '';
	        }
	    }]);

	    return App;
	}(React.Component);

	function selectItems(state) {
	    return {
	        items: state.items
	    };
	}

	module.exports = connect(selectItems)(App);

/***/ },

/***/ 182:
/***/ function(module, exports) {

	'use strict';

	function addItem(text) {
	    return {
	        type: 'add',
	        text: text
	    };
	}

	module.exports = {
	    addItem: addItem
	};

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createStore = __webpack_require__(166).createStore;
	var reducer = __webpack_require__(184);

	module.exports = createStore(reducer);

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var combineReducers = __webpack_require__(166).combineReducers;

	function items() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'add':
	            return [].concat(_toConsumableArray(state), [action.text]);
	        default:
	            return state;
	    }
	}

	module.exports = combineReducers({
	    items: items
	});

/***/ }

});
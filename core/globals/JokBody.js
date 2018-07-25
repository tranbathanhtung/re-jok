var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import ReactDOM from 'react-dom';
import { withTheme } from 'styled-components';
import Modal from '../Modal';
import Notification from '../Notification';
import Sidebar from '../Sidebar';
import JokTheme from '../theme/JokTheme';

var defaultProps = {
    theme: {}
};

var JokBody = function (_React$PureComponent) {
    _inherits(JokBody, _React$PureComponent);

    function JokBody() {
        _classCallCheck(this, JokBody);

        return _possibleConstructorReturn(this, (JokBody.__proto__ || Object.getPrototypeOf(JokBody)).apply(this, arguments));
    }

    _createClass(JokBody, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!document.body) throw new Error("Unexpectedly missing <body>.");
            var body = document.body;
            this._popup = document.createElement('div');
            body.appendChild(this._popup);
            this._render();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this._render();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (!document.body) throw new Error("Unexpectedly missing <body>.");
            var body = document.body;
            ReactDOM.unmountComponentAtNode(this._popup);
            body.removeChild(this._popup);
        }
    }, {
        key: '_render',
        value: function _render() {
            var _props = this.props,
                children = _props.children,
                theme = _props.theme,
                rest = _objectWithoutProperties(_props, ['children', 'theme']);

            ReactDOM.render(React.createElement(
                JokTheme,
                { theme: theme },
                React.createElement(children.type, Object.assign({}, children.props, rest))
            ), this._popup);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return JokBody;
}(React.PureComponent);

JokBody.defaultProps = defaultProps;


export default withTheme(JokBody);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import Modal from '../Modal';
import Notification from '../Notification';
import Sidebar from '../Sidebar';

var JokBody = function (_React$PureComponent) {
    _inherits(JokBody, _React$PureComponent);

    function JokBody(props) {
        _classCallCheck(this, JokBody);

        var _this = _possibleConstructorReturn(this, (JokBody.__proto__ || Object.getPrototypeOf(JokBody)).call(this, props));

        _this._popup = document.createElement('div');
        if (!document.body) throw new Error("Unexpectedly missing <body>.");

        var body = document.body;
        _this._popup = document.createElement('div');
        body.appendChild(_this._popup);
        return _this;
    }

    _createClass(JokBody, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (!document.body) throw new Error("Unexpectedly missing <body>.");
            var body = document.body;
            body.removeChild(this._popup);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ['children']);

            return createPortal(React.createElement(children.type, Object.assign({}, children.props, rest)), this._popup);
        }
    }]);

    return JokBody;
}(React.PureComponent);

export default JokBody;
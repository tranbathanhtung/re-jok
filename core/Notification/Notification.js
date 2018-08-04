var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import NotificationContent from './NotificationContent';
import { StyledNotificationWrapper, notifTransition } from './style';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import JokBody from '../globals/JokBody';

import { generalId } from '../helpers';

import store from './store';

var dispatch = store.dispatch,
    getState = store.getState,
    getConfig = store.getConfig,
    subscribe = store.subscribe;


var insertNotif = function insertNotif(options) {
  //If not set key notif... it will general random id
  var id = options.key || generalId();

  dispatch({
    type: 'INSERT',
    payload: Object.assign({}, options, {
      id: id
    })
  });

  return id;
};

var removeNotif = function removeNotif(key) {
  dispatch({
    type: 'REMOVE',
    payload: {
      id: key
    }
  });
};

var configNotif = function configNotif(options) {
  dispatch({
    type: 'CONFIG',
    payload: Object.assign({}, options)
  });
};

var Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    _this.renderNotification = function () {
      var _this$state = _this.state,
          queue = _this$state.queue,
          config = _this$state.config;


      return queue.map(function (notif, i) {
        var id = notif.id;
        var timeout = notif.timeout || 4000;

        return React.createElement(NotificationContent, {
          key: id,
          id: id,
          notif: notif,
          timeout: timeout,
          config: config
        });
      });
    };

    _this.state = {
      queue: [],
      config: {}
    };
    return _this;
  }

  _createClass(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var queue = void 0;
      var config = void 0;
      var stack = this.props.stack;

      var addToStore = function addToStore() {
        requestAnimationFrame(function () {
          var length = void 0;
          queue = getState() || [];
          config = getConfig() || {};

          length = queue.length;

          if (stack && length && length > stack) {
            var id = queue[0].id;
            dispatch({
              type: 'REMOVE',
              payload: {
                id: id
              }
            });
            queue = getState() || [];
          }

          _this2.setState({ queue: queue, config: config });
        });
      };
      this.unSubStore = subscribe(addToStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unSubStore();
    }
  }, {
    key: 'render',
    value: function render() {
      var config = this.state.config;


      return React.createElement(
        JokBody,
        null,
        React.createElement(
          StyledNotificationWrapper,
          Object.assign({}, this.props, { config: config }),
          React.createElement(
            CSSTransitionGroup,
            {
              transitionName: notifTransition,
              transitionEnterTimeout: 250,
              transitionLeaveTimeout: 250
            },
            this.renderNotification()
          )
        )
      );
    }
  }], [{
    key: 'open',
    value: function open() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return insertNotif(Object.assign({}, options));
    }

    //it only work when notification has key

  }, {
    key: 'close',
    value: function close(key) {
      return removeNotif(key);
    }
  }, {
    key: 'config',
    value: function config() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return configNotif(Object.assign({}, options));
    }
  }]);

  return Notification;
}(React.Component);

export default Notification;
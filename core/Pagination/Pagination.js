var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import Page from './Page';

import { StyledPagination } from './style';

import Icon from '../Icon';

import { noop } from '../helpers';
import { isFunction } from '../helpers/typeUtils';

var defaultProps = {
  type: 'default',
  onPageChange: noop
};

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.handleClick = function (page) {
      var onPageChange = _this.props.onPageChange;
      var currentPage = _this.state.currentPage;

      if (currentPage === page) return;

      _this.setState({
        currentPage: page
      });

      isFunction(onPageChange) && onPageChange(page, Object.assign({}, _this.props));
    };

    _this.handleNextPage = function () {
      var currentPage = _this.state.currentPage;
      var _this$props = _this.props,
          pages = _this$props.pages,
          onPageChange = _this$props.onPageChange;

      if (currentPage + 1 > pages - 1) return;

      _this.setState({
        currentPage: currentPage + 1
      }, function () {
        isFunction(onPageChange) && onPageChange(_this.state.currentPage, Object.assign({}, _this.props));
      });
    };

    _this.handlePrevPage = function () {
      var currentPage = _this.state.currentPage;
      var onPageChange = _this.props.onPageChange;


      if (currentPage - 1 < 0) return;

      _this.setState({
        currentPage: currentPage - 1
      }, function () {
        isFunction(onPageChange) && onPageChange(_this.state.currentPage, Object.assign({}, _this.props));
      });
    };

    _this.handleFirstPage = function () {
      var onPageChange = _this.props.onPageChange;


      _this.setState({
        currentPage: 0
      }, function () {
        isFunction(onPageChange) && onPageChange(_this.state.currentPage, Object.assign({}, _this.props));
      });
    };

    _this.handleLastPage = function () {
      var _this$props2 = _this.props,
          pages = _this$props2.pages,
          onPageChange = _this$props2.onPageChange;


      _this.setState({
        currentPage: pages - 1
      }, function () {
        isFunction(onPageChange) && onPageChange(_this.state.currentPage, Object.assign({}, _this.props));
      });
    };

    _this.renderPage = function () {
      var _this$props3 = _this.props,
          pages = _this$props3.pages,
          type = _this$props3.type,
          color = _this$props3.color,
          stylePage = _this$props3.stylePage,
          classNamePage = _this$props3.classNamePage;
      var currentPage = _this.state.currentPage;


      var listPage = [];

      if (pages > 0) {
        var i = 0;
        var endPage = void 0;
        if (pages <= 9) {
          i = 0;
          endPage = pages;
        } else {
          if (currentPage <= 4) {
            i = 0;
            endPage = 9;
          } else if (currentPage + 4 >= pages) {

            i = pages - 9;
            endPage = pages;
          } else {
            i = currentPage - 4;
            endPage = currentPage + 5;
          }
        }

        for (i; i < endPage; i++) {

          var isActive = i === currentPage;

          listPage.push(React.createElement(
            Page,
            {
              type: type,
              color: color,
              style: stylePage,
              className: classNamePage,
              key: i,
              page: i,
              handleClick: _this.handleClick,
              active: isActive },
            i + 1
          ));
        }
      }
      return listPage;
    };

    _this.state = {
      currentPage: props.currentPage || 0
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.currentPage !== this.props.currentPage) {
        var _currentPage = this.props.currentPage;

        this.setState({ currentPage: _currentPage });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var currentPage = this.state.currentPage;

      var _props = this.props,
          stylePage = _props.stylePage,
          classNamePage = _props.classNamePage,
          rest = _objectWithoutProperties(_props, ['stylePage', 'classNamePage']);

      return React.createElement(
        StyledPagination,
        rest,
        React.createElement(
          Page,
          {
            style: stylePage,
            className: classNamePage,
            page: currentPage,
            handleClick: this.handleFirstPage
          },
          '\xAB'
        ),
        React.createElement(
          Page,
          {
            style: stylePage,
            className: classNamePage,
            page: currentPage,
            handleClick: this.handlePrevPage
          },
          React.createElement(Icon, { name: 'angle-left' })
        ),
        this.renderPage(),
        React.createElement(
          Page,
          {
            style: stylePage,
            className: classNamePage,
            page: currentPage,
            handleClick: this.handleNextPage
          },
          React.createElement(Icon, { name: 'angle-right' })
        ),
        React.createElement(
          Page,
          {
            style: stylePage,
            className: classNamePage,
            page: currentPage,
            handleClick: this.handleLastPage
          },
          '\xBB'
        )
      );
    }
  }]);

  return Pagination;
}(React.Component);

Pagination.defaultProps = defaultProps;


export default Pagination;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(["\n           @media (min-width: ", "px) {\n             flex: ", ";\n             max-width: ", ";\n           }\n         "], ["\n           @media (min-width: ", "px) {\n             flex: ", ";\n             max-width: ", ";\n           }\n         "]),
    _templateObject2 = _taggedTemplateLiteral(["\n          @media (min-width: ", "px) {\n            flex: ", ";\n            max-width: ", ";\n\n            order: ", ";\n\n            left: ", ";\n            right: ", ";\n\n            margin-left: ", ";\n\n          }\n          "], ["\n          @media (min-width: ", "px) {\n            flex: ", ";\n            max-width: ", ";\n\n            order: ", ";\n\n            left: ", ";\n            right: ", ";\n\n            margin-left: ", ";\n\n          }\n          "]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  flex: 0 1 auto;\n  flex-wrap: wrap;\n  margin-left: -.8rem;\n  margin-right: -8.rem;\n  position: relative;\n  font-size: 1.6rem;\n  justify-content: ", ";\n  align-items: ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  flex: 0 1 auto;\n  flex-wrap: wrap;\n  margin-left: -.8rem;\n  margin-right: -8.rem;\n  position: relative;\n  font-size: 1.6rem;\n  justify-content: ", ";\n  align-items: ", ";\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n\n  flex: ", ";\n  max-width: ", ";\n\n\n", "\n  order: ", ";\n\n  left: ", ";\n  right: ", ";\n\n  margin-left: ", ";\n\n        ", "\n\n\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n\n\n"], ["\n  box-sizing: border-box;\n  position: relative;\n\n  flex: ", ";\n  max-width: ", ";\n\n\n", "\n  order: ", ";\n\n  left: ", ";\n  right: ", ";\n\n  margin-left: ", ";\n\n        ", "\n\n\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n\n\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n        padding-left: ", ";\n        padding-right: ", ";\n        "], ["\n        padding-left: ", ";\n        padding-right: ", ";\n        "]),
    _templateObject6 = _taggedTemplateLiteral(["\n          @media(max-width: ", "px){\n            padding-left: ", ";\n            padding-right: ", ";\n          }\n          "], ["\n          @media(max-width: ", "px){\n            padding-left: ", ";\n            padding-right: ", ";\n          }\n          "]),
    _templateObject7 = _taggedTemplateLiteral(["\n          @media(min-width: ", "px){\n            padding-left: ", ";\n            padding-right: ", ";\n          }\n        "], ["\n          @media(min-width: ", "px){\n            padding-left: ", ";\n            padding-right: ", ";\n          }\n        "]),
    _templateObject8 = _taggedTemplateLiteral(["\n\n                   flex: ", ";\n                   max-width: ", ";\n\n               "], ["\n\n                   flex: ", ";\n                   max-width: ", ";\n\n               "]),
    _templateObject9 = _taggedTemplateLiteral(["\n\n                  flex: ", ";\n                  max-width: ", ";\n\n                  order: ", ";\n\n                  left: ", ";\n                  right: ", ";\n\n                  margin-left: ", ";\n\n\n                "], ["\n\n                  flex: ", ";\n                  max-width: ", ";\n\n                  order: ", ";\n\n                  left: ", ";\n                  right: ", ";\n\n                  margin-left: ", ";\n\n\n                "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var returnGridMedia = function returnGridMedia(props, type) {

  return props[type] ? typeof props[type] === "number" ? css(_templateObject, props.theme.grid[type], function (props) {
    return "0 0 " + props[type] / 24 * 100 + "%";
  }, function (props) {
    return props[type] / 24 * 100 + "%";
  }) : _typeof(props[type]) === "object" ? css(_templateObject2, props.theme.grid[type], function (props) {
    return "0 0 " + props[type].span / 24 * 100 + "%";
  }, function (props) {
    return props[type].span / 24 * 100 + "%";
  }, function (props) {
    return props[type].order ? props[type].order : 0;
  }, function (props) {
    return props[type].push !== 0 || props[type].push ? props[type].push / 24 * 100 + "%" : null;
  }, function (props) {
    return props[type].pull !== 0 || props[type].pull ? props[type].pull / 24 * 100 + "%" : null;
  }, function (props) {
    return props[type].offset !== 0 || props[type].offet ? props[type].offset / 24 * 100 + "%" : null;
  }) : null : null;
};

export var StyledRow = styled.div(_templateObject3, function (props) {
  return props.justify !== 'unset' ? "" + props.justify : null;
}, function (props) {
  return props.align !== 'unset' ? "" + props.align : null;
});

export var StyledCol = styled.div(_templateObject4, function (props) {
  return props.span ? "0 0 " + props.span / 24 * 100 + "%" : null;
}, function (props) {
  return props.span ? "0 0 " + props.span / 24 * 100 + "%" : null;
}, function (props) {
  if (typeof props.gutter === "number") {
    return css(_templateObject5, function (props) {
      return props.gutter / 2 / 10 + "rem";
    }, function (props) {
      return props.gutter / 2 / 10 + "rem";
    });
  } else if (_typeof(props.gutter) === "object") {
    var vals = Object.keys(props.gutter).map(function (key) {
      if (key === "xs") {
        return css(_templateObject6, props.theme.grid.sm, function (props) {
          return props.gutter[key] / 2 / 10 + "rem";
        }, function (props) {
          return props.gutter[key] / 2 / 10 + "rem";
        });
      }
      return css(_templateObject7, props.theme.grid[key], function (props) {
        return props.gutter[key] / 2 / 10 + "rem";
      }, function (props) {
        return props.gutter[key] / 2 / 10 + "rem";
      });
    });

    return vals;
  } else return null;
}, function (props) {
  return props.order;
}, function (props) {
  return props.push !== 0 ? props.push / 24 * 100 + "%" : null;
}, function (props) {
  return props.pull !== 0 ? props.pull / 24 * 100 + "%" : null;
}, function (props) {
  return props.offset !== 0 ? props.offset / 24 * 100 + "%" : null;
}, function (props) {
  return props.xs ? typeof props.xs === "number" ? css(_templateObject8, function (props) {
    return "0 0 " + props.xs / 24 * 100 + "%";
  }, function (props) {
    return props.xs / 24 * 100 + "%";
  }) : _typeof(props.xs) === "object" ? css(_templateObject9, function (props) {
    return "0 0 " + props.xs.span / 24 * 100 + "%";
  }, function (props) {
    return props.xs.span / 24 * 100 + "%";
  }, function (props) {
    return props.xs.order ? props.xs.order : 0;
  }, function (props) {
    return props.xs.push !== 0 || props.xs.push ? props.xs.push / 24 * 100 + "%" : null;
  }, function (props) {
    return props.xs.pull !== 0 || props.xs.pull ? props.xs.pull / 24 * 100 + "%" : null;
  }, function (props) {
    return props.xs.offset !== 0 || props.xs.offet ? props.xs.offset / 24 * 100 + "%" : null;
  }) : null : null;
}, function (props) {
  return returnGridMedia(props, 'sm');
}, function (props) {
  return returnGridMedia(props, 'md');
}, function (props) {
  return returnGridMedia(props, 'lg');
}, function (props) {
  return returnGridMedia(props, 'xl');
});
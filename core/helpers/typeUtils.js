var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Check element has child or not**/
export var isChild = function isChild(children) {
    return children === null || children === undefined || Array.isArray(children) && children.length === 0;
};

/** Check undefined**/

export var isUndef = function isUndef(value) {
    return typeof value === 'undefined';
};
/** Check function or not**/

export var isFunction = function isFunction(value) {
    return !isUndef(value) && typeof value === 'function';
};

/** Check Object or not**/
export var isObject = function isObject(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && !Array.isArray(value);
};

/** Check Array or not**/
export var isArray = function isArray(value) {
    return Array.isArray(value);
};

/** Check Number or not**/
export var isNumber = function isNumber(value) {
    return Number.isInteger(value) && typeof value === "number";
};
/** Check element has child or not**/
export const isChild = children => children === null
    || children === undefined
    || (Array.isArray(children) && children.length === 0)

/** Check undefined**/

export const isUndef = value => typeof value === 'undefined';
/** Check function or not**/

export const isFunction = value => !isUndef(value) && typeof value === 'function';

/** Check Object or not**/
export const isObject = value =>
      typeof value === 'object' && value !== null && !Array.isArray(value);

/** Check Array or not**/
export const isArray = value => Array.isArray(value);

/** Check Number or not**/
export const isNumber = value => Number.isInteger(value) && typeof value === "number"

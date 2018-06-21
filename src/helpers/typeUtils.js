/** Check element has child or not**/
export const isChild = children => children === null
    || children === undefined
    || (Array.isArray(children) && children.length === 0)

/** Check undefined**/

export const isUndef = value => typeof value === 'undefined';
/** Check function or not**/

export const isFunction = value => typeof value === 'function';

/** Check Object or not**/
export const isObject = value =>
      typeof value === 'object' && value !== null && !Array.isArray(value);

export const generalId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}

//Default Function
export const noop = () => {}

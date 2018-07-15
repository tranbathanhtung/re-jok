import {
  defaultTheme
} from './index';

export const setTheme = (theme: Object) => {
  let jokTheme = {...defaultTheme, ...theme};

  return jokTheme;
}

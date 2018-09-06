import {
  defaultTheme
} from './index';

export const configTheme = (theme: Object) => {
  let jokTheme = {...defaultTheme, ...theme};
  return jokTheme;
}

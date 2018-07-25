import { defaultTheme } from './index';

export var configTheme = function configTheme(theme) {
  var jokTheme = Object.assign({}, defaultTheme, theme);
  return jokTheme;
};
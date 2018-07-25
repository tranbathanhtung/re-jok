import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { defaultTheme } from '../theme';
import { ThemeProvider } from 'styled-components';
export function renderWithTheme(component) {

  return renderer.create(React.createElement(
    ThemeProvider,
    { theme: defaultTheme },
    component
  ));
};

export var shallowWithTheme = function shallowWithTheme(tree, theme) {
  var context = shallow(React.createElement(ThemeProvider, { theme: theme })).instance().getChildContext();
  return shallow(tree, { context: context });
};

export var mountWithTheme = function mountWithTheme(tree, theme) {
  var context = shallow(React.createElement(ThemeProvider, { theme: theme })).instance().getChildContext();

  return mount(tree, {
    context: context,
    childContextTypes: ThemeProvider.childContextTypes
  });
};
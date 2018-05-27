import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import {defaultTheme} from '../theme';
import { ThemeProvider } from 'styled-components';
export function renderWithTheme(component) {

  return renderer.create(
    <ThemeProvider theme={defaultTheme}>
      {component}
    </ThemeProvider>
  );
};

export const shallowWithTheme = (tree, theme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()
  return shallow(tree, { context })
}

export const mountWithTheme = (tree, theme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes
  })
}

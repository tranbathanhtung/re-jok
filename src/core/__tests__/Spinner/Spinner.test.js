import React from 'react';
import Spinner from '../../Spinner';


import {defaultTheme} from '../../theme';

import {shallowWithTheme, mountWithTheme, renderWithTheme} from '../../helpers/withTheme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('<Spinner />', () => {
  it('should render default', () => {
    const tree = renderWithTheme(
      <Spinner />

    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with size', () => {
    const tree = renderWithTheme(
      <Spinner size="medium" />
    ).toJSON();
    expect(tree).toMatchSnapshot();


  });

  it('should render type bounce', () => {
    const tree = renderWithTheme(
      <Spinner type="bounce"/>


    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render type bounce with size', () => {
    const tree = renderWithTheme(
      <Spinner type="bounce" size="medium"/>


    ).toJSON();
    expect(tree).toMatchSnapshot();


  });





})

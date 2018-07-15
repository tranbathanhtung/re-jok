import React from 'react';
import Progress from '../../Progress/Progress';


import {defaultTheme} from '../../theme';

import {shallowWithTheme, mountWithTheme, renderWithTheme} from '../../helpers/withTheme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('<Progress />', () => {
  it('should render', () => {
    const tree = renderWithTheme(
      <Progress

         />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with width determinate mode', () => {
    const tree = renderWithTheme(
      <Progress percent={40} indeterminate={false} />
    ).toJSON();
    expect(tree).toMatchSnapshot();


  });

  it('should render with color', () => {
    const tree = renderWithTheme(
      <Progress percent={40} indeterminate={false} color="#9c27b0" />

    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with size', () => {
    const tree = renderWithTheme(
      <Progress size="large" percent={40} indeterminate={false} />
    ).toJSON();
    expect(tree).toMatchSnapshot();


  });





})

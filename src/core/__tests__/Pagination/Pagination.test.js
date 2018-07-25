import React from 'react';
import Pagination from '../../Pagination/Pagination';


import {defaultTheme} from '../../theme';

import {shallowWithTheme, mountWithTheme, renderWithTheme} from '../../helpers/withTheme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('<Pagination />', () => {
  it('should render', () => {
    const tree = renderWithTheme(
      <Pagination
        pages={18}
        currentPage={5}
         />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with pagination color', () => {
    const tree = renderWithTheme(
      <Pagination
        pages={18}
        color="#9c27b0"
        currentPage={5}
         />
    ).toJSON();
    expect(tree).toMatchSnapshot();


  });

  it('should render with type effect', () => {
    const tree = renderWithTheme(
      <Pagination
        pages={18}
        type="effect"
        currentPage={5}
         />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with pagination color type effect', () => {
    const tree = renderWithTheme(
      <Pagination
        pages={18}
        type="effect"
        color="#9c27b0"
        currentPage={5}
         />
    ).toJSON();
    expect(tree).toMatchSnapshot();


  });





})

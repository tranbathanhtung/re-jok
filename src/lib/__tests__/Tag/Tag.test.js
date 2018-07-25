import React from 'react';
import Tag from '../../Tag/Tag';


import {defaultTheme} from '../../theme';

import {shallowWithTheme, mountWithTheme, renderWithTheme} from '../../helpers/withTheme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('<Tag />', () => {
  it('should render', () => {
    const tree = renderWithTheme(
      <Tag>Tag 1</Tag>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with close icon', () => {
    const tree = renderWithTheme(
      <Tag closable>Tag 1</Tag>
    ).toJSON();
    expect(tree).toMatchSnapshot();


  });

  it('should render with size', () => {
    const tree = renderWithTheme(
      <Tag size="medium">Tag 3</Tag>

    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with color', () => {
    const tree = renderWithTheme(
      <Tag color="#9c27b0">Tag 3</Tag>

    ).toJSON();
    expect(tree).toMatchSnapshot();


  });





})

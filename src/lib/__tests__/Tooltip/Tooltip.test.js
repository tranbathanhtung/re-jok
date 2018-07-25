import React from 'react';
import Tooltip from '../../Tooltip/Tooltip';
import Button from '../../Button/Button';

import {defaultTheme} from '../../theme';

import {shallowWithTheme, mountWithTheme, renderWithTheme} from '../../helpers/withTheme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('<Tooltip />', () => {
  it('should render', () => {
    const tree = renderWithTheme(
      <Tooltip label="Tooltip">
        <Button>Button</Button>
      </Tooltip>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with position', () => {
    const tree = renderWithTheme(
      <Tooltip label="Tooltip position" position="top">
        <Button>Button</Button>
      </Tooltip>
    ).toJSON();
    expect(tree).toMatchSnapshot();


  });


  it('should render with position and color', () => {
    const tree = renderWithTheme(
      <Tooltip label="Tooltip position" tooltipColor="#11D3BC" position="top">
        <Button>Button</Button>
      </Tooltip>
    ).toJSON();
    expect(tree).toMatchSnapshot();


  });



})

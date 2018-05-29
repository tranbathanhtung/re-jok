import React from 'react';
import Badge from '../../Badge'
import {defaultTheme} from '../../theme'
import Icon from '../../Icon';
import {shallowWithTheme, mountWithTheme, renderWithTheme} from '../../helpers/withTheme';
import 'jest-enzyme'
import 'jest-styled-components'

describe('<Badge />', () => {
  it('should render Badge', () => {
    const tree = renderWithTheme(<Badge></Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Badge correctly with default props', () => {
    const wrapper = mountWithTheme(<Badge/>, defaultTheme);
    expect(wrapper.props().count).toEqual(0);
    expect(wrapper.props().maxCount).toEqual(99);
    expect(wrapper.props().offset).toEqual([0, 0]);

  });

})

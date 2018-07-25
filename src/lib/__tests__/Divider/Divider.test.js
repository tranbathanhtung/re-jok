import React from 'react';
import Divider from '../../Divider';


import {defaultTheme} from '../../theme';
import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../helpers/withTheme';

import 'jest-enzyme';
import 'jest-styled-components';

describe('<Divider />', () => {
  it('should render Divider', () => {
    const tree = renderWithTheme(<Divider/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Divider with text', () => {
    const wrapper = mountWithTheme(<Divider>Text</Divider>, defaultTheme);
    expect(wrapper.text()).toEqual("Text");


  });

  it('should render Divider dashed mode', () => {
    const wrapper = mountWithTheme(<Divider dashed/>, defaultTheme);
    expect(wrapper.props().dashed).toEqual(true);


  });

  it('should render Divider with text postion', () => {
    const wrapper = mountWithTheme(<Divider textPosition="left">With Left Text</Divider>, defaultTheme);
    expect(wrapper.props().textPosition).toEqual("left");


  });

  it('should render Divider chang type', () => {
    const wrapper = mountWithTheme(  <Divider type="vertical"/>, defaultTheme);
    expect(wrapper.props().type).toEqual("vertical");


  });

})

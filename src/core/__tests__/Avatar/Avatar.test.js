import React from 'react';
import Avatar from '../../Avatar/Avatar'
import {defaultTheme} from '../../theme'
import Icon from '../../Icon';
import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../helpers/withTheme';
import 'jest-enzyme';
import 'jest-styled-components';


describe('<Avatar />', () => {
  it('should render Avatar', () => {
    const tree = renderWithTheme(<Avatar>
      T
    </Avatar>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a Avatar with defaultProps', () => {
    const wrapper = shallowWithTheme(<Avatar/>, defaultTheme);
    expect(wrapper.props().size).toEqual('default');
    expect(wrapper.props().shape).toEqual('circle');

  });

  it('renders a circle avatar with size default', () => {
    const wrapper = mountWithTheme(<Avatar>T</Avatar>, defaultTheme);
    expect(wrapper.props().shape).toEqual("circle");
    expect(wrapper.text()).toEqual("T");

    const tree = renderWithTheme(<Avatar>T</Avatar>).toJSON();
    expect(tree).toHaveStyleRule('border-radius', '50%');
    expect(tree).toHaveStyleRule('font-size', '1.4rem');
    expect(tree).toHaveStyleRule('line-height', '1.5');
    expect(tree).toHaveStyleRule('width', '3.2rem');
    expect(tree).toHaveStyleRule('height', '3.2rem');


  });

  it('renders a square avatar with size default', () => {
    const wrapper = mountWithTheme(<Avatar shape="square">T</Avatar>, defaultTheme);
    expect(wrapper.props().shape).toEqual("square");
    expect(wrapper.text()).toEqual("T");

    const tree = renderWithTheme(<Avatar shape="square">T</Avatar>).toJSON();
    expect(tree).toHaveStyleRule('border-radius', '.4rem');
    expect(tree).toHaveStyleRule('font-size', '1.4rem');
    expect(tree).toHaveStyleRule('line-height', '1.5');
    expect(tree).toHaveStyleRule('width', '3.2rem');
    expect(tree).toHaveStyleRule('height', '3.2rem');


  });

  it('renders a icon avatar', () => {
    const wrapper = mountWithTheme(<Avatar icon="rocket">T</Avatar>, defaultTheme);
    expect(wrapper.props().icon).toEqual("rocket");

    expect(wrapper.find(Icon)).toHaveLength(1)

  });

  it('renders a image avatar', () => {
    const wrapper = mountWithTheme(<Avatar imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852"/>, defaultTheme);
    expect(wrapper.props().imgSrc).toEqual("https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852");

    expect(wrapper.find('img')).toHaveLength(1)
    expect(wrapper.find('img').prop('src')).toEqual("https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852")

  });



})

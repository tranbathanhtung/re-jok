import React from 'react';
import Button from '../../Button/Button';
import {SpinnerButton} from '../../Button/style';
import {defaultTheme} from '../../theme';
import Icon from '../../Icon';
import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../helpers/withTheme';
import 'jest-enzyme';
import 'jest-styled-components';


describe('<Button />', () => {
  it('should render', () => {
    const tree = renderWithTheme(
      <Button>
        Button
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a button correctly', () => {
    const wrapper = mountWithTheme(<Button/>, defaultTheme);
    expect(wrapper.find('button').type()).toEqual('button');
 });
 it('renders a button with text', () => {
   const wrapper = mountWithTheme(<Button>Button</Button>, defaultTheme);
   expect(wrapper.text()).toEqual("Button");
 });

 it('renders a button disabled', () => {
   const wrapper = mountWithTheme(<Button disabled={true}/>, defaultTheme);
   expect(wrapper.props().disabled).toEqual(true);
});

it('renders a button with defaultProps', () => {
  const wrapper = shallowWithTheme(<Button/>, defaultTheme);
  expect(wrapper.props().size).toEqual('default');
  expect(wrapper.props().loading).toEqual(false);
  expect(wrapper.props().rule).toEqual('button');
  expect(wrapper.props().variant).toEqual('raised');
  expect(wrapper.props().primary).toEqual(false);
  expect(wrapper.props().secondary).toEqual(false);
  expect(wrapper.props().fullWidth).toEqual(false);
  expect(wrapper.props().iconPosition).toEqual('left');


});

it('renders a button size small', () => {
  const wrapper = mountWithTheme(<Button size="small"/>, defaultTheme);
  expect(wrapper.props().size).toEqual('small');

  const tree = renderWithTheme(<Button size="small"/>).toJSON();
  expect(tree).toHaveStyleRule('font-size', '1.2rem')
  expect(tree).toHaveStyleRule('padding', '0.5rem 0.9rem')
  expect(tree).toHaveStyleRule('line-height', '1')
  expect(tree).toHaveStyleRule('border-radius', '.2rem')
});

it('renders a button size default', () => {
  const wrapper = mountWithTheme(<Button size="default"/>, defaultTheme);
  expect(wrapper.props().size).toEqual('default');

  const tree = renderWithTheme(<Button size="default"/>).toJSON();
  expect(tree).toHaveStyleRule('font-size', '1.4rem')
  expect(tree).toHaveStyleRule('padding', '0.9rem 1.8rem')
  expect(tree).toHaveStyleRule('line-height', '1.5')
  expect(tree).toHaveStyleRule('border-radius', '.4rem')
});

it('renders a button size medium', () => {
  const wrapper = mountWithTheme(<Button size="medium"/>, defaultTheme);
  expect(wrapper.props().size).toEqual('medium');

  const tree = renderWithTheme(<Button size="medium"/>).toJSON();
  expect(tree).toHaveStyleRule('font-size', '1.8rem')
  expect(tree).toHaveStyleRule('padding', '1.4rem 2.7rem')
  expect(tree).toHaveStyleRule('line-height', '1.5')
  expect(tree).toHaveStyleRule('border-radius', '.6rem')
});

it('renders a button size large', () => {
  const wrapper = mountWithTheme(<Button size="large"/>, defaultTheme);
  expect(wrapper.props().size).toEqual('large');

  const tree = renderWithTheme(<Button size="large"/>).toJSON();
  expect(tree).toHaveStyleRule('font-size', '2rem')
  expect(tree).toHaveStyleRule('padding', '1.8rem 3.6rem')
  expect(tree).toHaveStyleRule('line-height', '2')
  expect(tree).toHaveStyleRule('border-radius', '.6rem')
});

it('renders a button loading true with spin component', () => {
  const wrapper = mountWithTheme(<Button loading={true}/>, defaultTheme);
  expect(wrapper.props().loading).toEqual(true);

  expect(wrapper.find(SpinnerButton)).toHaveLength(1);

});

it('renders a button loading false without spin component', () => {
  const wrapper = shallowWithTheme(<Button loading={false}/>, defaultTheme);
  expect(wrapper.props().loading).toEqual(false);

  expect(wrapper.find(SpinnerButton)).toHaveLength(0)

});

it('renders a button with icon', () => {
  const wrapper = shallowWithTheme(<Button icon="rocket"/>, defaultTheme);
  expect(wrapper.props().icon).toEqual("rocket");

  expect(wrapper.find(Icon)).toHaveLength(1)

});


it('should hide icon when button loading', () => {
  const wrapper = shallowWithTheme(<Button icon="rocket" loading={true}/>, defaultTheme);
  expect(wrapper.props().icon).toEqual("rocket");
  expect(wrapper.props().loading).toEqual(true);


  expect(wrapper.find(Icon)).toHaveLength(0)
  expect(wrapper.find(SpinnerButton)).toHaveLength(1)

});

it('renders a circle button and hide text of button', () => {
  const wrapper = mountWithTheme(<Button shape="circle">Button</Button>, defaultTheme);
  expect(wrapper.props().shape).toEqual("circle");
  expect(wrapper.text()).toEqual("");

  const tree = renderWithTheme(<Button shape="circle"/>).toJSON();
  expect(tree).toHaveStyleRule('width', '3.2rem')
  expect(tree).toHaveStyleRule('padding', '0')
  expect(tree).toHaveStyleRule('width', '3.2rem')
  expect(tree).toHaveStyleRule('border-radius', '50%')

});

it('renders a rounded button', () => {
  const wrapper = mountWithTheme(<Button shape="rounded"/>, defaultTheme);
  expect(wrapper.props().shape).toEqual('rounded');

  const tree = renderWithTheme(<Button shape="rounded"/>).toJSON();

  expect(tree).toHaveStyleRule('border-radius', '10rem')
});

it('renders a outline button', () => {
  const wrapper = mountWithTheme(<Button variant="outline"/>, defaultTheme);
  expect(wrapper.props().variant).toEqual('outline');

  const tree = renderWithTheme(<Button variant="outline"/>).toJSON();

  expect(tree).toHaveStyleRule('background-color', '#fff')
  expect(tree).toHaveStyleRule('border-color', 'rgba(0,0,0,.16)')
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,.68)')
  expect(tree).toHaveStyleRule('border-color', 'rgba(0,0,0,.54)',{
    modifier: ':hover',
  })
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,.68)',{
    modifier: ':hover',
  })
});


it('renders a inverted button', () => {
  const wrapper = mountWithTheme(<Button variant="inverted"/>, defaultTheme);
  expect(wrapper.props().variant).toEqual('inverted');

  const tree = renderWithTheme(<Button variant="inverted"/>).toJSON();

  expect(tree).toHaveStyleRule('background-color', '#fff')
  expect(tree).toHaveStyleRule('border-color', 'rgba(0,0,0,.16)')
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,.68)')
  expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,.54)',{
    modifier: ':hover',
  })
  expect(tree).toHaveStyleRule('color', '#fff',{
    modifier: ':hover',
  })
});


it('renders a icon button', () => {
  const wrapper = mountWithTheme(<Button variant="icon"/>, defaultTheme);
  expect(wrapper.props().variant).toEqual('icon');

  const tree = renderWithTheme(<Button variant="icon"/>).toJSON();

  expect(tree).toHaveStyleRule('border', 'none')
  expect(tree).toHaveStyleRule('border-radius', '50%')
  expect(tree).toHaveStyleRule('width', '3.2rem')
  expect(tree).toHaveStyleRule('height', '3.2rem')
  expect(tree).toHaveStyleRule('background-color', 'transparent')
  expect(tree).toHaveStyleRule('border-color', 'rgba(0,0,0,.54)',{
    modifier: ':hover',
  })
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,.68)',{
    modifier: ':hover',
  })
});


it('renders a link if pass props hrefString to button', () => {
  const wrapper = mountWithTheme(<Button hrefString="https://www.google.com/"/>, defaultTheme);
  expect(wrapper.props().hrefString).toEqual('https://www.google.com/');
  expect(wrapper.find('a').type()).toEqual('a');

});


it('renders a button fofllow by tag', ()=>{
  const wrapper = mountWithTheme(<Button tag="span">Button</Button>, defaultTheme);
  expect(wrapper.props().tag).toEqual('span');
  expect(wrapper.find('span')).toHaveLength(2);
})












});

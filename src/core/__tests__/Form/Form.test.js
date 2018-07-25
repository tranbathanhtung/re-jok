import React from 'react';
import Form from '../../Form/Form';
import Icon from '../../Icon';
import Input from '../../Input/Input';
import Radio from '../../Radio/Radio';
import Checkbox from '../../Checkbox/Checkbox';
import Button from '../../Button/Button';
import Select from '../../Select/Select';
import { defaultTheme } from '../../theme';

import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../helpers/withTheme';

import 'jest-enzyme';
import 'jest-styled-components';

//Form
describe('<Form />', () => {
  it('should render Form', () => {
    const tree = renderWithTheme(<Form></Form>).toJSON();
    expect(tree).toMatchSnapshot();
  });



})

//Input
describe('<Input component />', () => {
  it('should render Form and Input component', () => {
    const tree = renderWithTheme(<Form>
      <Form.Item>
        <Input/>
      </Form.Item>
    </Form>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a input size small', () => {
    const wrapper = mountWithTheme(<Input size="small"/>, defaultTheme);
    expect(wrapper.props().size).toEqual('small');
    expect(wrapper.find('input')).toHaveLength(1);

    const tree = renderWithTheme(<Input size="small"/>).toJSON();
    expect(tree).toMatchSnapshot();



  });

  it('renders a input size default', () => {
    const wrapper = mountWithTheme(<Input size="default"/>, defaultTheme);
    expect(wrapper.props().size).toEqual('default');
    expect(wrapper.find('input')).toHaveLength(1);

    const tree = renderWithTheme(<Input size="default"/>).toJSON();
    expect(tree).toMatchSnapshot();

  });

  it('renders a input size medium', () => {
    const wrapper = mountWithTheme(<Input size="medium"/>, defaultTheme);
    expect(wrapper.props().size).toEqual('medium');
    expect(wrapper.find('input')).toHaveLength(1);

    const tree = renderWithTheme(<Input size="medium"/>).toJSON();
    expect(tree).toMatchSnapshot();

  });

  it('renders a input size large', () => {
    const wrapper = mountWithTheme(<Input size="large"/>, defaultTheme);
    expect(wrapper.props().size).toEqual('large');
    expect(wrapper.find('input')).toHaveLength(1);

    const tree = renderWithTheme(<Input size="large"/>).toJSON();
    expect(tree).toMatchSnapshot();

  });

  it('renders a input as a area', () => {
    const wrapper = mountWithTheme(<Input textarea/>, defaultTheme);
    expect(wrapper.props().textarea).toEqual(true);
    expect(wrapper.find('textarea')).toHaveLength(1);

    const tree = renderWithTheme(<Input textarea/>).toJSON();
    expect(tree).toMatchSnapshot();



  });

  it('renders a underline input', () => {
    const wrapper = mountWithTheme(<Input underline/>, defaultTheme);
    expect(wrapper.props().underline).toEqual(true);
    expect(wrapper.find('input')).toHaveLength(1);

    const tree = renderWithTheme(<Input underline/>).toJSON();
    expect(tree).toMatchSnapshot();



  });

  it('renders a disabled input', () => {
    const wrapper = mountWithTheme(<Input disabled/>, defaultTheme);
    expect(wrapper.props().disabled).toEqual(true);
    expect(wrapper.find('input')).toHaveLength(1);

    const tree = renderWithTheme(<Input disabled/>).toJSON();
    expect(tree).toMatchSnapshot();



  });

  it('renders a blank input', () => {
    const wrapper = mountWithTheme(<Input blank/>, defaultTheme);
    expect(wrapper.props().blank).toEqual(true);
    expect(wrapper.find('input')).toHaveLength(1);

    const tree = renderWithTheme(<Input blank/>).toJSON();
    expect(tree).toMatchSnapshot();



  });

  it('renders a input with Icon', () => {
    const wrapper = mountWithTheme(<Input icon="rocket"/>, defaultTheme);
    expect(wrapper.props().icon).toEqual("rocket");
    expect(wrapper.find(Icon)).toHaveLength(1);

    const tree = renderWithTheme(<Input icon="rocket"/>).toJSON();
    expect(tree).toMatchSnapshot();



  });







})

//Radio
// describe('<Radio />', () => {
//   it('should render Radio', () => {
//     const tree = renderWithTheme( <Radio value={1}>A</Radio>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//
//   it('should render Radio Group', () => {
//     const tree = renderWithTheme(<Radio.Group name="q1" >
//       <Radio value={1}>A</Radio>
//       <Radio value={2}>B</Radio>
//       <Radio value={3}>C</Radio>
//       <Radio value={4}>D</Radio>
//   </Radio.Group>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//
//   it('should render Radio Group with color', () => {
//     const tree = renderWithTheme(<Radio.Group  color="#52c41a" name="q1" value={1} >
//       <Radio value={1}>A</Radio>
//       <Radio value={2}>B</Radio>
//       <Radio value={3}>C</Radio>
//       <Radio value={4}>D</Radio>
//   </Radio.Group>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//
//
//
// })


//Checkbox
// describe('<Checkbox />', () => {
//   it('should render Checkbox', () => {
//     const tree = renderWithTheme(<Checkbox checked value="Apple"/>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//
//   it('should render Checkbox Group', () => {
//     const tree = renderWithTheme( <Checkbox.Group name="q2">
//        <Checkbox value="Apple">Apple</Checkbox>
//        <Checkbox value="Pear">Pear</Checkbox>
//        <Checkbox value="Orange">Orange</Checkbox>
//    </Checkbox.Group>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//
//   it('should render Checkbox Group with color', () => {
//     const tree = renderWithTheme( <Checkbox.Group color="#faad14" name="q2">
//        <Checkbox value="Apple">Apple</Checkbox>
//        <Checkbox value="Pear">Pear</Checkbox>
//        <Checkbox value="Orange">Orange</Checkbox>
//
//    </Checkbox.Group>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//
//   it('should render Checkbox with toggle mode', () => {
//     const tree = renderWithTheme(  <Checkbox checked toggle label="Toggle"/>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//
//
//
//
// })


//Select
describe('<Select />', () => {
  it('should render Select', () => {
    const tree = renderWithTheme(<Select placeholder="Choose option">
      <Select.Option value={1}>Option 1</Select.Option>
      <Select.Option value={2} disabled>Option 2</Select.Option>
      <Select.Option value={3}>Option 3</Select.Option>

    </Select>).toJSON();
    expect(tree).toMatchSnapshot();
  });





})

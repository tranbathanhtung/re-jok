import React from 'react';
import Nav from '../../Nav/Nav';
import { hexa } from  '../../globals';
import {defaultTheme} from '../../theme';

import {shallowWithTheme, mountWithTheme, renderWithTheme} from '../../helpers/withTheme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('<Nav />', () => {
  it('should render Nav', () => {

    const tree = renderWithTheme(<Nav>
        Left Element
      </Nav>).toJSON();


    expect(tree).toMatchSnapshot();


  });

  it('should render Nav with primary color', () => {

   const wrapper = mountWithTheme(<Nav primary>Left Element</Nav>, defaultTheme);

   expect(wrapper.props().primary).toEqual(true);

   const tree = renderWithTheme(<Nav primary>
       Left Element
     </Nav>).toJSON();
     expect(tree).toMatchSnapshot();

     expect(tree).toHaveStyleRule('background-color', defaultTheme.primary.main);
     expect(tree).toHaveStyleRule('color', defaultTheme.text.default);



  });


  it('should render Nav with secondary color', () => {

   const wrapper = mountWithTheme(<Nav secondary>Left Element</Nav>, defaultTheme);

   expect(wrapper.props().secondary).toEqual(true);

   const tree = renderWithTheme(<Nav secondary>
       Left Element
     </Nav>).toJSON();
     expect(tree).toMatchSnapshot();

     expect(tree).toHaveStyleRule('background-color', defaultTheme.secondary.main);
     expect(tree).toHaveStyleRule('color', defaultTheme.text.default);



  });


  it('should render Nav with background color', () => {

   const wrapper = mountWithTheme(<Nav backgroundColor="#bababa">Left Element</Nav>, defaultTheme);

   expect(wrapper.props().backgroundColor).toEqual("#bababa");

   const tree = renderWithTheme(<Nav backgroundColor="#bababa">
       Left Element
     </Nav>).toJSON();
     expect(tree).toMatchSnapshot();

     expect(tree).toHaveStyleRule('background-color', "#bababa");
     expect(tree).toHaveStyleRule('color', defaultTheme.text.default);



  });

  it('should render Nav with transparent background', () => {

   const wrapper = mountWithTheme(<Nav transparent>Left Element</Nav>, defaultTheme);

   expect(wrapper.props().transparent).toEqual(true);

   const tree = renderWithTheme(<Nav transparent>
       Left Element
     </Nav>).toJSON();
     expect(tree).toMatchSnapshot();

     expect(tree).toHaveStyleRule('background', "transparent");
     expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,.64)');



  });



});

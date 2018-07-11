import React from 'react';
import Menu from '../../Menu/Menu';
import Divider from '../../Divider';
import Icon from '../../Icon';
import {defaultTheme} from '../../theme';
import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../helpers/withTheme';

import 'jest-enzyme';
import 'jest-styled-components';

describe('<Menu />', () => {
  it('should render Menu', () => {
    const tree = renderWithTheme(<Menu>
      <Menu.List title="Header">
        <Menu.Item onClick={(e)=> console.log(e)} keyActive="1" primaryText="Item 1" />
        <Menu.Item keyActive="2" primaryText="Item 2"/>
        <Menu.Item keyActive="3" primaryText="Item 3"/>
      </Menu.List>
      <Divider/>
    <Menu.Item keyActive="4" primaryText="Item 4"/>


    </Menu>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Menu has sub menu', () => {
    const tree = renderWithTheme(  <Menu>
        <Menu.Item keyActive="1" primaryText="Option 1" />
        <Menu.Item keyActive="2" primaryText="Option 2" />
        <Menu.List key="l1" title="Item 1">
           <Menu.Item keyActive="3" primaryText="Option 3" />
           <Menu.Item keyActive="4" primaryText="Option 4" />
        </Menu.List>

         <Menu.Sub openKey="sub1" title={<span>Option 1</span>}>
           <Menu.List key="l2" title="Item 2">
             <Menu.Item keyActive="5" primaryText="Option 5" />
             <Menu.Item keyActive="6" primaryText="Option 6" />
          </Menu.List>

             <Menu.Sub openKey="sub2" title={<span>Option 1 Inner</span>}>

              <Menu.Item keyActive="7" primaryText="Option 7" />
              <Menu.Item keyActive="8" primaryText="Option 8" />

             </Menu.Sub>
         </Menu.Sub>

         <Menu.Sub openKey="sub3" title={<span>Option 2</span>}>
           <Menu.List key="l3" title="Item 3">
            <Menu.Item keyActive="9" primaryText="Option 9" />
            <Menu.Item keyActive="10" primaryText="Option 10" />
          </Menu.List>
         </Menu.Sub>
      </Menu>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Menu has active default item', () => {
    const tree = renderWithTheme(  <Menu defaultSelectedKeys={["2"]}>
        <Menu.Item keyActive="1" primaryText="Option 1" />
        <Menu.Item keyActive="2" primaryText="Option 2" />


      </Menu>).toJSON();

    expect(tree).toMatchSnapshot();


  });

  it('should render Menu has active background item', () => {
    const tree = renderWithTheme(  <Menu activeNormal={false} defaultSelectedKeys={["2"]}>
        <Menu.Item keyActive="1" primaryText="Option 1" />
        <Menu.Item keyActive="2" primaryText="Option 2" />


      </Menu>).toJSON();

    expect(tree).toMatchSnapshot();


  });

  it('should render Menu has active item and open submenu', () => {
    const tree = renderWithTheme(  <Menu activeNormal={false} defaultSelectedKeys={["2"]} defaultOpenKeys={["sub1"]}>
        <Menu.Item keyActive="1" primaryText="Option 1" />
        <Menu.Item keyActive="2" primaryText="Option 2" />

      <Menu.Sub openKey="sub1" title={<span>Option 1</span>}>
          <Menu.List key="g2" title="Item 2">
           <Menu.Item keyActive="5" primaryText="Option 5" />
           <Menu.Item keyActive="6" primaryText="Option 6" />
         </Menu.List>

         <Menu.Sub openKey="sub2" title={<span>Option 1 Inner</span>}>

            <Menu.Item keyActive="7" primaryText="Option 7" />
            <Menu.Item keyActive="8" primaryText="Option 8" />

         </Menu.Sub>
        </Menu.Sub>


      </Menu>).toJSON();

    expect(tree).toMatchSnapshot();


  });


  it('should render Menu controlled background, active color', () => {
    const tree = renderWithTheme(<Menu
         backgroundColor="#545c64"
         textColor="#fff"
         activeColor="#ffd04b"
         activeNormal={false}
         defaultSelectedKeys={['1']}
         defaultOpenKeys={['sub1']}

       >
         <Menu.Item keyActive="1" primaryText="Option 1" leftIcon={<Icon name="pied-piper-pp" />}>

         </Menu.Item>
         <Menu.Item disable keyActive="2" primaryText="Option 2" leftIcon={<Icon name="pied-piper" />}>


         </Menu.Item>
         <Menu.Item keyActive="3" primaryText="Option 2" leftIcon={<Icon name="pied-piper-alt" />}>

         </Menu.Item>
         <Menu.Sub openKey="sub1" title={<span><Icon name="envelope" style={{marginRight: 10}} /><span>Option 1</span></span>}>
           <Menu.Item keyActive="5">Option 5</Menu.Item>
           <Menu.Item keyActive="6">Option 6</Menu.Item>
           <Menu.Item keyActive="7">Option 7</Menu.Item>
           <Menu.Item keyActive="8">Option 8</Menu.Item>
       </Menu.Sub>
         <Menu.Sub openKey="sub2" title={<span><Icon name="apple" style={{marginRight: 10}} /><span>Option 2</span></span>}>
           <Menu.Item keyActive="9">Option 9</Menu.Item>
           <Menu.Item keyActive="10">Option 10</Menu.Item>
         <Menu.Sub openKey="sub3" title="Submenu">
             <Menu.Item keyActive="11">Option 11</Menu.Item>
             <Menu.Item keyActive="12">Option 12</Menu.Item>
         </Menu.Sub>
       </Menu.Sub>
       </Menu>).toJSON();

    expect(tree).toMatchSnapshot();


  });







})

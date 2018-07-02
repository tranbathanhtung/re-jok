// @flow
import * as React from 'react';
import styled from 'styled-components';

import Layout from '../Layout';


const { Header, Container, Footer, Side } = Layout;

const HeaderDemo = styled(Header)`
    background-color: #00a0e9;
    color: #fff;
    text-align: center;

`;

const SideDemo = styled(Side)`
background-color: #48acda;
color: #fff;
text-align: center;
width: 200px;
line-height: 160px;
`

const FooterDemo =  styled(Footer)`
  text-align: center;
  color: #fff;
  background-color: #00a0e9;

`;

const ContainerDemo = styled(Container)`
   height: 160px;
   color: #fff;
   background: rgba(0,160,233,.7);
   text-align: center;
   line-height: 160px;

`;




class LayoutDemo extends React.Component<{}> {

  render(){

    return (
      <React.Fragment>
        {/* Basic */}
        <Layout style={{marginBottom: 40}}>
          <HeaderDemo>
            Header
          </HeaderDemo>
          <ContainerDemo style={{minHeight: "50vh"}}>
            <ContainerDemo fullWidth isFluid style={{backgroundColor: "red"}}>
              Demo
            </ContainerDemo>
          </ContainerDemo>
          <FooterDemo>Footer</FooterDemo>
        </Layout>
        {/* With Side */}
        <Layout style={{marginBottom: 40}}>
          <HeaderDemo>Header</HeaderDemo>
          <Layout hasSide>
             <SideDemo>Side</SideDemo>
             <ContainerDemo isFluid>Container</ContainerDemo>

          </Layout>
          <FooterDemo>Footer</FooterDemo>
        </Layout>

        <Layout style={{marginBottom: 40}}>
          <HeaderDemo>Header</HeaderDemo>
          <Layout hasSide>
             <ContainerDemo isFluid>Container</ContainerDemo>
             <SideDemo>Side</SideDemo>


          </Layout>
          <FooterDemo>Footer</FooterDemo>
        </Layout>


        <Layout hasSide style={{marginBottom: 40}}>
          <SideDemo>Side</SideDemo>
          <Layout>
            <HeaderDemo>Header</HeaderDemo>
            <ContainerDemo isFluid>Container</ContainerDemo>
            <FooterDemo>Footer</FooterDemo>
          </Layout>

        </Layout>

        <Layout style={{marginBottom: 40}}>
          <HeaderDemo>Header</HeaderDemo>

          <Layout hasSide>
            <SideDemo>Side</SideDemo>
            <Layout>
              <ContainerDemo isFluid>Container</ContainerDemo>
              <FooterDemo>Footer</FooterDemo>
            </Layout>
          </Layout>

        </Layout>





      </React.Fragment>

    )
  }
}


export default LayoutDemo

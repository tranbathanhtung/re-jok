import React from 'react';
import Row from '../../Grid/Row';
import Col from '../../Grid/Col';


import {defaultTheme} from '../../theme';
import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../helpers/withTheme';

import 'jest-enzyme';
import 'jest-styled-components';


describe('<Grid />', () => {
  it('basic render', () => {
    const tree = renderWithTheme(
      <Row>
        <Col span={6} className="col-demo col">Col-6</Col>
        <Col span={6} className="col-demo col">Col-6</Col>
        <Col span={6} className="col-demo col">Col-6</Col>

        <Col span={6} className="col-demo col">Col-6</Col>
      </Row>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = shallowWithTheme(<Row>
        <Col span={6} className="col-demo col">Col-6</Col>
        <Col span={6} className="col-demo col">Col-6</Col>
        <Col span={6} className="col-demo col">Col-6</Col>

        <Col span={6} className="col-demo col">Col-6</Col>
      </Row>, defaultTheme);


    expect(wrapper.find(Col)).toHaveLength(4)

  });


  it('should render with gutter number', () => {
    const tree = renderWithTheme(
      <Row gutter={32}>
        <Col span={6} className="col">
          <div className="gutter">Col-6 Gutter-32</div>
        </Col>
        <Col span={6} className="col">
          <div className="gutter">Col-6 Gutter-32</div>

        </Col>
        <Col span={6} className="col">
          <div className="gutter">Col-6 Gutter-32</div>

        </Col>

        <Col span={6} className="col">
          <div className="gutter">Col-6 Gutter-32</div>

        </Col>
      </Row>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = shallowWithTheme(<Row gutter={32}>
          <Col span={6} className="col">
            <div className="gutter">Col-6 Gutter-32</div>
          </Col>
          <Col span={6} className="col">
            <div className="gutter">Col-6 Gutter-32</div>

          </Col>
          <Col span={6} className="col">
            <div className="gutter">Col-6 Gutter-32</div>

          </Col>

          <Col span={6} className="col">
            <div className="gutter">Col-6 Gutter-32</div>

          </Col>
        </Row>, defaultTheme);

    expect(wrapper.find(Col).at(0).props().gutter).toEqual(32);


    expect(wrapper.find(Col)).toHaveLength(4);


  });


  it('should render with gutter object', () => {
    const tree = renderWithTheme(
      <Row gutter={{xs: 8, sm: 16, lg: 40}}>
        <Col xs={2} sm={4} md={6} lg={10} className="col">
          <div className="gutter">Gutter with Respon</div>
        </Col>
        <Col  xs={20} sm={16} md={12} lg={4} className="col">
          <div className="gutter">Gutter with Respon</div>

        </Col>
        <Col xs={2} sm={4} md={6} lg={10} className="col">
          <div className="gutter">Gutter with Respon</div>

        </Col>


      </Row>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = shallowWithTheme(<Row gutter={{xs: 8, sm: 16, lg: 40}}>
          <Col xs={2} sm={4} md={6} lg={10} className="col">
            <div className="gutter">Gutter with Respon</div>
          </Col>
          <Col  xs={20} sm={16} md={12} lg={4} className="col">
            <div className="gutter">Gutter with Respon</div>

          </Col>
          <Col xs={2} sm={4} md={6} lg={10} className="col">
            <div className="gutter">Gutter with Respon</div>

          </Col>


        </Row>, defaultTheme);

    expect(wrapper.find(Col).at(0).props().gutter).toEqual({xs: 8, sm: 16, lg: 40});


    expect(wrapper.find(Col)).toHaveLength(3);


  });

  it('should render with offset, pull, push', () => {
    const treeOffset = renderWithTheme(


      <Row>
        <Col span={6} offset={6} className="col-demo col">Col-6 Offset-6</Col>

        <Col span={6} offset={6} className="col-demo col">Col-6 Offset-6</Col>

      </Row>

    ).toJSON();
    expect(treeOffset).toMatchSnapshot();

    const treePullPush = renderWithTheme(
      <Row>
        <Col span={18} push={6} className="col-demo col">Col-18 Col-push-6</Col>
        <Col span={6} pull={18} className="col-demo col">Col-6 Col-pull-18</Col>
      </Row>
    ).toJSON();
    expect(treePullPush).toMatchSnapshot();

  });


  it('should render with justify', () => {
    const tree = renderWithTheme(
      <Row justify="center">
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
      </Row>

    ).toJSON();
    expect(tree).toMatchSnapshot();



  });

  it('should render with align', () => {
    const tree = renderWithTheme(
      <Row align="center">
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
      </Row>

    ).toJSON();
    expect(tree).toMatchSnapshot();



  });

  it('should render with responsive', () => {
    const tree = renderWithTheme(
      <Row>
    <Col className="col-demo col" xs={{ span: 5, offset: 1 }} md={{ span: 6, offset: 2 }}>Col</Col>
    <Col className="col-demo col" xs={{ span: 11, offset: 1 }} md={{ span: 6, offset: 2 }}>Col</Col>
    <Col className="col-demo col" xs={{ span: 5, offset: 1 }} md={{ span: 6, offset: 2 }}>Col</Col>
  </Row>


    ).toJSON();
    expect(tree).toMatchSnapshot();



  });


});

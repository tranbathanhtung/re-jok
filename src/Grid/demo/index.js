// @flow
import  * as React from 'react';
import Row from '../Row';
import Col from '../Col';
import styled from 'styled-components';

const DemoBox = styled.div `
  height: ${props => `${props.height}px`};
  line-height: ${props => `${props.height}px`};
`

class GridDemo extends React.Component<{}> {
  render() {
    return (<React.Fragment>
      {/* Basic */}
      <Row>
        <Col span={12} className="col-demo col">Col-12</Col>
        <Col span={12} className="col-demo col">Col-12</Col>
      </Row>

      <Row>
        <Col span={8} className="col-demo col">Col-8</Col>
        <Col span={8} className="col-demo col">Col-8</Col>
        <Col span={8} className="col-demo col">Col-8</Col>
      </Row>

      <Row>
        <Col span={6} className="col-demo col">Col-6</Col>
        <Col span={6} className="col-demo col">Col-6</Col>
        <Col span={6} className="col-demo col">Col-6</Col>

        <Col span={6} className="col-demo col">Col-6</Col>
      </Row>

      {/* Gutter */}
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

      {/* Offset */}
      <Row>
        <Col span={8} className="col-demo col">Col-8 Offset-8</Col>

        <Col span={8} offset={8} className="col-demo col">Col-8 Offset-8</Col>
      </Row>

      <Row>
        <Col span={6} offset={6} className="col-demo col">Col-6 Offset-6</Col>

        <Col span={6} offset={6} className="col-demo col">Col-6 Offset-6</Col>

      </Row>

      <Row>
        <Col span={12} offset={6} className="col-demo col">Col-6 Offset-12</Col>

      </Row>

      {/* Push, Pull */}

      <Row>
        <Col span={18} push={6} className="col-demo col">Col-18 Col-push-6</Col>
        <Col span={6} pull={18} className="col-demo col">Col-6 Col-pull-18</Col>
      </Row>

      {/* Justify */}
      <Row justify="flex-start">
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
      </Row>

      <Row justify="center">
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
      </Row>

      <Row justify="flex-end">
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
      </Row>

      <Row justify="space-between">
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
      </Row>

      <Row justify="space-around">
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
        <Col className="col-demo col" span={4}>Col-4</Col>
      </Row>

      {/* Align */}
      <Row justify="center" align="flex-start">
        <Col className="col-demo col" span={4}>
          <DemoBox height={100}>Col-4</DemoBox>
        </Col>
        <Col className="col-demo col" span={4}>
          <DemoBox height={50}>Col-4</DemoBox>
        </Col>
        <Col className="col-demo col" span={4}>
          <DemoBox height={120}>Col-4</DemoBox>
        </Col>
        <Col className="col-demo col" span={4}>
          <DemoBox height={80}>Col-4</DemoBox>
        </Col>
      </Row>

      <Row justify="space-around" align="center">
        <Col className="col-demo col" span={4}>
          <DemoBox height={100}>Col-4</DemoBox>
        </Col>
        <Col className="col-demo col" span={4}>
          <DemoBox height={50}>Col-4</DemoBox>
        </Col>
        <Col className="col-demo col" span={4}>
          <DemoBox height={120}>Col-4</DemoBox>
        </Col>
        <Col className="col-demo col" span={4}>
          <DemoBox height={80}>Col-4</DemoBox>
        </Col>
      </Row>

      <Row justify="space-between" align="flex-end">
        <Col className="col-demo col" span={4}>
          <DemoBox height={100}>Col-4</DemoBox>
        </Col>
        <Col className="col-demo col" span={4}>
          <DemoBox height={50}>Col-4</DemoBox>
        </Col>
        <Col className="col-demo col" span={4}>
          <DemoBox height={120}>Col-4</DemoBox>
        </Col>
        <Col className="col-demo col" span={4}>
          <DemoBox height={80}>Col-4</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col className="col-demo col" span={6} order={3}>1 Col-order-3</Col>
        <Col className="col-demo col" span={6} order={2}>2 Col-order-2</Col>
        <Col className="col-demo col" span={6} order={4}>3 Col-order-4</Col>
        <Col className="col-demo col" span={6} order={1}>4 Col-order-1</Col>
      </Row>

      <Row>
        <Col className="col-demo col" xs={2} sm={4} md={6} lg={10}>Col</Col>
        <Col className="col-demo col" xs={20} sm={16} md={12} lg={4}>Col</Col>
        <Col className="col-demo col" xs={2} sm={4} md={6} lg={10}>Col</Col>
      </Row>

      <Row>
    <Col className="col-demo col" xs={{ span: 5, offset: 1 }} md={{ span: 6, offset: 2 }}>Col</Col>
    <Col className="col-demo col" xs={{ span: 11, offset: 1 }} md={{ span: 6, offset: 2 }}>Col</Col>
    <Col className="col-demo col" xs={{ span: 5, offset: 1 }} md={{ span: 6, offset: 2 }}>Col</Col>
  </Row>

    </React.Fragment>)
  }
}

export default GridDemo

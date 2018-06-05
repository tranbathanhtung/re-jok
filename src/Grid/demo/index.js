import React from 'react';
import Row from '../Row';
import Col from '../Col';
import '../../index.css'

class GridDemo extends React.Component {
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

      <Row>
        <Col span={18} push={6} className="col-demo col">Col-18 Col-push-6</Col>
        <Col span={6} pull={18} className="col-demo col">Col-6 Col-pull-18</Col>
      </Row>

    </React.Fragment>)
  }
}

export default GridDemo

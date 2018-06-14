// @flow
import * as React from 'react';
import Divider from '../index';

class DividerDemo extends React.Component<{}> {
  render() {
    return (<React.Fragment>
      <Divider/>
      <Divider>With Text</Divider>
      <Divider dashed/>
      <Divider textPosition="left">With Left Text</Divider>
      <Divider textPosition="right">With Right Text</Divider>
      <div style={{
          fontSize: 14
        }}>
        Text
        <Divider type="vertical"/>
        Text
        <Divider type="vertical"/>
        Text
      </div>

    </React.Fragment>)
  }
}

export default DividerDemo

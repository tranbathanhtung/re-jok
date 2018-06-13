// @flow
import * as React from 'react';
import Divider from '../index';

class DividerDemo extends React.Component {
  render() {
    return (<React.Fragment>
      <Divider/>
      <Divider>With Text</Divider>
      <Divider dashed="dashed"/>
      <Divider textPosition="left">With Left Text</Divider>
      <Divider textPosition="right">With Right Text</Divider>

    </React.Fragment>)
  }
}

export default DividerDemo

// @flow
import * as React from 'react';
import Collapse from '../Collapse';

class CollapseDemo extends React.Component<{}>{
  render(){
    return (
      <Collapse>
        <Collapse.Item>
          Demo Collapse
        </Collapse.Item>
      </Collapse>
    )
  }
}

export default CollapseDemo

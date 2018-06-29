// @flow
import * as React from 'react';
import Collapse from '../Collapse';

class CollapseDemo extends React.Component<{}>{

  handleOpen = (e: Object) => {
    // console.log(e)
  }


  render(){
    return (
      <Collapse onOpen={this.handleOpen}>
        <Collapse.Item collKey="1" label="Item 1">
          <Collapse onOpen={this.handleOpen}>
            <Collapse.Item collKey="3" label="Item 3">
              Demo Collapse

            </Collapse.Item>

            <Collapse.Item collKey="4" label="Item 4">
              Demo Collapse
            </Collapse.Item>
          </Collapse>
        </Collapse.Item>

        <Collapse.Item collKey="2" label="Item 2">
          Demo Collapse
        </Collapse.Item>
      </Collapse>
    )
  }
}

export default CollapseDemo

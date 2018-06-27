// @flow
import * as React from 'react';

import Tab from '../Tab';



class TabDemo extends React.Component<Props>{

  onSelect = (e) => {
    console.log(e)
  }

  render(){

    return (
      <Tab onSelect={this.onSelect} keyActive="2">
        <Tab.Item label="Tab 1" tabKey="1"><div>Tab 1</div></Tab.Item>
        <Tab.Item label="Tab 2" tabKey="2">Tab 2</Tab.Item>
        <Tab.Item label="Tab 3" tabKey="3">Tab 3</Tab.Item>

      </Tab>
    )
  }
}

export default TabDemo

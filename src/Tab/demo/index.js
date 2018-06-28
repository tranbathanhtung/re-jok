// @flow
import * as React from 'react';

import Tab from '../Tab';
import Icon from '../../Icon';



class TabDemo extends React.Component<{}>{

  onSelect = (e: Object) => {
    console.log(e)
  }

  render(){

    return (
      <React.Fragment>
        <Tab onSelect={this.onSelect}>
          <Tab.Item label="Tab 1" tabKey="1" disabled><div>Tab 1</div></Tab.Item>
          <Tab.Item label="Tab 2" tabKey="2">
            <Tab keyActive="2a">
              <Tab.Item label="Tab Nested 1" tabKey="1a">Tab Nested 1</Tab.Item>
              <Tab.Item label="Tab Nested 2" tabKey="2a">Tab Nested 2</Tab.Item>
              <Tab.Item label="Tab Nested 3" tabKey="3a">Tab Nested 3</Tab.Item>

            </Tab>
          </Tab.Item>
          <Tab.Item label="Tab 3" tabKey="3">Tab 3</Tab.Item>

        </Tab>
        <div style={{
            marginBottom:40
          }}>
          <Tab onSelect={this.onSelect} position="top" color="#ffd04b">
            <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="pied-piper-alt" />Tab 1</span>} tabKey="1"><div>Tab 1</div></Tab.Item>
            <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="apple" />Tab 2</span>} tabKey="2">Tab Icon</Tab.Item>
            <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="envelope" />Tab 3</span>} tabKey="3">Tab 3</Tab.Item>

          </Tab>
        </div>

        <div style={{
            marginBottom:40
          }}>
        <Tab onSelect={this.onSelect} position="bottom" color="#e91e63">
          <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="pied-piper-alt" />Tab 1</span>} tabKey="1"><div>Tab 1</div></Tab.Item>
          <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="apple" />Tab 2</span>} tabKey="2">Tab Icon</Tab.Item>
          <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="envelope" />Tab 3</span>} tabKey="3">Tab 3</Tab.Item>

        </Tab>
          </div>
          <div style={{
              marginBottom:40
            }}>
        <Tab onSelect={this.onSelect} position="left" color="#9c27b0">
          <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="pied-piper-alt" />Tab 1</span>} tabKey="1"><div>Tab 1</div></Tab.Item>
          <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="apple" />Tab 2</span>} tabKey="2">Tab Icon</Tab.Item>
          <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="envelope" />Tab 3</span>} tabKey="3">Tab 3</Tab.Item>

        </Tab>
      </div>
        <div style={{
            marginBottom:40
          }}>
        <Tab onSelect={this.onSelect} position="right">
          <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="pied-piper-alt" />Tab 1</span>} tabKey="1"><div>Tab 1</div></Tab.Item>
          <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="apple" />Tab 2</span>} tabKey="2">Tab Icon</Tab.Item>
          <Tab.Item label={<span><Icon style={{fontSize: 14, marginRight: 8}} name="envelope" />Tab 3</span>} tabKey="3">Tab 3</Tab.Item>

        </Tab>
      </div>
      </React.Fragment>

    )
  }
}

export default TabDemo

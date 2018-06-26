// @flow
import * as React from 'react';
import Tooltip from '../Tooltip';
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';



class TooltipDemo extends React.Component<{}>{
  render(){
    return (
    <React.Fragment>
      <div style={{
          marginRight: 20,
          display: "inline-block"
        }}>
        <Tooltip label="Tooltip" position="top">
          <Avatar>T</Avatar>
        </Tooltip>

      </div>

      <div style={{
          marginRight: 20,
          display: "inline-block"
        }}>
        <Tooltip position="bottom">
          <Button>Button</Button>
        </Tooltip>
      </div>

      <div style={{
          marginRight: 20,
          display: "inline-block"
        }}>
        <Tooltip position="left">
          <Button>Button</Button>
        </Tooltip>
      </div>

      <div style={{
          marginRight: 20,
          display: "inline-block"
        }}>
        <Tooltip position="right">
          <Avatar>T</Avatar>
        </Tooltip>

      </div>

    </React.Fragment>

    )
  }
}

export default TooltipDemo

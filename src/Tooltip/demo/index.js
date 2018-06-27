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

      <div style={{
          marginRight: 20,
          display: "inline-block"
        }}>
        <Tooltip position="bottomLeft">
          <Button>Button</Button>

        </Tooltip>

      </div>

      <div style={{
          marginRight: 20,
          display: "inline-block"
        }}>
        <Tooltip position="bottomRight">
          <Button>Button</Button>

        </Tooltip>

      </div>

      <div style={{
          marginRight: 20,
          display: "inline-block"
        }}>
        <Tooltip position="topLeft">
          <Button>Button</Button>

        </Tooltip>

      </div>

      <div style={{
          marginRight: 20,
          display: "inline-block"
        }}>
        <Tooltip position="topRight">
          <Button>Button</Button>

        </Tooltip>

      </div>

      <div style={{
          marginRight: 20,
          display: "inline-block"
        }}>
        <Avatar.Group>
          <Tooltip position="top">
            <Avatar>T</Avatar>
          </Tooltip>
          <Tooltip position="top">
            <Avatar>T</Avatar>
          </Tooltip>
          <Tooltip position="top">
            <Avatar>T</Avatar>
          </Tooltip>
        </Avatar.Group>


      </div>


    </React.Fragment>

    )
  }
}

export default TooltipDemo

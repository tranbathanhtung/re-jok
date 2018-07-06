// @flow
import * as React from 'react';
import Notification from '../Notification';
import Button from '../../Button/Button';





class NotificationDemo extends React.Component<{}>{

  handleOpen = () => {
    Notification.open({
      message: "hehe"
    })
  }

  render(){


    return (
    <React.Fragment>
      <Button onClick={this.handleOpen}>Button</Button>
      <Notification/>
    </React.Fragment>
    )
  }
}

export default NotificationDemo

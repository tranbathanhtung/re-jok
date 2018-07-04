// @flow
import * as React from 'react';
import Alert from '../Alert';




class AlertDemo extends React.Component<{}>{


  render(){


    return (
    <React.Fragment>
      <Alert closable>Alert</Alert>
      <Alert closable type="success">Success Alert</Alert>
      <Alert closable type="warning">Warning Alert</Alert>
      <Alert closable type="info">Info Alert</Alert>
      <Alert closable type="error">Error Alert</Alert>
      <Alert closable color="#9c27b0">Color Alert</Alert>

    <Alert closable type="success" title="Title">Alert</Alert>






    </React.Fragment>
    )
  }
}

export default AlertDemo

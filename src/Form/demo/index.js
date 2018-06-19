// @flow
import * as React from 'react';
import Form from '../Form';
import Input from '../../Input/Input';

type State = {
  value: string
}

class FormDemo extends React.Component<{}, State>{
  state = {
    value: ""
  }
  handleChange = (e: Event, data: Object) =>{

    this.setState({
      value: (e.target: window.HTMLInputElement).value
    })
  }
  render(){
    return (
      <Form>
        <Form.Item>
          <Input
            underline
            focus
            value={this.state.value}
            onChange={this.handleChange}
            defaultValue="Re-Jok"
            placeholder="Hello World"/>
        </Form.Item>
       <Form.Item>
         <Input
           icon="rocket"
           placeholder="Hello World"/>
       </Form.Item>

       <Form.Item>
         <Input
           icon="rocket"
           iconPosition="right"

           placeholder="Hello World"/>
       </Form.Item>

       <Form.Item>
         <Input
           validateStatus="success"
           helper="Submit successful"

           icon="check-circle"
           placeholder="Hello World"/>
       </Form.Item>

       <Form.Item>
         <Input
           validateStatus="warning"
            icon="exclamation-circle"
            helper="Warning danger"
            iconPosition="right"
           placeholder="Hello World"/>
       </Form.Item>

       <Form.Item>
         <Input
           validateStatus="error"
           iconPosition="right"
           helper="This field is required"
           icon="times-circle"
           placeholder="Hello World"/>
       </Form.Item>
      </Form>
    )
  }
}

export default FormDemo

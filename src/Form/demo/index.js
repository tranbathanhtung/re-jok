// @flow
import * as React from 'react';
import Form from '../Form';
import Input from '../../Input/Input';

class FormDemo extends React.Component<{}>{
  state = {
    value: ""
  }
  handleChange = (e) =>{
    this.setState({
      value: e.target.value
    })
  }
  render(){
    return (
      <Form>
       <Form.Item>
         <Input focus value={this.state.value} onChange={this.handleChange} defaultValue="Re-Jok" underline placeholder="Hello World"/>
       </Form.Item>
      </Form>
    )
  }
}

export default FormDemo

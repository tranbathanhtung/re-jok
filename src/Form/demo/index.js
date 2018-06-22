// @flow
import * as React from 'react';
import Form from '../Form';
import Input from '../../Input/Input';
import Radio from '../../Radio/Radio';

type State = {
  value: number,
  value1: string,
  value2: string,
  value3: string,
}

class FormDemo extends React.Component<{}, State>{
  state = {
    value: 1,
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  }

  handleChange = (e: Event, data: Object) =>{



    this.setState({
      value: data.value
    })
  }

   onChange1 = (e: Event) => {

    this.setState({
      value1: (e.target: window.HTMLInputElement).value
    });
   }
   onChange2 = (e: Event) => {

    this.setState({
      value2: (e.target: window.HTMLInputElement).value
    });
   }
   onChange3 = (e: Event) => {

    this.setState({
       value3: (e.target: window.HTMLInputElement).value
     });
   }

  render(){
    return (
      <Form>
        {/* Basic Input */}
        {/* <Form.Item
          label="Username"
          required
          >
          <Input
            underline
            focus
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Hello World"/>
        </Form.Item> */}
       {/* <Form.Item
         label="Password"

         >
         <Input
           icon="rocket"
           type="password"
           placeholder="Enter your password"/>
       </Form.Item>

       <Form.Item
         >
         <Input
           icon="rocket"
           iconPosition="right"
            disabled
           placeholder="Hello World"/>
       </Form.Item>

       <Form.Item
         underline
         layout="vertical"
         label="Username"
         validateStatus="success"
         helper="Submit successful"
        >
         <Input

           icon="check-circle"
           placeholder="Hello World"/>
       </Form.Item>

       <Form.Item
         layout="vertical"
         label="Email"

         validateStatus="warning"
         helper="Warning danger"
         >
         <Input
            icon="exclamation-circle"
            iconPosition="right"
           placeholder="Hello World"/>
       </Form.Item>

       <Form.Item
        validateStatus="error"
        helper="This field is required"

         >
         <Input
           underline
           iconPosition="right"
           icon="times-circle"
           placeholder="Hello World"/>
       </Form.Item>
       <Form.Item
         validateStatus="warning"
         helper="This field is required"
         >
         <Input

           iconPosition="right"
           icon="times-circle"
           addonBefore="Https://"
           addonAfter=".com"
           placeholder="Hello World"/>
       </Form.Item> */}

       {/* Text Area */}

       {/* <Form.Item
         layout="vertical"
         label="Email"

         >
         <Input
           autosize
           underline
           textarea
           rows="4"
           placeholder="Hello World"/>
       </Form.Item> */}

      {/* Input Blank */}
       {/* <Form.Item>
         <Input
           blank
           icon="search"
           placeholder="Search something"/>
       </Form.Item> */}
       <Form.Item>
           <Radio disabled name="haha" label="aaaa" value="on"/>
       </Form.Item>

       <Form.Item label="Question 1">
         <Radio.Group color="#52c41a" name="q1" onChange={this.handleChange} value={this.state.value}>
           <Radio value={1}>A</Radio>
           <Radio value={2}>B</Radio>
           <Radio value={3}>C</Radio>
           <Radio value={4}>D</Radio>
       </Radio.Group>



       </Form.Item>

       {/* <Form.Item label="Question 2" >
         <Radio.Group color="#faad14" name="q2" onChange={this.onChange1} value={this.state.value1}>
           <Radio value="Apple">Apple</Radio>
           <Radio value="Pear">Pear</Radio>
           <Radio value="Orange">Orange</Radio>

       </Radio.Group>

       </Form.Item>

       <Form.Item label="Question 3">
         <Radio.Group color="#f5222d" name="q3" onChange={this.onChange2} value={this.state.value2}>
           <Radio value="Apple">Apple</Radio>
           <Radio value="Pear">Pear</Radio>
          <Radio value="Orange">Orange</Radio>

       </Radio.Group>
       </Form.Item>

       <Form.Item layout="vertical">
         <Radio.Group name="q4" onChange={this.onChange3} value={this.state.value3}>
           <Radio id="8" value="Apple">Apple</Radio>
         <Radio id="9" value="Pear">Pear</Radio>
       <Radio id="10" value="Orange">Orange</Radio>

       </Radio.Group>
       </Form.Item> */}




      </Form>
    )
  }
}


export default FormDemo

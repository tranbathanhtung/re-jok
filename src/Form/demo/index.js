// @flow
import * as React from 'react';
import Form from '../Form';
import Input from '../../Input/Input';
import Radio from '../../Radio/Radio';

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
            defaultValue="Re-Jok"
            placeholder="Hello World"/>
        </Form.Item>
       <Form.Item
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

           <Radio id="hihi" name="haha" value="on"/>

     </Form.Item>

       <Form.Item>
         <Radio.Group>
           <Radio id="hehe" name="huhu" value="on"/>
         <Radio id="hoho" name="huhu" value="off"/>
       </Radio.Group>



       </Form.Item>




      </Form>
    )
  }
}


export default FormDemo

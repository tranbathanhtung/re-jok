// @flow
import * as React from 'react';
import Form from '../Form';
import Input from '../../Input/Input';
import Radio from '../../Radio/Radio';
import Checkbox from '../../Checkbox/Checkbox';
import Button from '../../Button/Button';

type State = {
  value: number,
  value1: string,
  value2: string,
  value3: string,
  checkedList: Array<string>,
  checkAll: boolean,
  indeterminate: boolean,

}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class FormDemo extends React.Component<{}, State>{
  state = {
    //Radio
    value: 1,
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',

    //Checkbox
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,

  }

  //Checkbox
  onChange = (checkedList: Array<string>) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange = (e: Event) => {

    this.setState({
      checkedList: (e.target: window.HTMLInputElement).checked ? plainOptions : [],
      indeterminate: false,
      checkAll: (e.target: window.HTMLInputElement).checked,
    });
  }

  onCheckbox = (values: Array<mixed>) => {
    // this.setState({
    //   checked: e.target.checked
    // })
    console.log(values)
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

   onSubmit = (e: Event) => {
     e.preventDefault();
     alert("hehe");
   }

  render(){
    return (
      <Form onSubmit={this.onSubmit}>
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
       {/* <Form.Item>
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

       <Form.Item label="Question 2" >
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

      {/* Checkbox */}
       <Form.Item>
         <Checkbox disabled checked value="Apple"/>
       </Form.Item>

        <Form.Item helper="hix" label="Question 2" >
         <Checkbox.Group color="#faad14" name="q2">
           <Checkbox value="Apple">Apple</Checkbox>
           <Checkbox value="Pear">Pear</Checkbox>
           <Checkbox value="Orange">Orange</Checkbox>

       </Checkbox.Group>

       </Form.Item>

       <Form.Item>
         <Checkbox indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            label="Select All"
            checked={this.state.checkAll}/>
       </Form.Item>

       <Form.Item label="Question 3">
         <Checkbox.Group values={this.state.checkedList} onChange={this.onChange} color="#f5222d">
           <Checkbox value="Apple">Apple</Checkbox>
           <Checkbox value="Pear">Pear</Checkbox>
           <Checkbox value="Orange">Orange</Checkbox>
        </Checkbox.Group>
       </Form.Item>

       <Form.Item>
         <Button type="submit">Submit</Button>
       </Form.Item>

       {/* Toggle */}
       <Form.Item>
         <Checkbox checked disabled toggle label="Toggle"/>
       </Form.Item>

       <Form.Item>
         <Checkbox.Group onChange={(values)=> console.log(values)} toggle color="#faad14" name="q2">
           <Checkbox value="Apple">Apple</Checkbox>
           <Checkbox value="Pear">Pear</Checkbox>
           <Checkbox value="Orange">Orange</Checkbox>

       </Checkbox.Group>

       </Form.Item>






      </Form>
    )
  }
}


export default FormDemo

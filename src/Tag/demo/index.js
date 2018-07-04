// @flow
import * as React from 'react';
import Tag from '../Tag';
import Input from '../../Input/Input';


type State = {
  value: string,
  listTag: Array<any>
}


class TagDemo extends React.Component<{}, State>{
  state = {
    value: "",
    listTag: [],
  }

  handleChange = (e: Event, data: Object) =>{

    this.setState({
      value: (e.target: window.HTMLInputElement).value
    })
  }
  handleClose = (e: Event, data: Object) => {

    this.setState({
      listTag: this.state.listTag.filter(tag => tag.props.tagKey !== data.tagKey)
    })
  }
  onKeyDown = (e: SyntheticKeyboardEvent<HTMLElement>) => {
    let { listTag, value } = this.state;
    if(e.which === 13 || e.keyCode === 13){

       let key = Math.floor((Math.random() * 100) + 1)
       this.setState({
         listTag: [...listTag, <Tag
           key={key}
           onClose={this.handleClose}
           tagKey={key}
           closable
           color="#9c27b0">{value}</Tag>],
         value: ""
       })
    }
  }
  render(){


    return (
    <React.Fragment>
      <Tag size="small">Tag 1</Tag>

      <Tag closable>Tag 2</Tag>

      <Tag size="medium" color="#9c27b0">Tag 3</Tag>

      <Tag size="large" color="#e91e63" closable>Tag 4</Tag>

      {this.state.listTag}

      <Input
        blank
        placeholder="Enter tag name"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.onKeyDown}
        />


    </React.Fragment>
    )
  }
}

export default TagDemo

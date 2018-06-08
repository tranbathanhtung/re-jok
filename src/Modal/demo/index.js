// @flow
import * as React from 'react';
import Modal from '../Modal';
import Button from '../../Button/Button'
import styled from 'styled-components'

type State = {
  open: boolean
}

const Div = styled.div`
  opacity: ${props=> props.open ? "1": "0"};
  transition: all 1s;
  width: 200px;
  height: 200px;
  background-color: red;
`


class ModalDemo extends React.Component<{}, State>{
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }
  render(){
    return (
      <React.Fragment>
        <Div open={this.state.open}/>
        <Button onClick={this.handleOpen} hasBoxShadow primary>Open Modal</Button>
      <Modal
        open={this.state.open}
        title="Welcome Basic Modal"
        onClose={this.handleClose}>
          Modal Demo
        </Modal>
      </React.Fragment>

    )
  }
}

export default ModalDemo

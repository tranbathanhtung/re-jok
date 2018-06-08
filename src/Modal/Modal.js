// @flow
import * as React from 'react';
import {
  StyledModalWrapper,
  StyledModalBackGround,
  StyledModal
} from  './style';

import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';

type Props = {
  open: boolean,
  children: any,
  onClose?: Function,
  title?: string | React.Node,

}

const defaultProps = {
  open: false,
}
class Modal extends React.Component<Props>{
  static defaultProps = defaultProps;

  state = {
    open: this.props.open
  }

  render(){
    const {
      open,
      title
    } = this.props;
    return (
      <StyledModalWrapper openModal={this.state.open} onClick={()=> this.props.onClose()}>
        <StyledModalBackGround openModal={this.state.open}/>
      <StyledModal openModal={this.state.open} onClick={(e) => e.stopPropagation()}>
        {
          title
          ? (
            <ModalHeader>
              {title}
            </ModalHeader>
          ) : null
        }
        <ModalContent>
          {this.props.children}
        </ModalContent>


      </StyledModal>
      </StyledModalWrapper>
    )
  }
}

export default Modal

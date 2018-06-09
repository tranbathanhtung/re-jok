// @flow
import * as React from 'react';
import {
  StyledModalWrapper,
  StyledModalBackGround,
  StyledModal,
  StyledAlert,
  StyledAlertTitle,
  StyledAlertDescription,
  CloseButton
} from  './style';

import Icon from '../Icon';


import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalAction from './ModalAction';

type Props = {
  open: boolean,
  children: any,
  onClose: Function,
  title?: string | React.Node,
  slide?: 'top' | 'right' | 'bottom' | 'left',
  alert: 'none' | 'info' | 'success' | 'error' | 'warning',
  alertTitle?: string,
  action?: Array<any>,
  closable: boolean,
  fullscreen: boolean,

}

const defaultProps = {
  open: false,
  alert: 'none',
  closable: false,
  fullscreen: false,
}
class Modal extends React.Component<Props>{
  static defaultProps = defaultProps;



  render(){
    const {
      open,
      title,
      alert,
      action,
      alertTitle,
      fullscreen,
      children,
      closable,
      ...rest
    } = this.props;

    const listIcon = {
      info: <Icon color="info" name="info-circle" size="lg"/>,
      success: <Icon color="success" name="check-circle" size="lg"/>,
      error: <Icon color="error" name="times-circle" size="lg"/>,
      warning: <Icon color="warning" name="exclamation-circle" size="lg"/>,

    }
    return (
      <StyledModalWrapper openModal={open} onClick={()=> this.props.onClose()}>
        <StyledModalBackGround openModal={open}/>
      <StyledModal fullscreen={fullscreen} {...rest} openModal={open} onClick={(e) => e.stopPropagation()}>
        { closable && <CloseButton onClick={() => this.props.onClose()} variant="icon" icon="times"/> }


        {
          title && alert === "none"
          ? (
            <ModalHeader>
              {title}
            </ModalHeader>
          ) : null
        }
        <ModalContent fullscreen={fullscreen}>
          {
            alert  !== "none"
             ? (
               <React.Fragment>
                 <StyledAlert>
                   {listIcon[alert]}
                   {alertTitle && <StyledAlertTitle>{alertTitle}</StyledAlertTitle>}

                 </StyledAlert>
                 <StyledAlertDescription alert={alert}>
                   {children}
                 </StyledAlertDescription>
               </React.Fragment>


             ) : children
          }


        </ModalContent>
        {
          action && <ModalAction>{action}</ModalAction>
        }


      </StyledModal>
      </StyledModalWrapper>
    )
  }
}

export default Modal

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

import { isChild } from '../helpers/typeUtils';



import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalAction from './ModalAction';

type Props = {
  /** Set modal open or not**/
  open: boolean,
  /** Children of modal.It should be wrap by modal content**/
  children: any,
  /** Function to close modal**/
  onClose: Function,
  /** Title of modal**/
  title?: any,
  /** Slide animated modal**/
  slide?: 'top' | 'right' | 'bottom' | 'left',
  /** Set modal like alert**/
  alert: 'none' | 'info' | 'success' | 'error' | 'warning',
  /** Alert title**/
  alertTitle?: string,
  /** action of modal**/
  action?: Array<React.Node>,
  /** set modal close button**/
  closable: boolean,
  /** set modal fullscreen or not**/
  fullscreen: boolean,
  /** Override style of modal**/
  style?: Object,
  /** Add more class to modal**/
  className?: string,
  /** Override style of modal header**/
  styleHeader?: Object,
  /** Add more class to modal**/
  classNameHeader?: string,
  /** Override style of modal content**/
  styleContent?: Object,
  /** Add more class to modal content**/
  classNameContent?: string,
  /** Override style of modal action**/
  styleAction?: Object,
  /** Add more class to modal action**/
  classNameAction?: string


}

const defaultProps = {
  open: false,
  alert: 'none',
  closable: false,
  fullscreen: false,
}
class Modal extends React.Component<Props>{
  static defaultProps = defaultProps;

  handleClose = (e: SyntheticEvent<HTMLElement>) => {
    const { onClose } = this.props

    if (onClose) onClose(e, this.props)
  }

  handleStopEvent = (e: SyntheticEvent<HTMLElement>) => {
    e.stopPropagation();
  }



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
      styleHeader,
      classNameHeader,
      styleContent,
      classNameContent,
      styleAction,
      classNameAction,
      ...rest
    } = this.props;

    const hasChild = !isChild(children);


    const listIcon = {
      info: <Icon color="info" name="info-circle" size="lg"/>,
      success: <Icon color="success" name="check-circle" size="lg"/>,
      error: <Icon color="error" name="times-circle" size="lg"/>,
      warning: <Icon color="warning" name="exclamation-circle" size="lg"/>,

    }
    return (
      <StyledModalWrapper openModal={open} onClick={this.handleClose}>
        <StyledModalBackGround openModal={open}/>
      <StyledModal fullscreen={fullscreen} {...rest} openModal={open} onClick={this.handleStopEvent}>
        { closable && <CloseButton onClick={this.handleClose} variant="icon" icon="times"/> }

        {
          title && alert === "none"
          ? (
            <ModalHeader style={styleHeader} className={classNameHeader}>
              {title}
            </ModalHeader>
          ) : null
        }
        <ModalContent fullscreen={fullscreen} style={styleContent} className={classNameContent}>
          {
            alert !== "none"
             ? (
               <React.Fragment>
                 <StyledAlert>
                   {listIcon[alert]}
                   {alertTitle && <StyledAlertTitle>{alertTitle}</StyledAlertTitle>}

                 </StyledAlert>
                 <StyledAlertDescription alert={alert}>
                   {hasChild && children}
                 </StyledAlertDescription>
               </React.Fragment>


             ) : hasChild && children
          }


        </ModalContent>
        {
          action && <ModalAction style={styleAction} className={classNameAction} action={action}/>
        }


      </StyledModal>
      </StyledModalWrapper>
    )
  }
}

export default Modal

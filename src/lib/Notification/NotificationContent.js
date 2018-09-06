// @flow
import * as React from 'react';
import {
  StyledNotification,
  StyledNotificationContent,
  StyledNotificationTitle,
  StyledNotificationMessage,
  StyledNotificationClose,
  StyledNotificationMedia
} from './style';

import {
  StyledIconClose
} from '../Alert/style';




import store from './store';

const {
  dispatch,
} = store;


type Props = {
  /** Id of Notification must required**/
  id: string,
  /** Set timeout of Notification... default is 4s**/
  timeout: number,
  /** Infomation of Notification... mIt must required**/
  notif: {
    /** Callback function when close Notification ...**/
    onClose?: Function,
    /** Callback function when open Notification ...**/
    onShow?: Function,
    /** Set timeout of Notification... default is 4s**/
    timeout?: number | string,
    /** Id of Notification must required**/
    id: string,
    /**Set Title of Notification**/
    title?: string,
    /** Set Messsage of Notification**/
    message?: string,
    /** Style of Notification Component**/
    style?: Object,
    /** Class of Notification Component**/
    className?: string,
    /** Set Media of Notification Component**/
    media?: React.Node,
    /** Custom Content of Notification Component... **/
    customContent?: any,
    /** Custome Close element Component**/
    customClose?: React.Node,
    /** Set color of Notification**/
    color?: string,
    /** Set Notification has close Icon or not**/
    closable?: boolean

  },
  /** Config Global Notification component**/
  config: {
    position?: 'topRight' | 'topLeft' | 'topCenter' | 'bottomRight' | 'bottomLeft' | 'bottomCenter',
    effect?: 'scale' | 'default'
  }
}





class NotificationContent extends React.Component<Props>{

  closeTimer: TimeoutID;

  handleClose = () => {
    const { id } = this.props;

    dispatch({type: 'REMOVE', payload: {id}});

  }

  componentDidMount() {
    const { timeout, notif} = this.props;

    const { onShow } = notif;

    if (typeof timeout === 'number') {
        this.closeTimer = setTimeout(() => {
            this.handleClose()
        }, timeout);
    }
    this.addEventKeydown();

    onShow && onShow({...this.props})
  }

  componentWillUnmount() {
    if (this.closeTimer) {
          clearTimeout(this.closeTimer);
    }
    this.removeEventKeydown();
    this.props.notif && this.props.notif.onClose && this.props.notif.onClose({...this.props});

  }

  addEventKeydown = () => {
    document && document.addEventListener('keydown', this.handleKeyDown);
  }

  removeEventKeydown = () => {
    document && document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e: KeyboardEvent) => {

    if(e.which !== 27 || e.keyCode !== 27){
      return;
    }
    this.handleClose();

  }

  render(){

    const {
      notif,
      config
    } =  this.props;

    const {
      closable,
      message,
      title,
      customClose,
      customContent,
      media,
      color,
      ...rest

    } = notif;

    return (

      <StyledNotification color={color} config={config} {...rest}>
       {
         customContent
         ? customContent
         : (
           <React.Fragment>
           {/* Close icon */}
           { closable && <StyledIconClose color={color} onClick={this.handleClose} name="times" />}

           {media && <StyledNotificationMedia>{media}</StyledNotificationMedia>}

           <StyledNotificationContent hasMedia={media}>
             {/* Title */}
             {
               title && <StyledNotificationTitle color={color}>
                 {title}
               </StyledNotificationTitle>
             }
             {/* Message */}
             {message && <StyledNotificationMessage color={color}>
               {message}
             </StyledNotificationMessage>}

           </StyledNotificationContent>

           {/* Custom Close Button */}
           <StyledNotificationClose>
             {customClose}
           </StyledNotificationClose>

         </React.Fragment>
         )
       }
      </StyledNotification>
    )
  }
}

export default NotificationContent

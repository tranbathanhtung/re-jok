// @flow
import * as React from 'react';
import {
  StyledNotification
} from './style';

import ReactDOM from 'react-dom';




import store from './store';

const {
  dispatch,
  getState,
  subscribe
} = store;


type Props = {
  /** Style of Tag Component**/
  style?: Object,
  /** Class of Tag Component**/
  className?: string,
  /** Children of Tag Component could be anything**/
  children?: any,
  title?: string,
  /** Set color of Tag **/
  color?: string,
  /** Set tag is closable or not**/
  closable: boolean,
  /** Callback function when close Tag... it must be work with closable**/
  onClose?: Function,
  type: 'none' | 'success' | 'info' | 'warning' | 'error',
  icon?: string,
  hasBoxshadow: boolean,
  id: string,
  timeout: number,
  notif: Object
}

const defaultProps = {
  closable: false,
  // onClose: noop,
  type: 'none',
  hasBoxshadow: false
}



class NotificationContent extends React.Component<Props>{

  static defaultProps = defaultProps;

  refNotif: {
    current: null | React$ElementRef<any>
  } = React.createRef();

 animationClose = () => {
   const { id, timeout, notif } = this.props;

   const notification = ReactDOM.findDOMNode(this.refNotif.current);


    notification.style.display = 'none';
    dispatch({type: 'REMOVE', payload: {id}});
    this.clearTimeout(this.closingTimeout);
  }

  handleClose = () => {
    const { id, timeout, notif } = this.props;

    const notification = ReactDOM.findDOMNode(this.refNotif.current);


    dispatch({type: 'REMOVE', payload: {id}});

    this.closingTimeout = setTimeout(function () {
        notification.classList.add('s-alert-hide');
    }, timeout);



  }

  componentDidMount() {
    if (typeof this.props.timeout === 'number') {
        this.closeTimer = setTimeout(() => {
            this.handleClose()
        }, this.props.timeout);
    }
  }

  componentWillUnmount() {
      if (this.closeTimer) {
          clearTimeout(this.closeTimer);
      }

  }

  onAnimationEnd = () =>{
    this.animationClose()
  }

  render(){


    const {
      notif,

      ...rest
    } =  this.props;



    return (

      <StyledNotification onAnimationEnd={this.onAnimationEnd} innerRef={this.refNotif}>
        {/* {notif.message} */}
      </StyledNotification>
    )
  }
}

export default NotificationContent

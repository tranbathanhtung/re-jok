// @flow
import * as React from 'react';
import NotificationContent from './NotificationContent';

import {
  StyledNotificationWrapper
} from './style';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Icon from '../Icon';

import { isFunction } from '../helpers/typeUtils';
import { noop, generalId } from '../helpers';

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
  onClose: Function,
  type: 'none' | 'success' | 'info' | 'warning' | 'error',
  icon?: string,
  hasBoxshadow: boolean,
}

type State = {
  queue: Array<any>
}

const defaultProps = {
  closable: false,
  onClose: noop,
  type: 'none',
  hasBoxshadow: false
}

const insertNotif = (options) => {
  const id = generalId();

  dispatch({
    type: 'INSERT',
    payload: {
      ...options,
      id
    }
  })

  return id;
}


class Notification extends React.Component<Props, State>{

  static defaultProps = defaultProps;

  unSubStore: Function;


  constructor(props: Props){
      super(props);

      this.state = {
        queue: [],
      }
    }


    static open(options: Object = {}){
       return insertNotif({
         ...options,
         type: 'none'
       });
    }

    static info(options: Object = {}){
      return insertNotif({
        ...options,
        type: 'info'
      });
    }

    static success(options: Object = {}){
      return insertNotif({
        ...options,
        type: 'success'
      });
    }

    static warning(options: Object = {}){
      return insertNotif({
        ...options,
        type: 'warning'
      });
    }

    static error(options: Object = {}){
      return insertNotif({
        ...options,
        type: 'error'
      });
    }

  componentDidMount() {

    let queue;

    const addToStore = () => {
        requestAnimationFrame(() => requestAnimationFrame(() => {
            let length;
            queue = getState() || [];
            let currentState = getState();

            length = queue.length;

            this.setState({queue});
        }));
    };
    this.unSubStore = subscribe(addToStore);



  }

  componentWillUnmount() {
      this.unSubStore();
  }

  renderNotification = () => {
    const { queue } = this.state;

    return queue.map((notif, i) => {
      const id = notif.id;
      const timeout = notif.timeout || 4500;

      return <NotificationContent
             key={id}
             id={id}
             notif={notif}
             timeout={timeout}
       />
    })
  }

  render(){

    const { queue } = this.state;
    console.log(queue);
    const {
      children,

      ...rest
    } =  this.props;



    return (

        <StyledNotificationWrapper>
          <CSSTransitionGroup transitionName="example">
         {this.renderNotification()}
       </CSSTransitionGroup>

       </StyledNotificationWrapper>



    )
  }
}

export default Notification

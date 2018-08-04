// @flow
import * as React from 'react';
import NotificationContent from './NotificationContent';
import {
  StyledNotificationWrapper,
  notifTransition
} from './style';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import JokBody from '../globals/JokBody';


import { generalId } from '../helpers';

import store from './store';

const {
  dispatch,
  getState,
  getConfig,
  subscribe
} = store;

type Props = {
  /** Style of Notification Component**/
  style?: Object,
  /** Class of Notification Component**/
  className?: string,
  /** Set position of Notification**/
  position?: 'topRight' | 'topLeft' | 'topCenter' | 'bottomRight' | 'bottomLeft' | 'bottomCenter',
  /** Set limit of Notification**/
  stack?: number,
  /** Set key of Notification**/
  key?: string | number
}

type State = {
  queue: Array<any>,
  config: Object
}


const insertNotif = (options) => {
  //If not set key notif... it will general random id
  const id = options.key || generalId();

  dispatch({
    type: 'INSERT',
    payload: {
      ...options,
      id
    }
  })

  return id;
}


const removeNotif = (key) => {
  dispatch({
    type: 'REMOVE',
    payload: {
      id: key
    }
  })
}

const configNotif = options => {
  dispatch({
    type: 'CONFIG',
    payload: {
      ...options
    }
  })
}

class Notification extends React.Component<Props, State>{


  unSubStore: Function;


  constructor(props: Props){
      super(props);

      this.state = {
        queue: [],
        config: {},
      }
    }


    static open(options: Props = {}){
       return insertNotif({
         ...options,
       });
    }

    //it only work when notification has key
    static close(key?: string | number){
      return removeNotif(key)
    }


    static config(options: Props = {}){
      return configNotif({
        ...options
      })
    }

  componentDidMount() {

    let queue;
    let config;
    const { stack } = this.props;
    const addToStore = () => {
      requestAnimationFrame(() => {
          let length;
          queue = getState() || [];
          config = getConfig() || {};

          length = queue.length;

          if(stack && length && length > stack){
            const id = queue[0].id;
            dispatch({
              type: 'REMOVE',
              payload: {
                id,
              }
            })
            queue = getState() || [];

          }

          this.setState({queue, config});
      })
    };
    this.unSubStore = subscribe(addToStore);



  }

  componentWillUnmount() {
      this.unSubStore();
  }

  renderNotification = () => {
    const { queue, config } = this.state;


    return queue.map((notif, i) => {
      const id = notif.id;
      const timeout = notif.timeout || 4000;

      return <NotificationContent
              key={id}
              id={id}
              notif={notif}
              timeout={timeout}
              config={config}
       />
    })
  }

  render(){

    const { config } = this.state;

    return (
     <JokBody>
        <StyledNotificationWrapper {...this.props} config={config}>
          <CSSTransitionGroup
            transitionName={notifTransition}
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
            >
             {this.renderNotification()}
          </CSSTransitionGroup>

       </StyledNotificationWrapper>
     </JokBody>
    )
  }
}

export default Notification

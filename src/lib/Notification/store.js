// @flow
// create mini store like redux build from s-alert

const createStore = (reducer: Function): Object => {
    let state;
    let listeners = [];
    let config;
    const getState = () => state;
    const getConfig = () => config;
    const dispatch = (action: {
      type: string,
      payload: any
    } | Object) => {
        state = reducer(config,state, action).state;
        config = reducer(config,state, action).config;
        listeners.forEach(listener => listener());
    };
    const subscribe = (listener: Function) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };
    dispatch({});
    return {
        getState, getConfig, dispatch, subscribe
    };
};

const insert = (state: Array<any>, action: Object): Array<any> => {
    return [...state, action.payload];
};

const remove = (state: Array<any>, action: Object): Array<any> => {
  
    const newState = state.filter(item => item.id !== action.payload.id);
    return newState;
};

const notifReducer = (config = {}, state = [], action) => {
    switch (action.type) {
    case 'INSERT':
        return {
          config,
          state: insert(state, action),
        }
    case 'REMOVE':
         return {
          config,
          state: remove(state, action),
        }
    case 'CONFIG':
        return {
          config: action.payload,
          state
       }

    default:
        return {
          state,
          config
        };
    }
};

const store = createStore(notifReducer);


export default store;

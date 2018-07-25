function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// create mini store like redux build from s-alert

var createStore = function createStore(reducer) {
    var state = void 0;
    var listeners = [];
    var config = void 0;
    var getState = function getState() {
        return state;
    };
    var getConfig = function getConfig() {
        return config;
    };
    var dispatch = function dispatch(action) {
        state = reducer(config, state, action).state;
        config = reducer(config, state, action).config;
        listeners.forEach(function (listener) {
            return listener();
        });
    };
    var subscribe = function subscribe(listener) {
        listeners.push(listener);
        return function () {
            listeners = listeners.filter(function (l) {
                return l !== listener;
            });
        };
    };
    dispatch({});
    return {
        getState: getState, getConfig: getConfig, dispatch: dispatch, subscribe: subscribe
    };
};

var insert = function insert(state, action) {
    return [].concat(_toConsumableArray(state), [action.payload]);
};

var remove = function remove(state, action) {

    var newState = state.filter(function (item) {
        return item.id !== action.payload.id;
    });
    return newState;
};

var notifReducer = function notifReducer() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var action = arguments[2];

    switch (action.type) {
        case 'INSERT':
            return {
                config: config,
                state: insert(state, action)
            };
        case 'REMOVE':
            return {
                config: config,
                state: remove(state, action)
            };
        case 'CONFIG':
            return {
                config: action.payload,
                state: state
            };

        default:
            return {
                state: state,
                config: config
            };
    }
};

var store = createStore(notifReducer);

export default store;
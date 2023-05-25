const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

// User State
const initialState = {
    loading: false,
    users: [],
    error: ''
};

// ACTION TYPES
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// ACTION CREATORS
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// ASYNC ACTION CREATOR
const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users.map(user => user.id)));
            }).catch((error) => {
                dispatch(fetchUsersFailure(error.message));
            });
    }
}

// REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE: 
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers());
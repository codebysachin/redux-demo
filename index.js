const { createStore, combineReducers, applyMiddleware } = require("redux");
const reduxLogger = require('redux-logger');

// Create logger to use as middleware function
const logger = reduxLogger.createLogger();

// Action Type or Constant which represent intent
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action Creators which return Action Object
const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

// REDUCERS
// Initial Cake state of store
const initialCakeState = {
    numberOfCakes: 10
}

// Cake Reducer function
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }
};

// Initial IceCream state of store
const initialIceCreamState = {
    numberOfIceCreams: 20
}

// Ice Crea Reducer function
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            numberOfIceCreams: state.numberOfIceCreams - 1
        }
        default: return state
    }
}

// Combined reducers: which will be passed into store
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

// Store - represent state of application
const store = createStore(rootReducer, applyMiddleware(logger));

// Subscribe to Store for listening operations 
store.subscribe(()=> {});

// Intent performed on Store
// Sell some cakes
store.dispatch(buyCake());
store.dispatch(buyCake());
// Sell some iceCream
store.dispatch(buyIceCream());
const { createStore } = require("redux");

// Action Type or Constant which represent intent
const BUY_CAKE = "BUY_CAKE";
const BAKE_CAKE = "BAKE_CAKE";


// Action Creators which return Action Object
const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

const addCake = () => {
    return {
        type: BAKE_CAKE
    }
}

// Reducer function
const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            numberOfCakes: state.numberOfCakes - 1
        }
        case BAKE_CAKE: return {
            numberOfCakes: state.numberOfCakes + 1
        }
        default: return state
    }
};

// Store - represent state of shelf
const store = createStore(reducer);

store.subscribe(()=> {console.log(store.getState())});
// Sell some cakes from shelf
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
// Add more cakes to shelf
store.dispatch(addCake());
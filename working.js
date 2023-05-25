const { combineReducers, createStore } = require("redux");


// CONST
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// ACTION GENERATOR
function buyCAKE() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyICECREAM() {
    return {
        type: BUY_ICECREAM,
        info: 'First Redux Action'
    }
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

const store = createStore(rootReducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCAKE());
store.dispatch(buyCAKE());
store.dispatch(buyCAKE());
store.dispatch(buyICECREAM());
store.dispatch(buyICECREAM());
unsubscribe();
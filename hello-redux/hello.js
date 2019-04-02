const redux = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  count: 0,
  colors: [],
};


function countReducer(previousState = initialState.count, { type, payload = 1 }) {
    switch (type) {
      case INCREMENT:
        return previousState.count + payload
      case DECREMENT:
        return previousState.count - payload;
    }
    return previousState;
  }

function colorReducer(previousState = initialState.colors, { type, payload = '' }) {
  switch (type) {
    case 'COLOR_ADD':
      return [...previousState.colors, payload];
  }
  return previousState;
}

const reducer = redux.combineReducers({
    count: countReducer,
    colors: colorReducer,
});

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log("state changed");
  console.log(store.getState());
});

function increment(payload) {
  return {
    type: INCREMENT,
    payload
  };
}

function decrement(payload) {
  return {
    type: DECREMENT,
    payload
  };
}

store.dispatch(increment(2));
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());

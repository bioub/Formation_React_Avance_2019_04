import { TODO_CHANGE, TODO_ADD, TODO_DELETE } from './constants';
import { combineReducers } from 'redux';

function inputReducer(previousState = '', { type, payload }) {
  switch (type) {
    case TODO_CHANGE:
      return payload;
    default:
      return previousState;
  }
}

function itemsReducer(previousState = [], { type, payload }) {
  switch (type) {
    case TODO_ADD:
      return [...previousState, payload];
    case TODO_DELETE:
      const i = previousState.findIndex((todo) => todo.id === payload.id);
      return [
        ...previousState.slice(0, i),
        ...previousState.slice(i + 1),
      ];
    default:
      return previousState;
  }
}

const todosReducer = combineReducers({
  input: inputReducer,
  list: itemsReducer,
});

export { inputReducer, itemsReducer, todosReducer };

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
  form: reduxFormReducer,
});

export function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk)),
  );

  return store;
}

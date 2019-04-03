import {
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_NEWCONTACT_CHANGE,
} from './constants';
import { getAll } from './api/users';

export function userFetch() {
  return {
    type: USER_FETCH,
  };
}

export function userFetchSuccess(users) {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
}

export function userNewcontactChange(contact) {
  return {
    type: USER_NEWCONTACT_CHANGE,
    payload: contact,
  };
}

export function userGetAll() {
  return async function(dispatch) {
    dispatch(userFetch());
    const users = await getAll();
    dispatch(userFetchSuccess(users));
  };
}
// export function userGetAll() {
//   return function(dispatch) {
//     dispatch(userFetch());
//     getAll().then((users) => dispatch(userFetchSuccess(users)));
//   };
// }

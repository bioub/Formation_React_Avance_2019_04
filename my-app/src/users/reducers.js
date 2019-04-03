import {
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_NEWCONTACT_CHANGE,
} from './constants';

const initialValue = {
  loading: false,
  items: [],
  newContact: {
    prenom: '',
    nom: '',
  },
};

export function usersReducer(previousState = initialValue, { type, payload }) {
  switch (type) {
    case USER_FETCH:
      return {
        ...previousState,
        loading: true,
        items: [],
      };
    case USER_FETCH_SUCCESS:
      return {
        ...previousState,
        loading: false,
        items: payload,
      };
    case USER_NEWCONTACT_CHANGE:
      return {
        ...previousState,
        newContact: payload,
      };
    default:
      return previousState;
  }
}

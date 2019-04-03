import { createSelector } from 'reselect';

export function selectUsers(state) {
  return state.users;
}

export function selectUsersLoading(state) {
  return selectUsers(state).loading;
}

export function selectUsersItems(state) {
  return selectUsers(state).items;
}

export function selectUsersItemsCount(state) {
  return selectUsersItems(state).length;
}

export function selectUsersNewContact(state) {
  return selectUsers(state).newContact;
}

// export function selectUsersItemsById(state, id) {
//   return selectUsersItems(state).find(items => items.id === Number(id));
// }

export const selectUsersItemsById = (state, id) => createSelector(
  selectUsersItems,
  (items) => {
    console.log('find ' + id);
    return items.find(item => item.id === Number(id))
  }
)(state);

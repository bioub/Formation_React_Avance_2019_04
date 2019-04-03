import { usersReducer } from './reducers';

it('should initialize state on action @@INIT', () => {
  const nextState = usersReducer(undefined, { type: '@@INIT' });
  expect(nextState).toEqual({
    loading: false,
    items: [],
    newContact: {
      prenom: '',
      nom: '',
    },
  });
});

it('should modify newContact on action USER_NEWCONTACT_CHANGE', () => {
  const previousState = {
    loading: false,
    items: [],
    newContact: {
      prenom: '',
      nom: '',
    },
  };
  const nextState = usersReducer(previousState, {
    type: 'USER_NEWCONTACT_CHANGE',
    payload: { prenom: 'A', nom: 'B' },
  });

  expect(nextState).toEqual({
    loading: false,
    items: [],
    newContact: {
      prenom: 'A',
      nom: 'B',
    },
  });
  expect(previousState).not.toBe(nextState);
});

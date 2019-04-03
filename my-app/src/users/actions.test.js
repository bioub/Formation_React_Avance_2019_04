import { userGetAll } from './actions';

jest.mock('./api/users');

import { getAll } from './api/users';

describe('userGetAll action creator', () => {
  it('should call dispatch twice', async () => {
    const thunk = userGetAll();
    const mock = jest.fn();

    getAll.mockReturnValue(
      Promise.resolve([{ id: 1, name: 'A' }, { id: 2, name: 'B' }]),
    );

    // const ret = await getAll();
    // console.log(ret); // [ { id: 1, name: 'A' }, { id: 2, name: 'B' } ]
    await thunk(mock);

    expect(mock).toBeCalledTimes(2);
  });
});

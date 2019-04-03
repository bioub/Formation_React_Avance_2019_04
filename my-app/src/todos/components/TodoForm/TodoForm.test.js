import React from 'react';
import { shallow } from 'enzyme'
import { TodoForm } from './TodoForm';

it('renders without crashing', () => {
  const mock = jest.fn();
  const wrapper = shallow(<TodoForm newTodoInput="Acheter du pain" onNewTodoAdd={mock} />);

  wrapper.find('input').equals(<input name="todo" value="Acheter du pain" />);
  wrapper.find('form').simulate('submit', { preventDefault() {} });

  expect(mock).toBeCalledWith('Acheter du pain');
});

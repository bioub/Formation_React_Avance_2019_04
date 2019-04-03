import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList/TodoList';
import { selectTodosItems, selectTodosCount } from '../selectors';
import { todoDelete } from '../actions';

function mapStateToProps(state) {
  return {
    items: selectTodosItems(state),
    count: selectTodosCount(state),
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onDeleteItem: item => dispatch(todoDelete(item)),
//   };
// }

// en raccourci (si action creators) :

const mapDispatchToProps = {
  onDeleteItem: todoDelete
};

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

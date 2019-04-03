import { connect } from 'react-redux';

import { UsersCount } from '../components/UsersCount/UsersCount';
import { selectUsersItemsCount } from '../selectors';

function mapStateToProps(state) {
  return {
    count: selectUsersItemsCount(state),
  };
}

export const UsersCountContainer = connect(mapStateToProps)(UsersCount);

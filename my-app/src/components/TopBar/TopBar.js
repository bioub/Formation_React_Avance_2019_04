import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { UsersCountContainer } from '../../users/containers/UsersCountContainer';

import './TopBar.css';

export function TopBar() {
  return (
    <div className="TopBar">
      <AppBar position="static" color="primary">
        <Toolbar className="TopBar-Toolbar">
          <Typography variant="h6" color="inherit">
            MyApp
          </Typography>
          <Link component={RouterLink} to="/todos" color="inherit">
            Todos
          </Link>
          <Link component={RouterLink} to="/users" color="inherit">
            <UsersCountContainer />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

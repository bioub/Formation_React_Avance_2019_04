import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import { Todos } from '../../todos/components/Todos/Todos';
import { TopBar } from '../TopBar/TopBar';
import { Users } from '../../users/components/Users/Users';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <div className="App-Route-Container">
          <Route path="/todos" component={Todos} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/starr">
        <Starred />
      </Route>

      <Route>
        <div>Sorry PAGE 404!</div>
      </Route>
    </Switch>
  );
}

export default App;

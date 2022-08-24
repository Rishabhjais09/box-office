import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        Tsi is hilem pahgoe
      </Route>

      <Route  path="/starr">
        This is exact path 88888888
      </Route>
      <Route> Sorry 404!</Route>
    </Switch>
  );
}

export default App;

import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Board from './components/Board/Board';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Board" exact component={Board} />
          <Route path="/"  component={Board} />
          <Route render={() => <h1 className="text-center">Not found!</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

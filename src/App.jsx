import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Group from './components/Group';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Novel Idea</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route
              path="/group/:groupId"
              render={props => <Group {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

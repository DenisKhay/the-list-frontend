import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Page404 } from '../pages/404';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={HomePage} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}
// todo:
// rearrange app files
// understand code splitting
// think about & add real required pages
// add smoke tests for required pages

export default App;

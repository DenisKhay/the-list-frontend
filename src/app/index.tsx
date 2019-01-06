import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import asyncImport from '../utils/async-import';

const AsyncPage404 = asyncImport(() =>
  import(/* webpackChunkName: "page_404" */ '../pages/404')
);
const AsyncLoginPage = asyncImport(() =>
  import(/* webpackChunkName: "page_login" */ '../pages/login')
);

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/303">Not found</Link>
          <Link to="/">Home</Link>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={AsyncLoginPage} />
            <Route component={AsyncPage404} />
          </Switch>
        </div>
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

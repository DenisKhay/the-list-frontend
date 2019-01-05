import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { Loading } from '../components/loading';

const Page404 = Loadable({
  loader: () => {
    return (import(/* webpackChunkName: "Page404" */ '../pages/404') as Promise<
      any
    >).then(page => {
      console.log('page: ', page);
      return page;
    });
  },
  loading: Loading,
  delay: 300
});

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
            <Route path="/login" component={LoginPage} />
            <Route path="/" exact component={HomePage} />
            <Route component={Page404} />
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

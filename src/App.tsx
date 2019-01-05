import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Page404 } from './pages/404';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';

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

export default App;

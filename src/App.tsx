import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <Router />;
  }
}

export default App;

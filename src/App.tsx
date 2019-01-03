import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:8087/api"
});

client
  .query({
    query: gql`
      {
        books {
          name
          author {
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

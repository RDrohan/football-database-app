import 'grommet/grommet.min.css';

import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './component/Home';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
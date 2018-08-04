import 'grommet/grommet.min.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <p>Application Here</p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
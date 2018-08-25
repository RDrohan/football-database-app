import 'grommet/grommet.min.css';

import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import League from './component/League';
import Team from './component/Team';

import Box from 'grommet/components/Box';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Navbar />
            <Box pad='large'
              responsive={true}>
              <Route exact path="/" component={Home} />
              <Route path="/leagues/:countryId" component={League} />
              <Route path="/teams/:leagueId" component={Team} />
            </Box>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
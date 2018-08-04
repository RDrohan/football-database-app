import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_COUNTRIES_QUERY = gql`
	{
    countries {
      id
      name
      trigramme
    }
  }
`

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="home">
        <Query query={GET_COUNTRIES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Getting countries ...</div>
            if (error) return <div>Error</div>

            return (
              <div>
                {
                  data.countries.map(country => {
                    return <li key={country.id}>{country.name} {country.trigramme}</li>
                  })
                }
              </div>
            )
          }}
        </Query>
      </div>
    );
  }
}

export default Home;
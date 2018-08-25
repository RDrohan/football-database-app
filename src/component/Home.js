import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import List from 'grommet/components/List';
import Headline from 'grommet/components/Headline';

import Countries from '../queries/countries';

class Home extends Component {
  constructor(props) {
    super(props);
    this.goToCountry = this.goToCountry.bind(this);
    this.state = {

    }
  }

  goToCountry(countryId) {
    this.props.history.push(`/leagues/${countryId}`);
  }

  render() {
    return (
      <div className="home">
        <Headline strong={true}
          align='center'
          size='small'>
          Select A Country
        </Headline>
        <List>
          <Countries goToCountry={this.goToCountry} />
        </List>
      </div>
    );
  }
}

export default withRouter(Home);
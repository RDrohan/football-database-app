import React, { Component } from 'react';
import List from 'grommet/components/List';
import Headline from 'grommet/components/Headline';

import Leagues from '../queries/leagues';

class League extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="league">
        <Headline strong={true}
          align='center'
          size='small'>
          Select A League
        </Headline>
        <List>
          <Leagues countryId={this.props.match.params.countryId} />
        </List>
      </div>
    );
  }
}

export default League;
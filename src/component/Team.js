import React, { Component } from 'react';
import List from 'grommet/components/List';
import Headline from 'grommet/components/Headline';

import Teams from '../queries/teams';

class Team extends Component {
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
          Select A Team
        </Headline>
        <List>
          <Teams leagueId={this.props.match.params.leagueId} />
        </List>
      </div>
    );
  }
}

export default Team;
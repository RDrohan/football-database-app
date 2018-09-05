import React, { Component } from 'react';
import List from 'grommet/components/List';
import Headline from 'grommet/components/Headline';

import Leagues from '../queries/leagues';
import BackButton from './BackButton';

class League extends Component {
  constructor(props) {
    super(props);
    this.goToTeams = this.goToTeams.bind(this);
    this.state = {

    }
  }

  
  goToTeams(leagueId) {
    this.props.history.push(`/teams/${leagueId}`);
  }

  render() {
    return (
      <div className="league">
        <Headline strong={true}
          align='center'
          size='small'>
          Select A League <BackButton></BackButton>
        </Headline>
        <List>
          <Leagues countryId={this.props.match.params.countryId} goToTeams={this.goToTeams} />
        </List>
      </div>
    );
  }
}

export default League;
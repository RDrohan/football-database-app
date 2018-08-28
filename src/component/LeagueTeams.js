import React, { Component } from 'react';
import List from 'grommet/components/List';
import Headline from 'grommet/components/Headline';

import Teams from '../queries/teams';

class LeagueTeams extends Component {
  constructor(props) {
    super(props);
    this.goToTeam = this.goToTeam.bind(this);
    this.state = {

    }
  }

  goToTeam(teamId) {
    console.log(teamId);
    this.props.history.push(`/team/${teamId}`);
  }

  render() {
    return (
      <div className="league-teams">
        <Headline strong={true}
          align='center'
          size='small'>
          Select A Team
        </Headline>
        <List>
          <Teams leagueId={this.props.match.params.leagueId} goToTeam={this.goToTeam} />
        </List>
      </div>
    );
  }
}

export default LeagueTeams;
import React, { Component } from 'react';

import TeamProfile from '../queries/team-profile';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="team-profile">
          <TeamProfile teamId={this.props.match.params.teamId} />
      </div>
    );
  }
}

export default Team;
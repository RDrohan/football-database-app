import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ListItem from 'grommet/components/ListItem';

const GET_LEAGUE_TEAMS_QUERY = gql`
query($leagueId: ID) {
    leagueTeams(leagueId: $leagueId) {
        id
        name
        yearFounded
    }
}`

const Leagues = ({ leagueId, goToTeam }) => (
	<Query query={GET_LEAGUE_TEAMS_QUERY} variables={{ leagueId }}>
		{({ loading, error, data }) => {
			if (loading) return <div>Getting teams ...</div>
			if (error) return <div>
				<ListItem justify='between' separator='horizontal'>
					<span>Couldn't load any teams</span>
					<span className='secondary'>???</span>
				</ListItem>
			</div>

			return (
				<div>
					{
						data.leagueTeams.map(team => {
							return <ListItem key={team.id} justify='between' separator='horizontal' onClick={() => goToTeam(team.id) }>
								<span>{team.name}</span>
								<span className='secondary'>{team.yearFounded}</span>
							</ListItem>
						})
					}
				</div>
			)
		}}
	</Query>
);

export default Leagues;
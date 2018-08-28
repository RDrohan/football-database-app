import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_TEAM_QUERY = gql`
query($teamId: ID) {
    team(id: $teamId) {
        id
        name
        yearFounded
        stadium {
            seatedCapacity
            totalCapacity
            city {
                name
            }
        }
    }
}`

const Team = ({ teamId }) => (
	<Query query={GET_TEAM_QUERY} variables={{ teamId }}>
		{({ loading, error, data }) => {
			if (loading) return <div>Getting team info ...</div>
			if (error) return <div>Could not load profile</div>
			return (
				<div>
                    {data.team.name}
				</div>
			)
		}}
	</Query>
);

export default Team;
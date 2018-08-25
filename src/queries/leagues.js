import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ListItem from 'grommet/components/ListItem';

const GET_COUNTRY_LEAGUES_QUERY = gql`
query($countryId: ID) {
    countryLeagues(countryId: $countryId) {
        id
        name
        level
    }
}`

const Leagues = ({ countryId }) => (
	<Query query={GET_COUNTRY_LEAGUES_QUERY} variables={{ countryId }}>
		{({ loading, error, data }) => {
			if (loading) return <div>Getting leagues ...</div>
			if (error) return <div>
				<ListItem justify='between' separator='horizontal'>
					<span>Couldn't load any leagues</span>
					<span className='secondary'>???</span>
				</ListItem>
			</div>

			return (
				<div>
					{
						data.countryLeagues.map(league => {
							return <ListItem key={league.id} justify='between' separator='horizontal'>
								<span>{league.name}</span>
								<span className='secondary'>{league.level}</span>
							</ListItem>
						})
					}
				</div>
			)
		}}
	</Query>
);

export default Leagues;
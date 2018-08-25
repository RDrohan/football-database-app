import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ListItem from 'grommet/components/ListItem';

const GET_COUNTRIES_QUERY = gql`
{
    countries {
        id
        name
        trigramme
    }
}`

const Countries = () => (
	<Query query={GET_COUNTRIES_QUERY}>
		{({ loading, error, data }) => {
			if (loading) return <div>Getting countries ...</div>
			if (error) return <div>
				<ListItem justify='between' separator='horizontal'>
					<span>Couldn't load any countries</span>
					<span className='secondary'>???</span>
				</ListItem>
			</div>

			return (
				<div>
					{
						data.countries.map(country => {
							return <ListItem key={country.id} justify='between' separator='horizontal' onClick={() => alert(country.id)}>
								<span>{country.name}</span>
								<span className='secondary'>{country.trigramme}</span>
							</ListItem>
						})
					}
				</div>
			)
		}}
	</Query>
);

export default Countries;
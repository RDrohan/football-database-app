import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
			if (error) return <div>Error</div>

			return (
				<div>
					{
						data.countries.map(country => {
							return <li key={country.id}>{country.name} {country.trigramme}</li>
						})
					}
				</div>
			)
		}}
	</Query>
);

export default Countries;
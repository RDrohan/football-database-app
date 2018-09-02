import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';

const GET_TEAM_QUERY = gql`
query($teamId: ID) {
    team(id: $teamId) {
        id
        name
        yearFounded
        stadium {
            name
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
            let { team } = data;
            console.log(team);

            if (loading) return <div>Getting team info ...</div>
            if (error) return <div>Could not load profile</div>
            return (
                <div>
                    <Heading strong={true}
                        align='start'
                        margin='large'>
                        {team.name}
                    </Heading>
                    <Label
                        margin='medium'
                        uppercase={true}>
                        City
                    </Label>
                    <Paragraph size='xlarge'>
                        {team.stadium.city.name}
                    </Paragraph>
                    <Label
                        margin='medium'
                        uppercase={true}>
                        Year Founded
                    </Label>
                    <Paragraph size='xlarge'>
                        {team.yearFounded}
                    </Paragraph>
                    <Label
                        margin='medium'
                        uppercase={true}>
                        Stadium Name
                    </Label>
                    <Paragraph size='xlarge'>
                        {team.stadium.name}
                    </Paragraph>
                    <Label
                        margin='medium'
                        uppercase={true}>
                        Seated / Total Capacity
                    </Label>
                    <Paragraph size='xlarge'>
                        {team.stadium.seatedCapacity} / {team.stadium.totalCapacity}
                    </Paragraph>
                </div>
            )
        }}
    </Query>
);

export default Team;
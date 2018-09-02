import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

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
        winner {
            competition {
                name
            }
            season
        }
    }
}`

const Team = ({ teamId }) => (
    <Query query={GET_TEAM_QUERY} variables={{ teamId }}>
        {({ loading, error, data }) => {
            let { team } = data;
            if (loading) return <div>Getting team info ...</div>
            if (error) return <div>Could not load profile</div>

            let trophies = {};
            for (let i = 0; i < team.winner.length; i++) {
                let { competition, season } = team.winner[i];
                if (trophies.hasOwnProperty(competition.name)) {
                    trophies[competition.name].push(season);
                } else {
                    trophies[competition.name] = [season];
                }
            }

            let trophyHTML = Object.keys(trophies).map((key) => {
                return <AccordionPanel heading={key}>
                    <Paragraph>
                        {trophies[key].join(', ')}
                    </Paragraph>
                </AccordionPanel>
            });

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
                    <Paragraph size='large'>
                        {team.stadium.city.name}
                    </Paragraph>
                    <Label
                        margin='medium'
                        uppercase={true}>
                        Year Founded
                    </Label>
                    <Paragraph size='large'>
                        {team.yearFounded}
                    </Paragraph>
                    <Label
                        margin='medium'
                        uppercase={true}>
                        Stadium Name
                    </Label>
                    <Paragraph size='large'>
                        {team.stadium.name}
                    </Paragraph>
                    <Label
                        margin='medium'
                        uppercase={true}>
                        Seated / Total Capacity
                    </Label>
                    <Paragraph size='large'>
                        {team.stadium.seatedCapacity} / {team.stadium.totalCapacity}
                    </Paragraph>
                    <Label
                        margin='medium'
                        uppercase={true}>
                        Trophies
                    </Label>
                    <Accordion openMulti={true}>
                        {trophyHTML}
                    </Accordion>
                </div>
            )
        }}
    </Query>
);

export default Team;
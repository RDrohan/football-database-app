import React, { Component } from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import MenuIcon from 'grommet/components/icons/base/Menu';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="navbar">
				<Header>
					<Title>Football Database</Title>
					<Box flex={true}
						justify='end'
						direction='row'
						responsive={false}>
						<Menu icon={<MenuIcon />}
							dropAlign={{ "right": "right" }}>
							<Anchor href='#' className='active'>Link 1</Anchor>
							<Anchor href='#'>Link 2</Anchor>
							<Anchor href='#'>Link 3</Anchor>
						</Menu>
					</Box>
				</Header>
			</div>
		);
	}
}

export default Home;
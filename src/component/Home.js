import React, { Component } from 'react';
import List from 'grommet/components/List';
import Headline from 'grommet/components/Headline';

import Countries from '../queries/countries';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="home">
        <Headline strong={true}
          align='center'
          size='small'>
          Select A Country
        </Headline>
        <List>
          <Countries />
        </List>
      </div>
    );
  }
}

export default Home;
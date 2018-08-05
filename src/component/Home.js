import React, { Component } from 'react';
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
        <Countries />
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'grommet/components/Button';
import CaretPreviousIcon from 'grommet/components/icons/base/CaretPrevious';

class BackButton extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        return (
            <Button icon={<CaretPreviousIcon />} onClick={this.context.router.history.goBack} />
        );
    }
}

export default BackButton;
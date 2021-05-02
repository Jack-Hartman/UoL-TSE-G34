import React, { Component } from 'react';

class Compare extends Component {

    constructor(props) {
        super (props);

        this.setState({ countryX: 'null', countryY: 'null' });

    }

    render() {
        return(
            <h1>Compare</h1>
        );
    }
}

export default Compare;
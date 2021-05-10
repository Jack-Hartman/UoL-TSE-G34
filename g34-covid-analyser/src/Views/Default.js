
import React, { Component } from 'react'; // Import React.

// Import Bootstrap Components: (Import each component ont at a time to save space).
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Import My Components:
import DefaultGraphs from '../Components/Parts/DefaultGraphs';
import Worldwide from '../Components/Parts/WorldWide';

class Default extends Component {
	constructor(props) {
		super (props);
	}
    render() {
        return (
            <Container fluid style={{padding: '5px', backgroundColor: '#293742', alignSelf: 'center'}}>
				<Row style={{ width: '100%'}}>
					{/* <Col>
						<Worldwide />
						<br />
						<br />
						<br />
					</Col> */}
					{/* <Col>
						<Row>
							<DefaultGraphs data={this.props.data}/>
						</Row>
					</Col> */}
					<DefaultGraphs style={{ alignSelf: 'center' }} data={this.props.data} retrievalType={this.props.retrievalType}/>
				</Row>
				<Worldwide style={{width: '90%'}} data={this.props.data}/>
			</Container>
        );
    }
}

export default Default;
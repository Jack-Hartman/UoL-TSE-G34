
import React, { Component } from 'react'; // Import React.

// Import Bootstrap Components: (Import each component ont at a time to save space).
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import My Components:
import DefaultGraphs from '../Components/Parts/DefaultGraphs';
import Worldwide from '../Components/Parts/WorldWide';
import DragNdrop from '../Components/Parts/DragnDrop';
import News from '../Components/Parts/News';

class Default extends Component {

    render() {
        return (
            <Container fluid style={{padding: '5px', backgroundColor: '#293742', alignSelf: 'center'}}>
				<Row style={{ width: '100%'}}>
					<Col>
						<Worldwide />
						<br />
						<br />
						<br />
					</Col>
					<Col>
						<Row>
							<DefaultGraphs />
						</Row>
					</Col>
				</Row>
				<Row>
					<News />
				</Row>
				{/* <Row>
					<DragNdrop />
				</Row> */}
			</Container>
        );
    }
}

export default Default;
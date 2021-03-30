/*
	- Add bootstrap
	- Rewrite algorithm to dynamically render the graphs.
	- Rewrite the drag and drop algorithm to accomodate the Bootstrap grid system.
*/

// Import CSS.
import './App.css'; // Import styings for the application.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the bootstrap styles.

// Import React.
import React from 'react'; // Import react.

// Import My Components.
import DefaultGraphs from './Components/Parts/DefaultGraphs';
import Worldwide from './Components/Parts/WorldWide';
import DragNdrop from './Components/Parts/DragnDrop';

// Import Bootstrap Components (Import each component ont at a time to save space).
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
	
	return (
		<>
			<Navbar style={{ backgroundColor: '#30404D' }} className='text-white'>
				<Navbar.Brand>Hello</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Create</Nav.Link>
					<Nav.Link href="#features">Manage</Nav.Link>
					<Nav.Link href="#pricing">Help</Nav.Link>
				</Nav>
			</Navbar>

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
					<DragNdrop />
				</Row>
			</Container>

		</>
  	);
}

export default App;

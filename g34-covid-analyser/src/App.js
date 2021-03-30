/*
	- Add bootstrap
	- Rewrite algorithm to dynamically render the graphs.
	- Rewrite the drag and drop algorithm to accomodate the Bootstrap grid system.
*/

// Import CSS.
import './App.css'; // Import styings for the application.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the bootstrap styles.

// Import React.
import React, { Component } from 'react'; // Import react.

// Import My Components.
import Default from './Views/Default';
import About from './Views/About';

// Import Bootstrap Components (Import each component ont at a time to save space).
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends Component {
	
	constructor(props) {
		super (props);
		this.state = { View: 'default'}
	}

	componentDidMount() { // Runs after compoennt has been mounted
		console.log(this.getCurrentView());
	}

	getCurrentView() {
		return this.state;
	}
	
	render () {	
		let ui;
		
		if (this.state.View === 'default') {
			ui = <Default />
		} else if (this.state.View === 'about') {
			ui = <About />
		}

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
				
				{/* Where the main view of the application is */}
				{
					ui
				}
			</>
		);
	}
}

export default App;

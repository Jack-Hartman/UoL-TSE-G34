// Import CSS.
import './App.css'; // Import styings for the application.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the bootstrap styles.

// Import React.
import React, { Component } from 'react'; // Import react.

// Import My Components.
import Default from './Views/Default';
import About from './Views/About';
import Loading from './Views/Loading';

// Import Bootstrap Components (Import each component ont at a time to save space).
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class App extends Component {
	
	constructor(props) {
		super (props);
		this.state = { View: 'loading'}

		// This binding is neccessary to make `this` work in the callback
		this.handleAboutClick = this.handleAboutClick.bind(this);
		this.handleAccountClick = this.handleAccountClick.bind(this);
		this.handleCreateClick = this.handleCreateClick.bind(this);
		this.handleHomeClick = this.handleHomeClick.bind(this);
	}

	componentDidMount() { // Runs after compoennt has been mounted
		setTimeout(() => {
			this.setState(state => ({
				View: 'default'
			}));
		}, 3000);
	}

	getCurrentView() {
		return this.state;
	}

	handleNavClick(destination) {
		// Need to see what the value is:
		this.setState(state => ({ // set the state.
			View: 'about'
		}));
	}

	handleCreateClick() {
		this.setState(state => ({
			View: 'create'
		}));
	}

	handleAboutClick() {
		this.setState(state => ({
			View: 'info'
		}));
	}

	handleAccountClick() {

	}

	handleHomeClick() {
		this.setState(state => ({
			View: 'default'
		}));
	}
	
	render () {	
		let ui;
		
		if (this.state.View === 'default') {
			ui = <Default />
		} else if (this.state.View === 'about') {
			ui = <About />
		} else if (this.state.View === 'loading') {
			ui = <Loading />
		}

		return (
			<>
				<Navbar style={{ backgroundColor: '#30404D' }} className='text-white'>
					<Navbar.Brand onClick={this.handleHomeClick}>G34 Covid Analyser</Navbar.Brand>
					<Nav className="mr-auto">
						<Button variant="primary">Create</Button>
						<Button variant="info" onClick={this.handleAboutClick}>About</Button>
						<Button variant="danger">Account</Button>
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

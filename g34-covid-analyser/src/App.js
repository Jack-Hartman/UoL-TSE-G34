// Import CSS.
import './App.css'; // Import styings for the application.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the bootstrap styles.

// Import React.
import React, { Component } from 'react'; // Import react.

// Import My Components.
import Default from './Views/Default';
import About from './Views/About';
import Loading from './Views/Loading';
import FindCountry from './Views/FindCountry';

// Import Bootstrap Components (Import each component ont at a time to save space).
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class App extends Component {
	
	constructor(props) {
		super (props);
		// Bind the state handler to the function.
		this.handler = this.handler.bind(this);
		this.state = { View: 'findCountry', Data: 'null', Home: 'Spain'}
	
		// This binding is neccessary to make `this` work in the callback
		this.handleAboutClick = this.handleAboutClick.bind(this);
		this.handleAccountClick = this.handleAccountClick.bind(this);
		this.handleCreateClick = this.handleCreateClick.bind(this);
		this.handleHomeClick = this.handleHomeClick.bind(this);
		this.handleSetHomeClick = this.handleSetHomeClick.bind(this);



	}

	componentDidMount() { // Runs after compoennt has been mounted
		// setTimeout(() => {
		// 	this.setState(state => ({
		// 		View: 'default'
		// 	}));
		// }, 3000);

	}

	componentDidUpdate() {
		console.log('upadte');

		
	}

	handler(arg) {
		console.log(arg);

		this.setState(state => ({
			View: 'loading',
			Home: arg
		}), () => {
			fetch(`/worldwide?country=${this.state.Home}`).then((res) => {
				if (res.ok) {
					console.log(res);
					return res.json();
				}
			}).then(data => {
				console.log(data)
				this.setState(state => ({
					View: 'default',
					Data: data
				}));
				console.log(this.state.Data);
			});
		});
	}
	
	stateHandler() {
		this.setState(state => ({
			View: 'loading'
		}));
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
	
	handleSetHomeClick() {
		this.setState(state => ({
			View: 'findCountry'
		}));
	}

	handleAboutClick() {
		this.setState(state => ({
			View: 'about'
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
			ui = <Default data={this.state.Data}/>
		} else if (this.state.View === 'about') {
			ui = <About />
		} else if (this.state.View === 'loading') {
			ui = <Loading />
		} else if (this.state.View === 'findCountry') {
			ui = <FindCountry action={this.handler}/>
		}

		return (
			<>
				<Navbar style={{ backgroundColor: '#30404D' }} className='text-white'>
					<Navbar.Brand onClick={this.handleHomeClick}>G34 Covid Analyser</Navbar.Brand>
					<Nav className="mr-auto">
						<Button variant="primary">Create</Button>
						<Button variant="info" onClick={this.handleAboutClick}>About</Button>
						<Button variant="info" onClick={this.handleSetHomeClick}>Set Home Country</Button>
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



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
import Compare from './Views/Compare';

// Import Bootstrap Components (Import each component ont at a time to save space).
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class App extends Component {
	
	constructor(props) {
		super (props);
		
		this.state = { View: 'findCountry', Data: 'null', Home: 'null', RetrievalType: 0}
		
		// This binding is neccessary to make `this` work in the callback
		this.handleAboutClick = this.handleAboutClick.bind(this);
		this.handleCreateClick = this.handleCreateClick.bind(this);
		this.handleHomeClick = this.handleHomeClick.bind(this);
		this.handleSetHomeClick = this.handleSetHomeClick.bind(this);
		this.handleCompareClick = this.handleCompareClick.bind(this);
		
		// Bind the state handler to the function.
		this.handler = this.handler.bind(this);
		
		// Dropdown clicks:
		this.cumulativeTotalClick = this.cumulativeTotalClick.bind(this);
		this.cumulativeTotalPerPop = this.cumulativeTotalPerPop.bind(this);
		this.reportedInPastDay = this.reportedInPastDay.bind(this);
		this.reportedInPastWeek = this.reportedInPastWeek.bind(this);
		this.reportedInPastWeekPerPop = this.reportedInPastWeekPerPop.bind(this);
	}

	handler(arg) {
		console.log(arg);

		this.setState(state => ({
			View: 'loading',
			Home: arg
		}), () => {
			// Set timeout for loading animation.
			setTimeout(() => {
				// Fetch the main chunck of data for the application.
				fetch(`${process.env.REACT_APP_API_LOC}/worldwide?country=${this.state.Home}`).then((res) => {
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
			}, 1000);
		});
	}
	
	// This handles the loading and data retrieval animation.
	stateHandler() {
		this.setState(state => ({
			View: 'loading'
		}));
	}

	getCurrentView() {
		return this.state;
	}

	// Click event functions:
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

	handleCompareClick() {
		this.setState(state => ({
			View: 'compare'
		}));
	}

	handleHomeClick() {
		if(this.state.Home != 'null'){
			this.setState(state => ({
				View: 'default'
			}));
		}
		else{
			this.setState(state => ({
				View: 'findCountry'
			}));
		}
	}

	cumulativeTotalClick() {
		this.setState(state => ({
			RetrievalType: 0
		}));
	}

	cumulativeTotalPerPop() {
		this.setState(state => ({
			RetrievalType: 1
		}));
	}

	reportedInPastDay() {
		this.setState(state => ({
			RetrievalType: 2
		}));
	}

	reportedInPastWeek() {
		this.setState(state => ({
			RetrievalType: 3
		}));
	}

	reportedInPastWeekPerPop() {
		this.setState(state => ({
			RetrievalType: 4
		}));
	}

	render () {
		document.title = "Covid Analyser"
		// This handler tell the application which view to display as this is a single page application:
		let ui;

		if (this.state.View === 'default') {
			ui = <Default data={this.state.Data} production={this.isProduction} retrievalType={this.state.RetrievalType}/>
		} else if (this.state.View === 'about') {
			ui = <About />
		} else if (this.state.View === 'loading') {
			ui = <Loading />
		} else if (this.state.View === 'findCountry') {
			ui = <FindCountry action={this.handler}  production={this.isProduction}/>
		} else if (this.state.View === 'compare') {
			ui = <Compare production={this.isProduction} retrievalType={this.state.RetrievalType}/>
		}

		return (
			<>
				<Navbar style={{ backgroundColor: '#30404D' }} className='text-white'>
					<Navbar.Brand style={{ color: '#ffffff' }}>G34 Covid Analyser</Navbar.Brand>
					<Nav className="mr-auto">
						<Button className="navButton" style={{ paddingRight: '5px'}} variant="primary" onClick={this.handleHomeClick}>Home</Button>
						<Button className="navButton" style={{ paddingRight: '5px' }} variant="primary" onClick={this.handleCompareClick}>Compare</Button>
						<Button className="navButton" style={{ paddingRight: '5px' }} variant="info" onClick={this.handleAboutClick}>About</Button>
						<Button className="navButton" style={{ paddingRight: '5px' }} variant="info" onClick={this.handleSetHomeClick}>Set Home Country</Button>
						<DropdownButton id="dropdown-basic-button" title="Select your option">
							<Dropdown.Item href="#/action-1" onClick={this.reportedInPastDay}>Newly Reported in last 24 Hours</Dropdown.Item>
							<Dropdown.Item href="#/action-2" onClick={this.reportedInPastWeek}>Newly Reported in last 7 days</Dropdown.Item>
							<Dropdown.Item onClick={this.reportedInPastWeekPerPop}>Newly Reported in last 7 days per 100000 population</Dropdown.Item>
							<Dropdown.Item onClick={this.cumulativeTotalClick}>Cumulative total</Dropdown.Item>
							<Dropdown.Item onClick={this.cumulativeTotalPerPop}>Cumulative total per 100000 population</Dropdown.Item>
						</DropdownButton>
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



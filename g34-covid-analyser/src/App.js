/*
	- Add bootstrap
	- Rewrite algorithm to dynamically render the graphs.
	- Rewrite the drag and drop algorithm to accomodate the Bootstrap grid system.
*/

// Import CSS.
import './App.css'; // Import styings for the application.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the bootstrap styles.

// Import React.
import React, { useContext, useState, useRef } from 'react'; // Import react.

// Import My Components.
import Graph from './Components/Graphs/Graph';
import { DndGrid } from './Components/DndGrid';
import DataGripCard from './Components/Card/Card'; // Import Card for the graphs.

// Import Bootstrap Components (Import each component ont at a time to save space).
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const data = { // Example data for the graphs.
	items: ['1', '2', '3', '4', '5', '6'] // Create a grid like object/array to better initiate the dragging functionality.
}

function App() {

  	//const [sidebar, setSidebar] = useState(true);
	//const size = useContext(ResponsiveContext); 

	const [list, setList] = useState(data); // Create states for list.
	const [dragging, setDragging] = useState(false); // Create statets for dragging.
	const dragItem = useRef(); 
	const dragNode = useRef();
  	
	const handleDragStart = (e, location) => { // Calls when the mouse clicks on the item to initiate the drag.
		console.log('drag starting', location);
		dragItem.current = location;
		dragNode.current = e.target;
		dragNode.current.addEventListener('dragend', handleDragEnd);
		setTimeout(() => {
			setDragging(true);

		}, 0)
	}

	const handleDragEnd = () => { // Calls when the user lifts the mouse button.
		console.log('Ending Drag');
		setDragging(false);
		dragItem.current = null;
		dragNode.current.removeEventListener('dragend', handleDragEnd);
		dragNode.current = null;
	}

	const handleDragEnter = (e, location) => { // Calls when the object being dragged overlaps another item.
		console.log('Entering Item', location);

		const currentItem = dragItem.current;

		if (e.target !== dragNode.current) {
			console.log("TARGET IS NOT THE SAME");
			setList(oldList => {
				let newList = JSON.parse(JSON.stringify(oldList)); // This isn't very efficient.
				newList.items.splice(location, 0, newList.items.splice(currentItem.i1, 1)[0]);
				dragItem.current = location;	
				return newList;
			})
		}
		console.log(data.items);

	}

	const getStyles = () => { // A template to maybe add stylse to the project.
		return 'current';
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

			{/*
				Drag Start: set current item being dragged
				Init draged listener
				stle dragges card
				init dragenter listeners


				Drag Enter
				Set target item if not itself-
				Handle no item case push to group
				re-order state
style={{backgroundColor: '#0B0C10',
				Drag end
				Clean up current item remove drop end listener
			*/}
			<Container style={{padding: '10px', backgroundColor: '#293742', alignSelf: 'center'}}>
				<Row>
					{
						list.items.map((i, i1) => (
							<div style={{width: '20rem', backgroundColor: '#293742', alignContent: 'center', marginRight: '10px', marginTop: '10px' }} className={dragging?getStyles():"dndItem"} draggable onDragStart={(e) => {
								handleDragStart(e, i1)
							}} 
							onDragEnter={dragging?(e) => {
								handleDragEnter(e, i1)
							} : null}>
								<Col>
									<DataGripCard name={i} type={'hello'}/>
								</Col>
							</div>
						))
					}
				</Row>
			</Container>

		</>
  	);
}

export default App;

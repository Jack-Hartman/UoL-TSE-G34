import './App.css'; // Import styings for the application.
import { Grommet, Box, Button, Heading, Grid, Text, ResponsiveContext, Sidebar, Nav } from "grommet"; // Import UI components.
import { grommet } from 'grommet/themes'; // Import grommet themes.
import React, { useContext, useState, useRef } from 'react'; // Import react.
import Graph from './Components/Graphs/Graph';
import { DndGrid } from './Components/DndGrid';
import DataGripCard from './Components/Card/Card'; // Import Card for the graphs.  

const data = {
	items: ['1', '2', '3', '4', '5', '6']
}

function App() {

  	const [sidebar, setSidebar] = useState(true);
	const size = useContext(ResponsiveContext); 

	const [list, setList] = useState(data);
	const [dragging, setDragging] = useState(false);
	const dragItem = useRef();
	const dragNode = useRef();
  	
	const handleDragStart = (e, location) => {
		console.log('drag starting', location);
		dragItem.current = location;
		dragNode.current = e.target;
		dragNode.current.addEventListener('dragend', handleDragEnd);
		setTimeout(() => {
			setDragging(true);

		}, 0)
	}

	const handleDragEnd = () => {
		console.log('Ending Drag');
		setDragging(false);
		dragItem.current = null;
		dragNode.current.removeEventListener('dragend', handleDragEnd);
		dragNode.current = null;
	}

	const handleDragEnter = (e, location) => {
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

	const getStyles = () => {
		return 'current';
	}
	
	return (
		<Grommet> 
			<Grid fill rows={['auto', 'flex']} columns={['auto', 'flex']} areas={[
				{name : 'header', start: [0, 0], end: [1, 0]},
				{name : 'sidebar', start: [0, 1], end: [0, 1]},
				{name: 'main', start: [1, 1], end: [1, 1]},
			]}>
				<Box
					gridArea="header"
					direction="row"
					align="center"
					justify="between"
					pad={{ horizontal: 'medium', vertical: 'small' }}
					background="dark-2"
				>
					<Button onClick={() => setSidebar(!sidebar)}>
						<Text size='large'>Data Grip</Text>
					</Button>
					<Text>my@email</Text>
				</Box>
		{ sidebar && (
				<Box
					gridArea='sidebar'
					background='light'
					width='small'
					alignContent='center'
					pad='medium'
					animation={[
						{type: 'fadeIn', duration: 300},
						{type: 'slideRight', size: 'xlarge', duration: 150}]}
				>
					{/* {['First', 'Second', 'Third'].map(name => (
						<Button key={name} href='' hoverIndicator>
							<Box pad={{ horizontal: 'medium', vertical: 'small'}}>
								<Text>{name}</Text>
							</Box>
						</Button>
					))} */}
					<Box align='center'>
						<Sidebar alignself='center' background="brand" round="small" width='90%' height='90%'
							header={
								<h1>Home</h1>
							}
							footer={
								<h2>Exit</h2>
							}
							>
							<Nav gap="small">
								<Button hoverIndicator>Create</Button>
								<Button hoverIndicator>Delete</Button>
								<Button hoverIndicator>Help</Button>				
							</Nav>
						</Sidebar>
					</Box>
				</Box>
			)}
				<Box gridArea='main' justify='center' align='center'>
					<Box pad='small'>

						{/*
							Drag Start: set current item being dragged
							Init draged listener
							stle dragges card
							init dragenter listeners


							Drag Enter
							Set target item if not itself-
							Handle no item case push to group
							re-order state

							Drag end
							Clean up current item remove drop end listener
						*/}
						
						<Grid columns={['medium', 'medium', 'medium']}>
							{
								list.items.map((i, i1) => (
									<div className={dragging?getStyles():"dndItem"} draggable onDragStart={(e) => {
										handleDragStart(e, i1)
									}} 
									onDragEnter={dragging?(e) => {
										handleDragEnter(e, i1)
									} : null}>
										<DataGripCard name={i} />
									</div>
								))
							}
						</Grid>


					</Box>
				</Box>
			</Grid>
		</Grommet>
  	);
}

export default App;

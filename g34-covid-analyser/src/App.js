import './App.css';
import { Grommet, Box, Button, Heading, Grid, Text, ResponsiveContext, Sidebar, Nav } from "grommet";
import { grommet } from 'grommet/themes';
import React, { useContext, useState } from 'react';
import DataGripCard from './Components/Card/Card';


function App() {

  	const [sidebar, setSidebar] = useState(true);
	const size = useContext(ResponsiveContext);

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
						<Grid columns={['medium', 'medium', 'medium']} gap='small'>
							<DataGripCard name='Hello'/>
							<DataGripCard name='Hello'/>
							<DataGripCard name='Hello'/>
						</Grid>
					</Box>
				</Box>
			</Grid>
		</Grommet>
  	);
}

export default App;

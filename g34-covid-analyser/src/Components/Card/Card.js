import React from 'react';
//import { Card, CardBody, CardHeader, Heading } from 'grommet';
import Graph from '../Graphs/Graph';

import Card from 'react-bootstrap/Card';

class DataGripCard extends React.Component {
    
    render() {
        return (
            <Card className='text-white' style={{ width: '20rem', backgroundColor:  '#202B33'}}>
              <Card.Body>
                <Card.Title>{ this.props.name }</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{ this.props.index }</Card.Subtitle>
                <Card.Body style={{ padding: '2px'}}>
                  <Graph>{ this.props.type }</Graph>
                </Card.Body>
                <Card.Text>
                  Some quick example text incase 
                  the user may want to put notes here. 
                  This feature can easily be taken out 
                  but I implemented it just incase we had 
                  a use for it.
                </Card.Text>
                <Card.Link href='#'>Enlarge</Card.Link>
                <Card.Link href='#'>Edit</Card.Link>
              </Card.Body>
            </Card>
        );
    }
}

export default DataGripCard;
import React from 'react';
//import { Card, CardBody, CardHeader, Heading } from 'grommet';
import Graph from '../Graphs/Graph';

import Card from 'react-bootstrap/Card';


/*
function Example() {
    const [show, setShow] = React.useState();
    return (
      <Box>
        <Button label="show" onClick={() => setShow(true)} />
        {show && (
          <Layer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
          >
            <Button label="close" onClick={() => setShow(false)} />
          </Layer>
        )}
      </Box>
    );
  }




  <Card>
                <CardHeader align='center' direction='row' flex={false} justify='between' gap='small' pad='small'>
                    <Heading>{this.props.name}</Heading>
                </CardHeader>
                <CardBody pad='small' />
                <Graph />
            </Card>
*/


class DataGripCard extends React.Component {
    

    render() {
        
        return (
            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title>{ this.props.name }</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{ this.props.index }</Card.Subtitle>
                <Card.Body style={{ padding: '2px'}}>
                  <Graph />
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
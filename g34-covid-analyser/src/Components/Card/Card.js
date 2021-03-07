import React from 'react';
import { Card, CardBody, CardHeader, Heading } from 'grommet';
import Graph from '../Graphs/Graph';



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
*/


class DataGripCard extends React.Component {
    

    render() {
        
        return (
            <Card>
                <CardHeader align='center' direction='row' flex={false} justify='between' gap='small' pad='small'>
                    <Heading>{this.props.name}</Heading>
                </CardHeader>
                <CardBody pad='small' />
                <Graph />
            </Card>
        );
    }
}

export default DataGripCard;
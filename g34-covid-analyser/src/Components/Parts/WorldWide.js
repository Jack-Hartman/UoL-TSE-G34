import React, { useEffect } from 'react';

// Import Boootstrap components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Import Victory:
import { VictoryChart, VictoryLine, VictoryTheme, VictoryArea, VictoryStack, VictoryPortal, VictoryGroup, VictoryScatter } from 'victory';

class Worldwide extends React.Component{

    render() {
        return (
            <Container style={{padding: '10px', backgroundColor: '#293742', alignSelf: 'center'}}>
                
                        <div style={
                            {
                                width: '30rem', 
                                backgroundColor: '#293742', 
                            }
                        }>
                            <Card  className='text-white' style={{ backgroundColor: '#202B33'}}>
                                <Card.Body>
                                    <Card.Title>Deaths / Cases</Card.Title>
                                    <Card.Subtitle className='mb-2 text-muted'>World Wide</Card.Subtitle>
                                    <Card.Body style={{ padding: '2px'}}>
                                        <VictoryChart scale={{ x: "time" }} width={400} height={400} animate={1000}>
                                            <VictoryStack colorScale="warm">
                                                <VictoryGroup
                                                    data={[
                                                        { x: 'Jan 2020', y: 2 },
                                                        { x: 'Feb 2020', y: 3 },
                                                        { x: 'March 2020', y: 5 },
                                                        { x: 'April 2020', y: 4 },
                                                        { x: 'May 2020', y: 6 }
                                                    ]}
                                                >
                                                <VictoryArea interpolation={'natural'} />
                                                <VictoryPortal>
                                                    <VictoryScatter
                                                    style={{ data: { fill: "black" } }}
                                                    />
                                                </VictoryPortal>
                                                </VictoryGroup>
                                                <VictoryGroup
                                                data={[
                                                    { x: 'Jan 2020', y: 2 },
                                                    { x: 'Feb 2020', y: 3 },
                                                    { x: 'March 2020', y: 5 },
                                                    { x: 'April 2020', y: 4 },
                                                    { x: 'May 2020', y: 6 }
                                                ]}
                                                >
                                                <VictoryArea interpolation={'natural'} />
                                                <VictoryPortal>
                                                    <VictoryScatter
                                                    style={{ data: { fill: "black" } }}
                                                    />
                                                </VictoryPortal>
                                                </VictoryGroup>
                                                <VictoryGroup
                                                data={[
                                                    { x: 'Jan 2020', y: 2 },
                                                    { x: 'Feb 2020', y: 3 },
                                                    { x: 'March 2020', y: 5 },
                                                    { x: 'April 2020', y: 4 },
                                                    { x: 'May 2020', y: 6 }
                                                ]}
                                                >
                                                <VictoryArea interpolation={'natural'} />
                                                <VictoryPortal>
                                                    <VictoryScatter
                                                    style={{ data: { fill: "black" } }}
                                                    />
                                                </VictoryPortal>
                                                </VictoryGroup>
                                            </VictoryStack>
                                            </VictoryChart>
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
                        </div>
            </Container>
        )
    }
}

export default Worldwide;

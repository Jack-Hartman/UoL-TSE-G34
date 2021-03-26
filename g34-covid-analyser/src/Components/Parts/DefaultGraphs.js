import React, { Component, useEffect, useState } from 'react';

// Import Boootstrap components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Import victory charts:
import { 
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryBar,
    VictoryPie
} from 'victory';

// Import my Components:
import DataGripCard from '../Card/Card';

const data = [
    {x: 'Deaths', y: 13000},
    {x: 'Recovered', y: 500},
];


const DefaultGraphs = () => {

    useEffect(() => {
        fetch('/api').then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => console.log(data));
    })
    
    return (
        <Container style={{padding: '10px', backgroundColor: '#293742', alignSelf: 'center'}}>
            <Row>
                <Col>
                    <div style={
                        {
                            width: '20rem', 
                            backgroundColor: '#293742', 
                            alignContent: 'center', 
                            marginRight: '10px', 
                            marginTop: '10px' 
                        }
                    }>
                        <Card className='text-white' style={{ width: '20rem', backgroundColor:  '#202B33'}}>
                            <Card.Body>
                                <Card.Title>Deaths / Recoveries</Card.Title>
                                <Card.Subtitle className='mb-2 text-muted'>UK</Card.Subtitle>
                                <Card.Body style={{ padding: '2px'}}>
                                {/* <Graph>{ this.props.type }</Graph> */}
                                    <VictoryChart
                                        // adding the material theme provided with Victory
                                        theme={VictoryTheme.material}
                                    >
                                        
                                        <VictoryPie data={data} />
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
                </Col>
                <Col>
                    <div style={{
                        width: '20rem', 
                        backgroundColor: '#293742', 
                        alignContent: 'center', 
                        marginRight: '10px', 
                        marginTop: '10px' 
                    }}>
                        <Card className='text-white' style={{ width: '20rem', backgroundColor:  '#202B33'}}>
                            <Card.Body>
                                <Card.Title>Men VS Women</Card.Title>
                                <Card.Subtitle className='mb-2 text-muted'>UK</Card.Subtitle>
                                <Card.Body style={{ padding: '2px'}}>
                                {/* <Graph>{ this.props.type }</Graph> */}
                                    
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
                </Col>
                <Col>
                    <div style={{
                        width: '20rem', 
                        backgroundColor: '#293742', 
                        alignContent: 'center', 
                        marginRight: '10px', 
                        marginTop: '10px' 
                    }}>
                        <Card className='text-white' style={{ width: '20rem', backgroundColor:  '#202B33'}}>
                            <Card.Body>
                                <Card.Title>Deaths / Recoveries / Living / Infected</Card.Title>
                                <Card.Subtitle className='mb-2 text-muted'>UK</Card.Subtitle>
                                <Card.Body style={{ padding: '2px'}}>
                                {/* <Graph>{ this.props.type }</Graph> */}

                                



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
                </Col>
            </Row>
        </Container>
    )
}

export default DefaultGraphs;

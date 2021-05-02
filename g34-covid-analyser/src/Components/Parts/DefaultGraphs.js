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
    VictoryPie,
    VictoryGroup
} from 'victory';

// Import my Components:
import DataGripCard from '../Card/Card';



const graphicColor = ['#388087', '#6fb3b8', '#99FADC'];

const DefaultGraphs = (props) => {


    const defaultData = [
        {x: 'Deaths', y: 500},
        {x: 'Recovereed', y: 500}
    ]

    const chartTheme = {
        axis: {
          style: {
            tickLabels: {
              // this changed the color of my numbers to white
              fill: 'white',
            },
          },
        },
      };

    const [dataToDisplay, setGraphicData] = useState(defaultData);
    // let homeData = props.data.home_data;
    // console.log(homeData);

    // defaultData[0].y = props.data.home_data["Deaths - cumulative total"];
    // defaultData[1].y = props.data.home_data["Cases - cumulative total"];

    // useEffect(() => {
    //     fetch('/defaultData').then((res) => {
    //         if (res.ok) {
    //             return res.json();
    //         }
    //     }).then(data => console.log(data));

    //     setGraphicData(data); // Setting the data that we want to display
    // }, []);

    return (
        <Container fluid style={{ backgroundColor: '#293742', alignSelf: 'center'}}>
            <Row>
                <Col>
                    <div style={
                        {
                            width: '20rem', 
                            backgroundColor: '#293742', 
                            alignContent: 'center',
                            marginTop: '10px' 
                        }
                    }>
                        <Card className='text-white' style={{ width: '20rem', backgroundColor:  '#202B33'}}>
                            <Card.Body>
                                <Card.Title>Deaths / Recoveries</Card.Title>
                                <Card.Subtitle className='mb-2 text-muted'>{props.data.home_data.Name}</Card.Subtitle>
                                <Card.Body style={{ padding: '2px'}}>
                                {/* <Graph>{ this.props.type }</Graph> */}
                                    {/* <VictoryChart
                                        // adding the material theme provided with Victory
                                        theme={VictoryTheme.material}
                                    > */}
                                        
                                    <VictoryPie 
                                        animate={{ easing: 'exp', duration: 1000 }} 
                                        data={[
                                            { x: 'Deaths', y: props.data.home_data["Deaths - cumulative total"]},
                                            { x: 'Cases', y: props.data.home_data["Cases - cumulative total"] }
                                        ]} 
                                        width={250} 
                                        height={250}
                                        style={{ 
                                            labels: { fontSize: 12, fill: "white"},
                                            data: {
                                                fillOpacity: 1
                                            }
                                        }}
                                        colorScale={graphicColor} 
                                        innerRadius={50} 
                                        theme={chartTheme}
                                    />
                                    {/* </VictoryChart> */}
                                </Card.Body>
                                <Card.Text>
                                    <p>Death and recoveries for the country</p>
                                    <h6 color='#388087'>Deaths: {props.data.home_data["Deaths - cumulative total"]}</h6>
                                    <h6 color='#6fb3b8'>Cases: {props.data.home_data["Cases - cumulative total"]}</h6>
                                </Card.Text>
                                <Card.Link href='#'>Enlarge</Card.Link>
                                <Card.Link href='#'>Edit</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                <div style={
                        {
                            width: '20rem', 
                            backgroundColor: '#293742', 
                            alignContent: 'center',
                            marginTop: '10px' 
                        }
                    }>
                        <Card className='text-white' style={{ width: '20rem', backgroundColor:  '#202B33'}}>
                            <Card.Body>
                                <Card.Title>Global Deaths / Cases / Population </Card.Title>
                                <Card.Subtitle className='mb-2 text-muted'>Global</Card.Subtitle>
                                <Card.Body style={{ padding: '2px'}}>
                                {/* <Graph>{ this.props.type }</Graph> */}
                                    {/* <VictoryChart
                                        // adding the material theme provided with Victory
                                        theme={VictoryTheme.material}
                                    > */}
                                        
                                    <VictoryPie 
                                        animate={{ easing: 'exp', duration: 1000 }} 
                                        data={[
                                            { x: 'Deaths', y: props.data.global_data["Deaths - cumulative total"]},
                                            { x: 'Cases', y: props.data.global_data["Cases - cumulative total"] }
                                        ]} 
                                        width={250} 
                                        height={250}
                                        style={{ 
                                            labels: { fontSize: 12, fill: "white"},
                                            data: {
                                                fillOpacity: 1
                                            }
                                        }}
                                        colorScale={graphicColor} 
                                        innerRadius={50} 
                                        theme={chartTheme}
                                    />
                                    {/* </VictoryChart> */}
                                </Card.Body>
                                <Card.Text>
                                    <p>Death and recoveries for the country</p>
                                    <h6 color='#388087'>Deaths: {props.data.home_data["Deaths - cumulative total"]}</h6>
                                    <h6 color='#6fb3b8'>Cases: {props.data.home_data["Cases - cumulative total"]}</h6>
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

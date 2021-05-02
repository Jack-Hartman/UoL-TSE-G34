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

const colors = [
    [ '#388087', '#6fb3b8' ],
    [ '#5D7529', '#DBF7A0' ],
    [ '#36752E', '#B3F7AA' ],
    [ '#317546', '#B1F7C6' ],
    [ '#2F745D', '#AFF7DF' ],
    [ '#347175', '#B6F2F7' ],
    [ '#374775', '#BECCF7' ],
    [ '#4C3374', '#CFB6F7' ],
    [ '#603074', '#E1AFF7' ],
    [ '#75276F', '#F79BEF' ],
    [ '#751930', '#F77E9C' ],
    [ '#751D17', '#F7837B' ],
    [ '#75311A', '#F79E80' ],
    [ '#754E1D', '#F7C588' ],
    [ '#755419', '#F7CA7E' ],
    [ '#746337', '#F7E6BE' ],
    [ '#756D1B', '#F7ED83' ],
    [ '#A8608E', '#E1FFDE' ],
    [ '#A87060', '#DEFFF6' ],
    [ '#A88560', '#DEF6FF' ],
    [ '#A89F60', '#E3DEFF' ],
    [ '#60A8A1', '#FFE8DE' ],
    [ '#6079A8', '#FFF5DE' ],
    [ '#357C8F', '#F96B64' ],
    [ '#37358F', '#F9A54F' ],
    [ '#82358F', '#F9E272' ],
    [ '#8F5435', '#76FA85' ],
    [ '#906C35', '#74F6C4' ],
    [ '#388087', '#6fb3b8' ],
    [ '#5D7529', '#DBF7A0' ],
    [ '#36752E', '#B3F7AA' ],
    [ '#317546', '#B1F7C6' ],
    [ '#2F745D', '#AFF7DF' ],
    [ '#347175', '#B6F2F7' ],
    [ '#374775', '#BECCF7' ],
    [ '#4C3374', '#CFB6F7' ],
    [ '#603074', '#E1AFF7' ],
    [ '#75276F', '#F79BEF' ],
    [ '#751930', '#F77E9C' ],
    [ '#751D17', '#F7837B' ],
    [ '#75311A', '#F79E80' ],
    [ '#754E1D', '#F7C588' ],
    [ '#755419', '#F7CA7E' ],
    [ '#746337', '#F7E6BE' ],
    [ '#756D1B', '#F7ED83' ],
    [ '#A8608E', '#E1FFDE' ],
    [ '#A87060', '#DEFFF6' ],
    [ '#A88560', '#DEF6FF' ],
    [ '#A89F60', '#E3DEFF' ],
    [ '#60A8A1', '#FFE8DE' ],
    [ '#6079A8', '#FFF5DE' ],
    [ '#357C8F', '#F96B64' ],
    [ '#37358F', '#F9A54F' ],
    [ '#82358F', '#F9E272' ],
    [ '#8F5435', '#76FA85' ],
    [ '#906C35', '#74F6C4' ]
]



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
                <Row>
                    <Col>
                        <h2>All countries data within home region:</h2>
                    </Col>
                </Row>
                {
                    props.data.region_data.map((x, x1) => {
                        return (
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
                                            <Card.Title>{x.Name}</Card.Title>
                                            <Card.Subtitle className='mb-2 text-muted'>Deaths / Cases</Card.Subtitle>
                                            <Card.Body style={{ padding: '2px'}}>
                                            <VictoryPie 
                                                animate={{ easing: 'exp', duration: 1000 }} 
                                                data={[
                                                    { x: 'Deaths', y: x["Deaths - cumulative total"]},
                                                    { x: 'Cases', y: x["Cases - cumulative total"] }
                                                ]} 
                                                width={250} 
                                                height={250}
                                                style={{ 
                                                    labels: { fontSize: 12, fill: "white"},
                                                    data: {
                                                        fillOpacity: 1
                                                    }
                                                }}
                                                colorScale={colors[x1]} 
                                                innerRadius={50} 
                                                theme={chartTheme}
                                            />
                                                
                                            </Card.Body>
                                            <Card.Text>
                                                <h4>Cases: { x["Cases - cumulative total"] }</h4>
                                                <h4>Deaths: { x["Deaths - cumulative total"] }</h4>
                                            </Card.Text>
                                            <Card.Link href='#'>Enlarge</Card.Link>
                                            <Card.Link href='#'>Edit</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default DefaultGraphs;

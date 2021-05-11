import React from 'react';

// Import Boootstrap components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Import victory charts:
import { VictoryPie } from 'victory';

// For all of the chart colors.
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

    let dataChoice = [
        'Cumulative total', 
        'Cumulative total per 100000 population', 
        'Newly reported in last 24 hours', 
        'Newly repoted in last 7 days'
    ];

    console.log('Default Graphs');
    console.log(dataChoice[props.retrievalType]);

    return (
        <Container fluid style={{ backgroundColor: '#293742', alignSelf: 'center'}}>
            <Row>
            <Container>
                    <Jumbotron className="text-white" style={{ backgroundColor:  '#202B33' }}>
                        <h1>Welcome to G34 Covid Analyser</h1>
                        { /* This is for the local cases and deaths */ }
                        <Row style={{ marginBottom:'10px' }}>
                            <Col>

                            </Col>
                            <Col xs={6}>
                                <Card style={{ backgroundColor: '#193038'}}>
                                    <Card.Body>
                                        <p>You are currently viewing the data in this mode: {dataChoice[props.retrievalType]}.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>{ props.data.home_data.Name }</h3>
                                <div className="jumbo-charts">
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
                                        colorScale={colors[0]} 
                                        innerRadius={50} 
                                        theme={chartTheme}
                                    />
                                </div>
                                <Card style={{ backgroundColor: '#193038'}}>
                                    <Card.Body>
                                        <h6 color='#388087'>Deaths: {props.data.home_data["Deaths - cumulative total"]}</h6>
                                        <h6 color='#6fb3b8'>Cases: {props.data.home_data["Cases - cumulative total"]}</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <h3>Global</h3>
                                <div className="jumbo-charts">
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
                                        colorScale={colors[0]} 
                                        innerRadius={50} 
                                        theme={chartTheme}
                                    />
                                </div>
                                <Card style={{ backgroundColor: '#193038'}}>
                                    <Card.Body>
                                        <h6 color='#388087'>Deaths: {props.data.home_data["Deaths - cumulative total"]}</h6>
                                        <h6 color='#6fb3b8'>Cases: {props.data.home_data["Cases - cumulative total"]}</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        { /* This is for the global cases and deaths */ }
                    </Jumbotron>
                </Container>
            </Row>
            <Row>
                
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

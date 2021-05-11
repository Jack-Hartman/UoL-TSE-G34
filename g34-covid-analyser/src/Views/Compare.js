import '../Styles/Compare.css';

import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'; 

import {
    VictoryChart,
    VictoryGroup,
    VictoryBar
} from 'victory';



class Compare extends Component {

    constructor(props) {
        super (props);

        this.state = { Countries: ['none'], SelectedCountries: [] };

        // For all of the chart colors.
        this.colors = [
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

        this.chartTheme = {
            axis: {
                style: {
                    tickLabels: {
                        fill: 'white',
                    }
                }
            }
        }

        this.dataChoice = [
            'Cumulative total', 
            'Cumulative total per 100000 population', 
            'Newly reported in last 24 hours', 
            'Newly repoted in last 7 days'
        ];

        this.jsonDataChoice = {
            cases: [
                'Cases - cumulative total',
                'Cases - cumulative total per 100000 population',
                'Cases - newly reported in last 24 hours',
                'Cases - newly reported in last 7 days',
                'Cases - newly reported in last 7 days per 100000 population'
            ],
            deaths: [
                'Deaths - cumulative total',
                'Deaths - cumulative total per 100000 population',
                'Deaths - newly reported in last 24 hours',
                'Deaths - newly reported in last 7 days',
                'Deaths - newly reported in last 7 days per 100000 population'
            ]
        }

        this.clearCountries = this.clearCountries.bind(this); 
    }

    componentDidMount() { //Runs after the component has been mounted
        fetch(`${process.env.REACT_APP_API_LOC}/who-countries`).then((res) => {
            if (res.ok) {
                console.log(res);
                return res.json();
            }
        }).then(data => {
            console.log(data);
            this.setState(state => ({
                Countries: data.countries
            }));
        });
    }

    listClick(arg) {
        if (this.state.SelectedCountries.length === 4) {
            console.log('NOOOOO');
        } else {    
            console.log(`List click: ${arg}`);
            fetch(`${process.env.REACT_APP_API_LOC}/worldwide?country=${arg}`).then((res) => {
                if (res.ok) {
                    console.log(res);
                    return res.json();
                }
            }).then(data => {
                console.log(data);
                let previouslySelectedCountries = this.state.SelectedCountries;
                previouslySelectedCountries.push(data.home_data);
                this.setState(state => ({
                    SelectedCountries: previouslySelectedCountries
                }));

                console.log(`Selected Countries: ${this.state.SelectedCountries}`);
                console.log(this.state.SelectedCountries);
            }); 
        }
    }

    shortenCountryWords(arg) {
        
    }

    clearCountries() {
        this.setState(state => ({
            SelectedCountries: []
        }));
    }


    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs={2}>
                    <Card className='scrollable' style={{ width: '14rem', height: '50rem', backgroundColor:  '#202B33', color: 'white', borderColor: '#A7FFF4' }}>
                        <ListGroup  variant="flush">
                            {
                                this.state.Countries.map((x) => {
                                    return <ListGroup.Item style={{ backgroundColor:  '#202B33', color: 'white', borderColor: '#A7FFF4'}} onClick={() => this.listClick(x)}>{x}</ListGroup.Item>
                                })
                            }
                        </ListGroup>
                        
                    </Card>
                    </Col>
                    <Col xs={10}>
                        <Container>
                            <Card className='text-white' style={{ width: '60rem', marginBottom: '20px', backgroundColor:  '#202B33' }}>
                                <Card.Header as="h5">Key and data</Card.Header>
                                    <h3>Currently viewing: {this.dataChoice[this.props.retrievalType]}</h3>
                                    <Card.Body>
                                        <Table striped bordered hover variant="dark">
                                            <thead>
                                                <tr>
                                                <th>Color</th>
                                                <th>Country</th>
                                                <th>Cases</th>
                                                <th>Deaths</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.SelectedCountries.map((country, index) => {
                                                        return (
                                                            <tr>
                                                                <td style={{backgroundColor: this.colors[index + 10][0], color: 'white'}}>{ index + 1 }</td>
                                                                <td>{ country.Name }</td>
                                                                <td>{ country[this.jsonDataChoice.cases[this.props.retrievalType]] }</td>
                                                                <td>{ country[this.jsonDataChoice.deaths[this.props.retrievalType]] }</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                        <Card.Link onClick={this.clearCountries}>Clear</Card.Link>
                                    </Card.Body>
                            </Card>

                            <Card className='text-white' style={{ width: '60rem', backgroundColor:  '#202B33'  }}>
                                <Card.Header as="h5"> Cases Comparison</Card.Header>
                                    <Card.Body>
                                        The key with all assosiated colours goes here.
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Cases Compared</Card.Title>
                                        {/* domainPadding={{ x : [20, 20] }} */}
                                        <div style={{padding: '20px' }}>
                                            <VictoryChart theme={this.chartTheme} style={{ grid: { stroke: 'none',parent: { border: '3px solid #ffffff' } } }} padding={{ left: 80, bottom: 40, right: 20 }} domainPadding={{ x: 50, y: 50 }}>
                                                <VictoryGroup offset={10}
                                                >
                                                    {
                                                        this.state.SelectedCountries.map((country, index) => {
                                                            return <VictoryBar style={{ data: { fill: this.colors[index + 10][0] } }} data={[ { x: country.Name, y: country[this.jsonDataChoice.cases[this.props.retrievalType]]  } ]}/>
                                                        })
                                                    }

                                                </VictoryGroup>
                                            </VictoryChart>
                                        </div>
                                </Card.Body>
                            </Card>

                            <Card className='text-white' style={{ width: '60rem', marginTop: '20px', backgroundColor: '#202B33' }}>
                                <Card.Header as="h5">Deaths Comparison</Card.Header>
                                    <Card.Body>
                                        The key with all assosiated colours goes here.
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Deaths Compared</Card.Title>
                                        <VictoryChart theme={this.chartTheme} style={{ grid: { stroke: 'none',parent: { border: '3px solid #ffffff' } } }} padding={{ left: 80, bottom: 40, right: 20 }} domainPadding={{ x: 50 }}>
                                            <VictoryGroup offset={20}
                                            >
                                                
                                                {
                                                    this.state.SelectedCountries.map((country, index) => {
                                                        return <VictoryBar style={{ data: { fill: this.colors[index + 10][0] } }} data={[{ x: country.Name, y: country[this.jsonDataChoice.deaths[this.props.retrievalType]]} ]}/>
                                                    })
                                                }

                                            </VictoryGroup>
                                        </VictoryChart>
                                        
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Compare;
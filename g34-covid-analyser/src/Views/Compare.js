import '../Styles/Compare.css';

import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class Compare extends Component {

    constructor(props) {
        super (props);

        this.state = { Countries: ['none'], SelectedCountries: [] };

    }

    componentDidMount() { //Runs after the component has been mounted
        fetch('/who-countries').then((res) => {
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
        console.log(`List click: ${arg}`);
        fetch(`/worldwide?country=${arg}`).then((res) => {
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

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                    <Card className='scrollable' style={{ width: '18rem', height: '35rem' }}>
                        <ListGroup variant="flush">
                            {
                                this.state.Countries.map((x) => {
                                    return <ListGroup.Item onClick={() => this.listClick(x)}>{x}</ListGroup.Item>
                                })
                            }
                        </ListGroup>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '45rem', height: '35rem' }}>
                        <Card.Header as="h5">Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Compare;
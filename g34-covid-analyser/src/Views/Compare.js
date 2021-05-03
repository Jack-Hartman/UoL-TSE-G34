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

        this.setState({ countries: [] });

    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                    <Card className='scrollable' style={{ width: '18rem', height: '35rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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
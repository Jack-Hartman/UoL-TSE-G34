import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <Container>
            <h1>G34 Covid Analyser</h1>
            <Card className='text-white' style={{ width: '20rem', backgroundColor:  '#202B33'}}>
                <Card.Title>
                    How to install for development
                </Card.Title>
                <Card.Body>
                    <h3>Front End:</h3>
                    <p>Go to repo in terminal. 
                        Then go to the g34-covid-analyser folder.
                        Then run 'npm instal'
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default About;


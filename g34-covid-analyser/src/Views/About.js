import React from 'react';

// Import react bootstrap components:
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <Container>
            <Jumbotron>
                <h1>Welcome to G34 Covid Analyser</h1><br/>
                <h3>Max Pittock (19700422)</h3>
                <h3>Galani Anagnostopoulou (06061790)</h3>
                <h3>Jack Hartman (19702197)</h3>
                <h3>Joseph Murphy (19700614)</h3>
                <h3>Thomas Houghton (19697363)</h3>
            </Jumbotron>
            <Jumbotron>
                <h1>Promotion</h1><br/>
                <div className="video-responsive">
                    <iframe
                      width="100%"
                      height="580px"
                      src={`https://www.youtube.com/embed/IdHhK-H0v_I`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                </div>
            </Jumbotron>
            
        </Container>
    );
}

export default About;


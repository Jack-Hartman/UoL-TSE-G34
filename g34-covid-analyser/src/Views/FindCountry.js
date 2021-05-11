
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../Styles/Loading.css';

// Create a view where the user can select the country they're from.
class FindCountry extends React.Component {
    
    constructor(props) {
        super (props);
        this.state = { Countries: ['none'] };
    }
    
    componentDidMount() { //Runs after the component has been mounted
        fetch(`${process.env.REACT_APP_API_LOC}/who-countries`).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => {
            this.setState(state => ({
                Countries: data.countries
            }));
        });
    }

    render() {
        console.log(this.state.Countries);
        return(
            <div>
                <Container>
                    <Jumbotron className='text-white' style={{marginTop: '30px', backgroundColor:  '#202B33' }}>
                        <h1>Welcome to G34 Covid Analyser</h1>
                        <p>Please select the country that you are from:</p>
                    </Jumbotron>
                    {
                        <>{this.state.Countries.length === 1 ? 
                        <div class="loader-inner">
                            <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                            </div>
                            <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                            </div>
                            <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                            </div>
                            <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                            </div>
                            <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                            </div>
                        </div>:this.state.Countries.map((x) => {
                            return <Button variant="info" style={{ margin: '10px' }} onClick={() => { this.props.action(x) }}>{x}</Button>
                        }) }</>
                    }
                </Container>
            </div>
        );
    }    
}

export default FindCountry;

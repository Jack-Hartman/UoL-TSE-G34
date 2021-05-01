
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

// Create a view where the user can select the country they're from.
class FindCountry extends React.Component {
    
    constructor(props) {
        super (props);
        this.state = { Countries: ['none'] };
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

    render() {
        console.log(this.state.Countries);
        return(
            <div>
                <h1>Select Which Country You're From</h1>   
                <Container>
                    {
                        this.state.Countries.map((x) => {
                            return <Button style={{ margin: '10px' }} onClick={() => { this.props.action(x) }}>{x}</Button>
                        })
                    }
                </Container>
            </div>
        );
    }    
}

export default FindCountry;

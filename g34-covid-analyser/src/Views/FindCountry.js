
import React, { useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Create a view where the user can select the country they're from.
class FindCountry extends React.Component {
    
    constructor(props) {
        super (props);

        this.countries = null;
    }
    
    componentDidMount() { //Runs after the component has been mounted
        fetch('/who-countries').then((res) => {
            if (res.ok) {
                console.log(res);
                return res.json();
            }
        }).then(data => {
            console.log(data);
            this.countries = data;
        });
    }

    render() {

        return(
            <div>
                <h1>BUtTTONTOTNOTNT</h1>
                <Button onClick={() => { this.props.action('Brazil') }}>Push Me</Button>        
            </div>
        );
    }    
}

export default FindCountry;

// //ParentA component
// class ParentA extends React.Component {

//     constructor(props) {
//         super(props);
//         var handleToUpdate  = this.handleToUpdate.bind(this);
//         var arg1 = '';
//     }

//     handleToUpdate(someArg){
//             alert('We pass argument from Child to Parent: ' + someArg);
//             this.setState({arg1:someArg});
//     }

//     render() {
//         var handleToUpdate  =   this.handleToUpdate;

//         return (<div>
//                     <ChildB handleToUpdate = {handleToUpdate.bind(this)} /></div>)
//     }
// }
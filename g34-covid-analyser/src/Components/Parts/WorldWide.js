import React from 'react';

// Import Boootstrap components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Import Victory:
import { 
    VictoryChart,
    VictoryTooltip, 
    VictoryLabel,
    VictoryBar,
    VictoryAxis,
    VictoryStack
} from 'victory';

class CustomLabel extends React.Component {
    render() {
      return (
        <g>
          <VictoryLabel {...this.props}/>
          <VictoryTooltip
            {...this.props}
            x={200} y={250}
            orientation="top"
            pointerLength={0}
            cornerRadius={50}
            flyoutWidth={100}
            flyoutHeight={100}
            flyoutStyle={{ fill: "black" }}
          />
        </g>
      );
    }
  }
  
  CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;



const Worldwide = (props) => {

    let deaths = [];
    let cases = [];

    props.data.region_data.forEach(element => {
        console.log(element.Name);
        console.log(element["Cases - cumulative total"]);

        deaths.push({ x: element.Name, y: element["Deaths - cumulative total"]});
        
    });

    props.data.region_data.forEach(element => {
        cases.push({ x: element.Name, y: element["Cases - cumulative total"]});
    });

    console.log(deaths);
    console.log(cases);

    let newData = [deaths, cases];
    console.log(newData);

    const myDataset = [
        [
            { x: "england", y: 1 },
            { x: "scotland", y: 2 },
            { x: "ireland", y: 3 },
            { x: "france", y: 2 },
            { x: "spain", y: 1 }
        ],[
            { x: "england", y: 5 },
            { x: "scotland", y: 8 },
            { x: "ireland", y: 5 },
            { x: "france", y: 9 },
            { x: "spain", y: 20 }
        ]
        
    ];

    return (
        <Container fluid style={{padding: '10px', backgroundColor: '#293742', alignSelf: 'center'}}>
            <div style={
                {
                    width: '30rem', 
                    backgroundColor: '#293742', 
                }  
            }>
                <Card  className='text-white' style={{ backgroundColor: '#202B33', width: '500px'}}>
                    <Card.Body>
                        <Card.Title>Population / Infecfcted / Deaths</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>World Wide</Card.Subtitle>
                        <Card.Body style={{ padding: '2px'}}>
                            {/* <VictoryChart width={400} height={400} animate={1000}>
                                
                            </VictoryChart> */}
                            {/* <VictoryPie
                                style={{ labels: { fill: "white" } }}
                                innerRadius={100}
                                labelRadius={120}
                                labels={({ datum }) => `# ${datum.x}`}
                                labelComponent={<CustomLabel />}
                                data={data}
                            /> */}
                            <VictoryChart height={400} width={400}
                                domainPadding={{ x: 30, y: 20 }} 
                            >
                                <VictoryStack
                                colorScale={["blue", "tomato"]}
                                >
                                {newData.map((data, i) => {
                                    return <VictoryBar data={data} key={i}/>;
                                })}
                                </VictoryStack>
                                <VictoryAxis dependentAxis
                                tickFormat={(tick) => `${tick}%`}
                                />
                                <VictoryAxis
                                tickFormat={["a", "b", "c", "d", "e"]}
                                />
                            </VictoryChart>
                        </Card.Body>
                        <Card.Text>
                        Some quick example text incase 
                        the user may want to put notes here. 
                        This feature can easily be taken out 
                        but I implemented it just incase we had 
                        a use for it.
                        </Card.Text>
                        <Card.Link href='#'>Enlarge</Card.Link>
                        <Card.Link href='#'>Edit</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}

export default Worldwide;


  
  

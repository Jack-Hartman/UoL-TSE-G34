import React, { Component, useEffect, useState } from 'react';
import { 
    VictoryPie, 
    VictoryChart, 
    VictoryTheme, 
    VictoryAxis, 
    VictoryBar, 
    VictoryPolarAxis 
} from 'victory';


const iData = [
    { x: "Cats", y: 200 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
]

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];

const pie = () => {
    return (
        <VictoryPie data={iData} />
    );
}

const bar = () => {
    return (
        <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    );
}

const polar = () => {
    return (
        <VictoryChart polar
        theme={VictoryTheme.material}
        >
            {
                ["cat", "dog", "bird", "dog", "frog", "fish"].map((d, i) => {
                return (
                    <VictoryPolarAxis dependentAxis
                    key={i}
                    label={d}
                    labelPlacement="perpendicular"
                    style={{ tickLabels: { fill: "none" } }}
                    axisValue={d}
                    />
                );
                })
            }
            <VictoryBar
                style={{ data: { fill: "tomato", width: 25 } }}
                data={[
                { x: "cat", y: 10 },
                { x: "dog", y: 25 },
                { x: "bird", y: 40 },
                { x: "frog", y: 50 },
                { x: "fish", y: 50 }
                ]}
            />
        </VictoryChart>
    );
}

const Graph = (props) => {

    const [data, setData] = useState([]);
    const type = props.type;

    useEffect(() => {
        fetch('/api').then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => console.log(data));
    }, []);

    if (type == '1') {
        return <pie />;
    } else if (type == '2') {
        return <bar />
    } else if (type == '3') {
        return <polar />
    }
}

export default Graph;
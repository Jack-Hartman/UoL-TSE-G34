import React, { Component, useEffect, useState } from 'react';
import { VictoryPie, VictoryChart } from 'victory';

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];

const Graph = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api').then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => console.log(data));
    }, []);

    return (
        
        <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={10}
        >               
            <VictoryPie
            data={[
                { x: "Cats", y: 200 },
                { x: "Dogs", y: 40 },
                { x: "Birds", y: 55 }
            ]}
            />
        </VictoryChart>
    );
}

export default Graph;
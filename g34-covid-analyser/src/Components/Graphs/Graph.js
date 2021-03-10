import React, { Component, useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];

const Graph = () => {

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
            domainPadding={20}
        >
            <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={(x) => (`$${x / 1000}k`)}
            />


            <VictoryBar 
                data={data}
                // datta accessor for x values
                x='quarter'
                // Data accessor for y values.
                y='earnings'
            />
        </VictoryChart>
    );
}

export default Graph;
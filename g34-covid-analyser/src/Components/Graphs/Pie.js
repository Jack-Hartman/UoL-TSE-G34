import React from 'react';
import { VictoryPie } from 'victory';

const pie = () => {
    return <VictoryPie data={[
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 }
      ]} />
}

export default pie;
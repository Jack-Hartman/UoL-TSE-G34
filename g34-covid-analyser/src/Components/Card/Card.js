import React from 'react';
import Graph from '../Graphs/Graph';

export const Card = () => {
    return (
        <div className="col-sm">
            <div className='card' style={{width: '18em'}}>
                <div className='card-body'>
                    <Graph />
                </div>
            </div>
        </div>
    )
}
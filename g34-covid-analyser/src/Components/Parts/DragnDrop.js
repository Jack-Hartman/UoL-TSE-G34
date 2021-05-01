// Import React.
import React, { useState, useRef } from 'react';

// Import Bootstrap Component:
import Col from 'react-bootstrap/Col';

// Import my components:
import DataGripCard from '../Card/Card';

const data = { // Example data for the graphs.
	items: ['1', '2', '3', '4', '5', '6'] // Create a grid like object/array to better initiate the dragging functionality.
}

const types = {
	items: ['1', '2', '3', '1', '2', '3'] // Create a test object to store the graphs created.
}

function DragNdrop() {

    const [list, setList] = useState(data); // Create states for list.
	const [dragging, setDragging] = useState(false); // Create statets for dragging.
	const dragItem = useRef(); 
	const dragNode = useRef();

    const handleDragStart = (e, location) => { // Calls when the mouse clicks on the item to initiate the drag.
		console.log('drag starting', location);
		dragItem.current = location;
		dragNode.current = e.target;
		dragNode.current.addEventListener('dragend', handleDragEnd);
		setTimeout(() => {
			setDragging(true);

		}, 0)
	}

	const handleDragEnd = () => { // Calls when the user lifts the mouse button.
		console.log('Ending Drag');
		setDragging(false);
		dragItem.current = null;
		dragNode.current.removeEventListener('dragend', handleDragEnd);
		dragNode.current = null;
	}

	const handleDragEnter = (e, location) => { // Calls when the object being dragged overlaps another item.
		console.log('Entering Item', location);

		const currentItem = dragItem.current;

		if (e.target !== dragNode.current) {
			console.log("TARGET IS NOT THE SAME");
			setList(oldList => {
				let newList = JSON.parse(JSON.stringify(oldList)); // This isn't very efficient.
				newList.items.splice(location, 0, newList.items.splice(currentItem.i1, 1)[0]);
				dragItem.current = location;	
				return newList;
			})
		}
		console.log(data.items);

	}

    const getStyles = () => { // A template to maybe add stylse to the project.
		return 'current';
	}
	
    return (
        <>
            {/* {
                list.items.map((i, i1) => (
                    <div style={{width: '20rem', backgroundColor: '#293742', alignContent: 'center', marginRight: '10px', marginTop: '10px' }} className={dragging?getStyles():"dndItem"} draggable onDragStart={(e) => {
                        handleDragStart(e, i1)
                    }} 
                    onDragEnter={dragging?(e) => {
                        handleDragEnter(e, i1)
                    } : null}>
                        <Col>
                            <DataGripCard name={i} type={types.items[i1]}/>
                        </Col>
                    </div>
                ))
            } */}
        </>
    );
}

export default DragNdrop;
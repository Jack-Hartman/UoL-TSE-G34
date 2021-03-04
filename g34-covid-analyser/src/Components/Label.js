import React from 'react';
import {useEffect, useState } from 'react';

export const Label = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        fetch('/api').then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then(data => console.log(data));
    }, []);

    return (
        <>
            <h1>Hello</h1>
        </>
    )
}
import React from 'react';
import { Card } from '../Components/Card/card';
import { useEffect, useState } from 'react';

export const TodoPage = () => {


    const [todo, setTodo] = useState([]); 
    useEffect(() => {
        fetch('/api').then((response) => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => console.log(data));
    }, []);


    return ( 
        <> 
            <Card/>
        </>
    )
}

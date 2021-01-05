import React from 'react';
import axios from "axios";

export const App = () => {
    React.useEffect(() => {
        let fetchData = () => {
            return new Promise(() => {
                axios.get('api/todos');
            })
        };
        fetchData().then((result) => {
            console.log(result)
        });
    }, [])
    return <div>WELCOME TO REACT APP!!</div>;
};
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Restournt = () => {
    const restournt = useLoaderData();
    return (
        <div>
            <h3>Hello from Restournt.</h3>
        </div>
    );
};

export default Restournt;
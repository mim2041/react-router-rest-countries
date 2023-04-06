import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';

const Contact = () => {
    return (
        <div>
            <h3>This is the contact page</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;
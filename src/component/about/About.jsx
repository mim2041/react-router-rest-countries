import React from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h3>This is the real about page</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default About;
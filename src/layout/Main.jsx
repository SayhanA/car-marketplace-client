import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar />
            <h2>This is main page.</h2>
            <Outlet />
        </div>
    );
};

export default Main;
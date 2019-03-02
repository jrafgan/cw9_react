import React from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='header'>
            <div className='logo'>Turtle Pizza Admin</div>
            <div className='menu'>
                <NavLink to='/'>Dishes</NavLink>
                <span> | </span>
                <NavLink to='/orders'>Orders</NavLink>
            </div>
        </div>
    );
};

export default Navigation;
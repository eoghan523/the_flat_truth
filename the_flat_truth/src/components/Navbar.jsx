import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/post">Post</link></li>
                <li><link to="/register">Register</link></li>
                <li><link to="/login">Login</link></li>
                <li><link to="/flatearthfacts">Flat Earth Facts</link></li>
            </ul>
            
        </nav>
    );
}

export default Navbar;
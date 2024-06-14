// src/Navbar.js
import React from 'react';
import './Navbar.css';
import NavImage from './HTMLOGHO__NEW-bg.webp';

const Navbar = () => {
    const handleHomeClick = () => {
        window.location.reload(); // Reload the page when Home is clicked
    };
    
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={NavImage}  alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#home" onClick={handleHomeClick}>Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScnroKKV70T5VES3NQBqBRV4cvUNd0Z6ihQ-l2WfFh4bsqj2A/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Register</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

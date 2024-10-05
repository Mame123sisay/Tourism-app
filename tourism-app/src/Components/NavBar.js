import React, { useState } from 'react';
import logo from '../image/logo.jpeg';
import '../style/Nav.css'; // Make sure to create this CSS file

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="main-part">
                <img className="logo" src={logo} alt="logo" />
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul className="items">
                    <li className="list-1">Home</li>
                    <li>About Us</li>
                    <li className="list-3">Contact Us</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
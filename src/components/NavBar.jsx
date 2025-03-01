// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css'; // Assuming the CSS file is in the same directory

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <h1 className="logo">Quest</h1>
            <div className="menuIcon"  onClick={toggleMenu}>
                ☰
            </div>
            <ul className="navLinks" >
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/about-us" className="link">About</Link></li>
                <li><Link to="/gallery" className="link">Gallery</Link></li>
                <li><Link to="https://eventhorizontickets.co.uk/event/quest/"  target="_blank" className="link">Tickets</Link></li>
            </ul>
            {isOpen && (
                <div className="dropdownMenu">
                    <Link to="/" className="dropdownItem" onClick={toggleMenu}>Home</Link>
                    <Link to="/about-us" className="dropdownItem" onClick={toggleMenu}>About</Link>
                    <Link to="/gallery" className="dropdownItem" onClick={toggleMenu}>Gallery</Link>
                    <Link to="https://eventhorizontickets.co.uk/event/quest/" target="_blank" className="dropdownItem" onClick={toggleMenu}>Tickets</Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;

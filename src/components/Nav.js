import React from 'react';
import './Nav.css';
import { useState } from 'react';

function Nav(){
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`navbar ${showLinks ? "show-nav": "hid-nav"}`}>
           <div className="navbar_logo">Logo</div>
           <ul className="navbar_links">
                <li className="navbar_item slideInDown-1">
                    <a href="/" className="navbar_link">
                        Accueil
                    </a>
                </li>
                <li className="navbar_item slideInDown-2">
                    <a href="/portfolio" className="navbar_link"> Portfolio</a>
                </li>
                <li className="navbar_item slideInDown-3">
                    <a href="/service" className="navbar_link">Service</a>
                </li>
                <li className="navbar_item slideInDown-4">
                    <a href="/about" className="navbar_link">A propos</a>
                </li>
                <li className="navbar_item slideInDown-5">
                    <a href="/contact" className="navbar_link">Contact</a>
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>





        </nav>
    );
};

export default Nav;
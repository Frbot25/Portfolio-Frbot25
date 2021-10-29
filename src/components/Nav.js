import React from 'react';
import './Nav.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'


function Nav(){
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log(location);
    return (
        <div className={`navbar ${showLinks ? "show-nav": "hid-nav"}`}>
            <a href="/">
           <div className="navbar_logo" style={{fontSize: '20px'}}>Frédéric Botella</div></a>
           <ul className="navbar_links">
                <li  className={splitLocation[1] === "" ? "active navbar_link" : "navbar_link"}>
                <Link to='/' onClick={handleShowLinks}>Accueil</Link>
                </li>
                <li  className={splitLocation[1] === "portfolio" ? "active navbar_link" : "navbar_link"}>
                <Link to='/portfolio' onClick={handleShowLinks}>Portfolio</Link>
                </li>
                <li  className={splitLocation[1] === "service" ? "active navbar_link" : "navbar_link"}>
                <Link to='/service' onClick={handleShowLinks}>Service</Link>
                </li>
                <li  className={splitLocation[1] === "about" ? "active navbar_link" : "navbar_link"}>
                <Link to='/about' onClick={handleShowLinks}>A propos</Link>
                </li>
                <li  className={splitLocation[1] === "contact" ? "active navbar_link" : "navbar_link"}>
                <Link to='/contact' onClick={handleShowLinks}>Contact</Link>
                </li>
                
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>





        </div>
    );
};

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-dark text-white p-3 text-center">
        <h1>Kyler Jansson</h1>
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item"><Link to="/" className="nav-link text-white">About Me</Link></li>
                <li className="nav-item"><Link to="/portfolio" className="nav-link text-white">Portfolio</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link text-white">Contact</Link></li>
                <li className="nav-item"><Link to="/resume" className="nav-link text-white">Resume</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;

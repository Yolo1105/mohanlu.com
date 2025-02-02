import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/navbar.css'; // Ensure to import your CSS file for styling

function Navbar() {
    return (
        <nav className="navbar fade-in-slide-down">
            <div className="logo" onClick={() => window.location.href = '/'}>
                MohanLu<span className="dot">.</span><span className="underscore">_</span>
            </div>
            <ul className="nav-items">
                <li><Link to="/about" data-number="01">About</Link></li>
                <li><Link to="/experience" data-number="02">Experience</Link></li>
                <li><Link to="/projects" data-number="03">Projects</Link></li>
                <li><Link to="/skills" data-number="04">Skills</Link></li>
                <li><Link to="/contact" data-number="05">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

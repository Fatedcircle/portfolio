import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.scss';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <button className="hamburger-menu" onClick={toggleMobileMenu}>
                ☰
            </button>
            <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
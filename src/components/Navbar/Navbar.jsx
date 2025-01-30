/* eslint-disable react/prop-types */
import { useState } from "react";
import './Navbar.scss';

const Navbar = ({ setActivePage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div>
                <h1>My Portfolio</h1>
            </div>

            <button
                onClick={handleMenuToggle}
                className="hamburger-menu"
            >
                ☰
            </button>

            <ul
                className={`navbar-links ${isMobileMenuOpen ? "mobile-open" : ""}`}
            >
                {["home", "projects", "blog", "about", "contact"].map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => {
                                setActivePage(page);
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

/* eslint-disable react/prop-types */
import { useState } from "react";
import './Navbar.scss'; // Importeer de CSS

const Navbar = ({ setActivePage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div>
                <h1>My Portfolio</h1>
            </div>

            {/* Hamburger menu (alleen zichtbaar op mobiel) */}
            <button
                onClick={handleMenuToggle}
                className="hamburger-menu"
            >
                ☰
            </button>

            {/* Navigatielinks */}
            <ul
                className={`navbar-links ${isMobileMenuOpen ? "mobile-open" : ""}`}
            >
                {["home", "projects", "blog", "about", "contact"].map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => {
                                setActivePage(page);
                                setIsMobileMenuOpen(false); // Sluit menu bij klikken
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

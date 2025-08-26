import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo">
                    Murali Dharan<span>.</span>
                </a>

               {/* Hamburger Menu Button */}
  <div className="hamburger" onClick={toggleMenu}>
    {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
  </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    <li>
                        <a
                            href="https://github.com/LEE-DHARAN"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMenu}
                        >
                            <FaGithub size={25} /> {/* You can adjust size */}
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo">
          DARSH
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#hero" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#education" onClick={closeMenu}>Journey</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import NavHamburger from './NavHamburger';

function NavBar() {
  const [navHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!navHamburgerOpen);
  };

  const closeHamburgerMenu = () => {
    if (navHamburgerOpen) {
      toggleHamburger();
    }
  };

  window.addEventListener('resize', closeHamburgerMenu);
  window.addEventListener('scroll', closeHamburgerMenu);

  return (
    <nav className="nav-bar">
      <p className="nav-bar-title">
        <a href="#top" className="nav-bar-title-link">alexsimon.dev</a>
      </p>
      <ul className="nav-bar-buttons">
        <li>
          <div onClick={toggleHamburger}>
            <NavHamburger />
          </div>
        </li>
        <li>
          <a href="#about-me" className="nav-bar-link">About</a>
        </li>
        <li>
          <a href="#projects" className="nav-bar-link">Projects</a>
        </li>
        <li>
          <a href="#skills" className="nav-bar-link">Skills</a>
        </li>
        <li>
          <a href="#education" className="nav-bar-link">Education</a>
        </li>
        <li>
          <a href="#contact" className="nav-bar-link">Contact</a>
        </li>
      </ul>
      <ul className="nav-bar-buttons-vert" style={{ display: (navHamburgerOpen) ? 'flex' : 'none' }}>
        <li>
          <a href="#about-me" className="nav-bar-link-vert" onClick={closeHamburgerMenu}>About</a>
        </li>
        <li>
          <a href="#projects" className="nav-bar-link-vert" onClick={closeHamburgerMenu}>Projects</a>
        </li>
        <li>
          <a href="#skills" className="nav-bar-link-vert" onClick={closeHamburgerMenu}>Skills</a>
        </li>
        <li>
          <a href="#education" className="nav-bar-link-vert" onClick={closeHamburgerMenu}>Education</a>
        </li>
        <li>
          <a href="#contact" className="nav-bar-link-vert" onClick={closeHamburgerMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from 'react';
function NavBar() {
  return(
    <nav className="nav-bar">
      <p className="nav-bar-title">
          <a href="#top" className="nav-bar-title-link">Alex Simon</a>
      </p>
      <ul className="nav-bar-buttons">
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
    </nav>
  );
}

export default NavBar;
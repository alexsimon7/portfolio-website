import React, {useState} from 'react';
import NavHamburger from "./NavHamburger";
function NavBar() {
  const [navHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!navHamburgerOpen);
  }

  const handleResize = () => {
    if(navHamburgerOpen) {
      toggleHamburger();
    }
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('navigate', handleResize);

  return(
    <nav className="nav-bar">
      <p className="nav-bar-title">
          <a href="#top" className="nav-bar-title-link">Alex Simon</a>
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
      <ul className="nav-bar-buttons-vert" style={{display: (navHamburgerOpen) ? "flex": "none"}}>
        <li>
          <a href="#about-me" className="nav-bar-link-vert">About</a>
        </li>
        <li>
          <a href="#projects" className="nav-bar-link-vert">Projects</a>
        </li>
        <li>
          <a href="#skills" className="nav-bar-link-vert">Skills</a>
        </li>
        <li>
          <a href="#education" className="nav-bar-link-vert">Education</a>
        </li>
        <li>
          <a href="#contact" className="nav-bar-link-vert">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
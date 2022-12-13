import React from "react";
import LinkedIn from "./logos/LI-In-Bug.png";
import Github from "./logos/github-mark.png"

function Footer() {
  return (
    <footer>
     <ul>
       <li>
         <a href="https://www.linkedin.com/in/alexanderleesimon/">
           <img src={LinkedIn} alt="LinkedIn"/>
         </a>
       </li>
       <li>
         Created by Alex Simon
       </li>
       <li>
         <a href="https://github.com/alexsimon7/">
           <img src={Github} alt="GitHub"/>
         </a>
       </li>
     </ul>
    </footer>
  );
}

export default Footer;
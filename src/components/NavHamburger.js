import React from "react";

function NavHamburger() {
  return (
    <div className="nav-hamburger">
      <svg width="30" height="30">
        <rect y="5" rx="3" width="30" height="5"></rect>
        <rect y="15" rx="3" width="30" height="5"></rect>
        <rect y="25" rx="3" width="30" height="5"></rect>
      </svg>
    </div>
  );
}

export default NavHamburger;
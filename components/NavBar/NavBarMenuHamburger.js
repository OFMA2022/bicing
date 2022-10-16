import React from "react";
import classnames from "classnames";

function NavBarMenuHamburger({ open, handleClick }) {
  const menuIcon = classnames("block w-8 h-1 bg-black");

  return !open ? (
    <button onClick={handleClick}>
      <div className="sm:hidden text-black">
        <div className="space-y-2">
          <span className={menuIcon}></span>
          <span className={menuIcon}></span>
          <span className={menuIcon}></span>
        </div>
      </div>
    </button>
  ) : (
    <button onClick={handleClick}>
      <svg
        className="h-10 w-10 text-black"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
}
export default NavBarMenuHamburger;

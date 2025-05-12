import React from "react";
import { cherryBombOne } from "../fonts";

const Header = () => {
  return (
    <div
      className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-51"
      style={{ backgroundColor: "#FBCFE8" }}
    >
      <a className={`btn btn-ghost text-xl ${cherryBombOne.className}`}>S</a>
    </div>
  );
};

export default Header;

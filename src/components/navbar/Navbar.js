import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      data-theme="black"
      className="navbar flex justify-center bg-primary text-primary-content sticky top-0"
    >
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Home
      </Link>
      <a href="#projects" className="btn btn-ghost normal-case text-xl">
        Projects
      </a>
      <a href="#about" className="btn btn-ghost normal-case text-xl">
        About Me
      </a>
      <a href="#contact" className="btn btn-ghost normal-case text-xl">
        Contact
      </a>
    </div>
  );
};

export default Navbar;

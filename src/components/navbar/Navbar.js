import React from "react";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";

const Navbar = () => {
  return (
    <div
      data-theme="black"
      className="navbar flex justify-center  bg-primary text-primary-content"
    >
      <div className="md:block hidden">
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

      <div class="dropdown md:hidden rounded">
        <label tabindex="0" class="btn m-1">
          <span className="text-3xl">
            <FcMenu></FcMenu>
          </span>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow text-white rounded-box w-52 bg-black"
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

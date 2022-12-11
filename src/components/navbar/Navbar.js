import React from "react";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";

const Navbar = () => {
  return (
    <div
      style={{ fontFamily: "Montserrat" }}
      data-theme="black"
      className="navbar flex justify-center  bg-primary text-primary-content"
    >
      <div className="md:block hidden">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/projects" className="btn btn-ghost normal-case text-xl">
          Projects
        </Link>

        <Link to="/about" className="btn btn-ghost normal-case text-xl">
          About Me
        </Link>
        <Link to="/contact" className="btn btn-ghost normal-case text-xl">
          Contact
        </Link>
        <Link to="/blogs" className="btn btn-ghost normal-case text-xl">
          Blogs
        </Link>
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
          <Link to="/projects" className="btn btn-ghost normal-case text-xl">
            Projects
          </Link>

          <Link to="/about" className="btn btn-ghost normal-case text-xl">
            About Me
          </Link>
          <Link to="/contact" className="btn btn-ghost normal-case text-xl">
            Contact
          </Link>
          <Link to="/blogs" className="btn btn-ghost normal-case text-xl">
            Blogs
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

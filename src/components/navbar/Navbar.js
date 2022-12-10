import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      data-theme="black"
      class="navbar flex justify-center bg-primary text-primary-content"
    >
      <Link class="btn btn-ghost normal-case text-xl">Home</Link>
      <a
        href="https://drive.google.com/file/d/1FqUQ9Hv0tRzD5XQzuu1D20GyVOD3Kphq/view?usp=sharing"
        class="btn btn-ghost normal-case text-xl"
      >
        Resume
      </a>
      <Link class="btn btn-ghost normal-case text-xl">Contact</Link>
    </div>
  );
};

export default Navbar;

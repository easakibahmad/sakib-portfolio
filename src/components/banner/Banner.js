import React from "react";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero h-96" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 lg:text-3xl text-2xl font-bold">Hello I'm</h1>
          <p className="mb-5 lg:text-6xl text-4xl">Sakib Ahmad</p>
          <p className="mb-5">Front-end web developer</p>
          <a href="https://drive.google.com/file/d/1FqUQ9Hv0tRzD5XQzuu1D20GyVOD3Kphq/view?usp=sharing">
            <button className="btn btn-outline btn-warning">
              This is my resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

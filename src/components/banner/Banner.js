import React from "react";
import banner from "../../assets/images/banner.jpg";
import sakib from "../../assets/images/sakib.jpg";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${banner})`,
        fontFamily: "Montserrat",
      }}
    >
      <div className="hero-overlay  bg-opacity-60"></div>
      <div className="hero-content text-center py-16 text-neutral-content">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <img className="rounded mb-3" src={sakib} alt="" />
          <div className="my-auto">
            <h1 className="mb-2 lg:text-3xl text-xl font-bold">Hello I'm</h1>
            <p
              style={{ fontFamily: "IBM Plex Serif" }}
              className="mb-3 lg:text-6xl text-4xl"
            >
              Sakib Ahmad
            </p>
            <p className="mb-5">Front-end web developer</p>
            <a href="https://drive.google.com/file/d/1FqUQ9Hv0tRzD5XQzuu1D20GyVOD3Kphq/view?usp=sharing">
              <button className="btn btn-outline btn-warning">
                This is my resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

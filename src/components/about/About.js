import React from "react";
import about from "../../assets/images/about.jpg";
import sakib from "../../assets/images/sakib.jpg";

const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${about})`, fontFamily: "Montserrat" }}
      data-theme="black"
      className="hero p-12 px-12"
    >
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full flex justify-center">
          <img
            src={sakib}
            className=" h-96 lg:pr-12 rounded shadow-2xl"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl">About me</h1>
          <p className="py-6">
            I am currently studying in the fourth year of computer science and
            engineering department of Dhaka University. From last 1 year I am
            working in web development with javascript. I am working on
            javascript frameworks and libraries. Currently working on some
            projects as front end developer.
          </p>
          <a href="https://drive.google.com/file/d/1FqUQ9Hv0tRzD5XQzuu1D20GyVOD3Kphq/view?usp=sharing">
            <button className="uppercase btn btn-warning btn-outline  rounded-xl">
              Hire me now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

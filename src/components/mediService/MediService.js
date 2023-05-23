import React from "react";
import { BsGithub } from "react-icons/bs";

const MediService = ({ item }) => {
  const {
    name,
    about,
    client,
    server,
    liveServer,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  } = item;
  return (
    <div data-theme="black" className="md:py-16 md:px-12 px-6 py-8">
      <h1 className="text-center font-bold text-4xl mb-8">{name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <img className="h-full" src={img1} alt="" />
        <img className="h-full" src={img2} alt="" />
        <img className="h-full  " src={img3} alt="" />
        <img className="h-full " src={img4} alt="" />
        <img className="h-full md:block hidden" src={img5} alt="" />
        <img className="h-full md:block hidden" src={img6} alt="" />
        <img className="h-full md:block hidden" src={img7} alt="" />
        <img className="h-full md:block hidden" src={img8} alt="" />
        <img className="h-full md:block hidden" src={img9} alt="" />
        <img className="h-full md:block hidden" src={img10} alt="" />
        <img className="h-full md:block hidden" src={img11} alt="" />
      </div>
      <h1 className="text-2xl text-center pt-12 mb-3 ">About This Project</h1>

      <div className="md:w-2/5 w-full mx-auto">
        {about.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <div className="flex justify-center gap-4 pt-8 items-center">
        <div>
          <a href={client} className="text-success">
            <span className="flex items-center gap-2 md:text-xl text-sm">
              <BsGithub></BsGithub> CLient Side
            </span>
          </a>
        </div>
        |
        <div>
          <a href={server} className="text-success">
            <span className="flex items-center gap-2 md:text-xl text-sm">
              <BsGithub></BsGithub> Server Side
            </span>
          </a>
        </div>
        |
        <div className="md:text-xl text-sm">
          <a href={liveServer} className="text-success">
            Live Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediService;

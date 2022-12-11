import React from "react";
import Project from "../project/Project";
import project from "../../assets/images/project.jpeg";
import { useLoaderData } from "react-router-dom";

const Projects = () => {
  const projectData = useLoaderData();
  return (
    <div
      style={{ backgroundImage: `url(${project})`, fontFamily: "Montserrat" }}
      data-theme="black"
      className="md:py-16 py-8 px-12"
    >
      <h1 className="text-center text-2xl mb-6">My Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {projectData.map((item) => (
          <Project key={item.id} item={item}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
